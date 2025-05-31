const fs = require('fs');

let rawData = fs.readFileSync('snippets/snippets.json');
let data = JSON.parse(rawData);

const res = [];
for (const prop in data) {
  if (data.hasOwnProperty(prop)) {
    const el = data[prop];
    res.push(
      `- \`${el.prefix}\` → \`${el.body ? el.body.join(' ').replace(/\t/, '').replace(/\s{2,}/g, ' ') : ''}\``
    );
  }
}

const readmePath = 'README.md';
const startMarker = '<!-- SNIPPETS_START -->';
const endMarker = '<!-- SNIPPETS_END -->';

let readme = fs.readFileSync(readmePath, 'utf8');
const snippetsBlock = `${startMarker}\n${res.sort().join('\n')}\n${endMarker}`;

if (readme.includes(startMarker) && readme.includes(endMarker)) {
  readme = readme.replace(
    new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`),
    snippetsBlock
  );
} else {
  // If markers are missing, append at the end
  readme += `\n\n${snippetsBlock}\n`;
}

fs.writeFileSync(readmePath, readme);
console.log('README.md updated with snippet declarations.');
