# Snippet Mnemonic (Prefix) Generation Rules

Follow these rules:

## 1. Dot-methods (e.g., `.methodName`)

- Prefix: `.` + first two letters of the first word + first letter of each subsequent PascalCase word.
- **Examples:**
  - `.dispatchEvent($1)` → `.die`
  - `.findIndex($1)` → `.fii`
  - `.forEach($1)` → `.foe`
  - `.fromCharCode($1)` → `.frcc`
  - `.isFrozen($1)` → `.isf`
  - `.isSealed($1)` → `.iss`
  - `.reduceRight($1)` → `.rer`
  - `.removeAttribute($1)` → `.rea`
  - `.toLocaleString($1)` → `.tols`

## 2. Static/Global Methods (e.g., `Object.method`, `Array.method`, `JSON.method`)

- Prefix: first three letters of the object/class (lowercase) + first two letters of the first word + first letter of each subsequent word.
- **Examples:**
  - `Array.from($1)` → `arrfr`
  - `JSON.parse($1)` → `jsopa`
  - `JSON.stringify($1)` → `jsost`
  - `Object.freeze($1)` → `objfr`
  - `Object.is($1, )` → `objis` (for "is value", to distinguish from `isExtensible`, `isFrozen`, etc.)
  - `Object.isExtensible($1)` → `objise`
  - `Object.isFrozen($1)` → `objisf`
  - `Object.isSealed($1)` → `objiss`
  - `Promise.resolve($1)` → `prore`

## 3. Keywords or Language Constructs

- Prefix: first two letters of the keyword.
- **Examples:**
  - `function` → `fu`
  - `class` → `cl`
  - `switch` → `sw`

### 4. Utilities and Patterns

- Prefix: first letter of each word in the description or a well-known abbreviation.
- **Examples:**
  - "remove duplicates array" → `rda`
  - "deep clone object" → `dcl`
  - "random integer" → `ran`
  - "short arrow function" → `saf`
