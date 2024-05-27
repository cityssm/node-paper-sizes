# Paper Sizes

Retrieves **exact dimensions** for common paper sizes.

Unlike other "paper size" packages, this package returns sizes in their specified units.

- North American paper sizes are returned in inches.
- European paper sizes are returned in millimetres.

This avoids strange paper sizes when used in conjunction with report generating tools,
like [@cityssm/pdf-puppeteer](https://www.npmjs.com/package/@cityssm/pdf-puppeteer).

That being said, helper functions are included to return dimensions
in either inches or millimetres.

## Installation

```sh
npm install @cityssm/paper-sizes
```

## Usage

```javascript
import { getPaperSize, getPaperSizeInMillimetres } from '@cityssm/paper-sizes'

console.log(getPaperSize('A4'))
// => { width: 210, height: 297, unit: 'mm' }

console.log(getPaperSize('Letter'))
// => { "width": 8.5, "height": 11, "unit": "in" }

console.log(getPaperSizeInMillimetres('Letter'))
// => { "width": 215.9, "height": 279.4, "unit":"mm" }
```
