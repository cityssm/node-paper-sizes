import type { PaperSpecifications } from './types.js'

const letter: PaperSpecifications = {
  width: 8.5,
  height: 11,
  unit: 'in'
}

const tabloid: PaperSpecifications = {
  width: 11,
  height: 17,
  unit: 'in'
}

export const paperSpecifications = Object.freeze({
  LEGAL: {
    width: 8.5,
    height: 14,
    unit: 'in'
  },

  LETTER: letter,
  'ANSI A': letter,

  LEDGER: tabloid,
  TABLOID: tabloid,
  'ANSI B': tabloid,

  'ANSI C': { width: 17, height: 22, unit: 'in' },
  'ANSI D': { width: 22, height: 34, unit: 'in' },
  'ANSI E': { width: 34, height: 44, unit: 'in' },

  'ARCH A': { width: 9, height: 12, unit: 'in' },
  'ARCH B': { width: 12, height: 18, unit: 'in' },
  'ARCH C': { width: 18, height: 24, unit: 'in' },
  'ARCH D': { width: 24, height: 36, unit: 'in' },
  'ARCH E': { width: 36, height: 48, unit: 'in' },
  'ARCH E1': { width: 30, height: 42, unit: 'in' },
  'ARCH E2': { width: 26, height: 38, unit: 'in' },
  'ARCH E3': { width: 27, height: 39, unit: 'in' },

  A0: { width: 841, height: 1189, unit: 'mm' },
  A1: { width: 594, height: 841, unit: 'mm' },
  A2: { width: 420, height: 594, unit: 'mm' },
  A3: { width: 297, height: 420, unit: 'mm' },
  A4: { width: 210, height: 297, unit: 'mm' },
  A5: { width: 148, height: 210, unit: 'mm' },
  A6: { width: 105, height: 148, unit: 'mm' },
  A7: { width: 74, height: 105, unit: 'mm' },
  A8: { width: 52, height: 74, unit: 'mm' },
  A9: { width: 37, height: 52, unit: 'mm' },
  A10: { width: 26, height: 37, unit: 'mm' },

  B0: { width: 1000, height: 1414, unit: 'mm' },
  B1: { width: 707, height: 1000, unit: 'mm' },
  B2: { width: 500, height: 707, unit: 'mm' },
  B3: { width: 353, height: 500, unit: 'mm' },
  B4: { width: 250, height: 353, unit: 'mm' },
  B5: { width: 176, height: 250, unit: 'mm' },
  B6: { width: 125, height: 176, unit: 'mm' },
  B7: { width: 88, height: 125, unit: 'mm' },
  B8: { width: 62, height: 88, unit: 'mm' },
  B9: { width: 44, height: 62, unit: 'mm' },
  B10: { width: 31, height: 44, unit: 'mm' },

  C0: { width: 917, height: 1297, unit: 'mm' },
  C1: { width: 648, height: 917, unit: 'mm' },
  C2: { width: 458, height: 648, unit: 'mm' },
  C3: { width: 324, height: 458, unit: 'mm' },
  C4: { width: 229, height: 324, unit: 'mm' },
  C5: { width: 162, height: 229, unit: 'mm' },
  C6: { width: 114, height: 162, unit: 'mm' },
  C7: { width: 81, height: 114, unit: 'mm' },
  C8: { width: 57, height: 81, unit: 'mm' },
  C9: { width: 40, height: 57, unit: 'mm' },
  C10: { width: 28, height: 40, unit: 'mm' }
} satisfies Record<string, PaperSpecifications>)

export type PaperType =
  | keyof typeof paperSpecifications
  | Lowercase<keyof typeof paperSpecifications>
  | Capitalize<keyof typeof paperSpecifications>