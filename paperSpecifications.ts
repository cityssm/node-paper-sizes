import {
  type IsoPaperType,
  isoPaperSpecifications
} from './paperSpecifications/iso.js'
import {
  type NorthAmericanPaperType,
  northAmericanPaperSpecifications
} from './paperSpecifications/northAmerica.js'
import type { PaperSpecifications } from './types.js'

export const paperSpecifications = Object.freeze({
  ...northAmericanPaperSpecifications,
  ...isoPaperSpecifications
} as const satisfies Record<Uppercase<string>, PaperSpecifications>)

export type PaperType = IsoPaperType | NorthAmericanPaperType
