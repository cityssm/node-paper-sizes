import type { PaperSpecifications } from '../types.js'

const letter: PaperSpecifications = {
  height: 11,
  width: 8.5,

  unit: 'in'
}

const tabloid: PaperSpecifications = {
  height: 17,
  width: 11,

  unit: 'in'
}

export const commonNorthAmericanPaperSpecifications = Object.freeze({
  LEDGER: tabloid,
  LEGAL: {
    height: 14,
    width: 8.5,

    unit: 'in'
  },
  LETTER: letter,
  TABLOID: tabloid
} satisfies Record<string, PaperSpecifications>)

export const ansiPaperSpecifications = Object.freeze({
  'ANSI A': letter,
  'ANSI B': tabloid,
  'ANSI C': { height: 22, unit: 'in', width: 17 },
  'ANSI D': { height: 34, unit: 'in', width: 22 },
  'ANSI E': { height: 44, unit: 'in', width: 34 }
} satisfies Record<Uppercase<string>, PaperSpecifications>)

export const archPaperSpecifications = Object.freeze({
  'ARCH A': { height: 12, unit: 'in', width: 9 },
  'ARCH B': { height: 18, unit: 'in', width: 12 },
  'ARCH C': { height: 24, unit: 'in', width: 18 },
  'ARCH D': { height: 36, unit: 'in', width: 24 },
  'ARCH E': { height: 48, unit: 'in', width: 36 },
  'ARCH E1': { height: 42, unit: 'in', width: 30 },
  'ARCH E2': { height: 38, unit: 'in', width: 26 },
  'ARCH E3': { height: 39, unit: 'in', width: 27 }
} satisfies Record<Uppercase<string>, PaperSpecifications>)

export const northAmericanPaperSpecifications = Object.freeze({
  ...commonNorthAmericanPaperSpecifications,
  ...ansiPaperSpecifications,
  ...archPaperSpecifications
} satisfies Record<Uppercase<string>, PaperSpecifications>)

export type NorthAmericanPaperType =
  | Capitalize<Lowercase<keyof typeof northAmericanPaperSpecifications>>
  | keyof typeof northAmericanPaperSpecifications
  | Lowercase<keyof typeof northAmericanPaperSpecifications>

/**
 * Determines if a paper type is a North American paper type.
 * @param possiblePaperType - A possible paper type.
 * @returns True if the string represents a known North American paper type.
 */
export function isNorthAmericanPaperType(
  possiblePaperType = ''
): possiblePaperType is NorthAmericanPaperType {
  return Object.hasOwn(
    northAmericanPaperSpecifications,
    possiblePaperType.toUpperCase()
  )
}
