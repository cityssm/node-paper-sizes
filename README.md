# Paper Sizes for Node

[![npm (scoped)](https://img.shields.io/npm/v/@cityssm/paper-sizes)](https://www.npmjs.com/package/@cityssm/paper-sizes)
[![DeepSource](https://app.deepsource.com/gh/cityssm/node-paper-sizes.svg/?label=active+issues&show_trend=true&token=IZDF732zv79o7EdsM_Ov2MRb)](https://app.deepsource.com/gh/cityssm/node-paper-sizes/)
[![Maintainability](https://api.codeclimate.com/v1/badges/639d4198aca631b45c17/maintainability)](https://codeclimate.com/github/cityssm/node-paper-sizes/maintainability)
[![codecov](https://codecov.io/gh/cityssm/node-paper-sizes/graph/badge.svg?token=G4FS2U0JJK)](https://codecov.io/gh/cityssm/node-paper-sizes)
[![Coverage Testing](https://github.com/cityssm/node-paper-sizes/actions/workflows/coverage.yml/badge.svg)](https://github.com/cityssm/node-paper-sizes/actions/workflows/coverage.yml)

Retrieves **exact dimensions** for common paper sizes.

Unlike other "paper size" packages, this package returns sizes in their specified units.

- North American paper sizes (including ANSI and Arch) are returned in inches.
- ISO paper sizes are returned in millimetres.

This avoids strange paper sizes (like Letter paper set at 215.9 mm x 279.4 mm)
when used in conjunction with report generating tools,
like [@cityssm/pdf-puppeteer](https://www.npmjs.com/package/@cityssm/pdf-puppeteer).

That being said, **helper functions are included to return dimensions
in either inches or millimetres** with three-decimal-digit precision.

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

### More Exports

Functions

- `isPaperType(possiblePaperType)`
- `isNorthAmericanPaperType(possiblePaperType)`
- `isIsoPaperType(possiblePaperType)`
- `getLandscapePaperSize(paperType)`

Paper Specification Constants

- `paperSpecifications`
- `northAmericanPaperSpecifications`, `commonNorthAmericanPaperSpecifications`
- `ansiPaperSpecifications`, `archPaperSpecifications`
- `isoPaperSpecifications`
- `aSeriesPaperSpecifications`, `bSeriesPaperSpecifications`, `cSeriesPaperSpecifications`

## Related Projects

[**PDF Puppeteer**](https://www.npmjs.com/package/@cityssm/pdf-puppeteer)<br />
A simple npm package to convert HTML to PDF for Node.js applications by using Puppeteer.
