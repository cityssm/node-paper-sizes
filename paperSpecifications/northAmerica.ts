import type { PaperSpecifications } from '../types.js'

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

export const commonNorthAmericanPaperSpecifications = Object.freeze({
  LEGAL: {
    width: 8.5,
    height: 14,
    unit: 'in'
  },
  LETTER: letter,
  LEDGER: tabloid,
  TABLOID: tabloid
} satisfies Record<string, PaperSpecifications>)

export const ansiPaperSpecifications = Object.freeze({
  'ANSI A': letter,
  'ANSI B': tabloid,
  'ANSI C': { width: 17, height: 22, unit: 'in' },
  'ANSI D': { width: 22, height: 34, unit: 'in' },
  'ANSI E': { width: 34, height: 44, unit: 'in' }
} satisfies Record<Uppercase<string>, PaperSpecifications>)

export const archPaperSpecifications = Object.freeze({
  'ARCH A': { width: 9, height: 12, unit: 'in' },
  'ARCH B': { width: 12, height: 18, unit: 'in' },
  'ARCH C': { width: 18, height: 24, unit: 'in' },
  'ARCH D': { width: 24, height: 36, unit: 'in' },
  'ARCH E': { width: 36, height: 48, unit: 'in' },
  'ARCH E1': { width: 30, height: 42, unit: 'in' },
  'ARCH E2': { width: 26, height: 38, unit: 'in' },
  'ARCH E3': { width: 27, height: 39, unit: 'in' }
} satisfies Record<Uppercase<string>, PaperSpecifications>)

export const northAmericanPaperSpecifications = Object.freeze({
  ...commonNorthAmericanPaperSpecifications,
  ...ansiPaperSpecifications,
  ...archPaperSpecifications
} satisfies Record<Uppercase<string>, PaperSpecifications>)

export type NorthAmericanPaperType =
  | keyof typeof northAmericanPaperSpecifications
  | Lowercase<keyof typeof northAmericanPaperSpecifications>
  | Capitalize<Lowercase<keyof typeof northAmericanPaperSpecifications>>

/**
 * Determines if a paper type is a North American paper type.
 * @param possiblePaperType A possible paper type.
 * @returns True if the string represents a known ISO paper type.
 */
export function isNorthAmericanPaperType(
  possiblePaperType = ''
): possiblePaperType is NorthAmericanPaperType {
  return Object.hasOwn(
    northAmericanPaperSpecifications,
    possiblePaperType.toUpperCase()
  )
}
