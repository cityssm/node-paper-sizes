import { type PaperType, paperSpecifications } from './paperSpecifications.js'
import type { PaperSizeUnit, PaperSpecifications } from './types.js'

const mmToInches = 25.4

/**
 * Determines if a paper type is known.
 * @param possiblePaperType A possible paper type.
 * @returns True if the string represents a known paper type.
 */
export function isPaperType(
  possiblePaperType = ''
): possiblePaperType is PaperType {
  return Object.hasOwn(paperSpecifications, possiblePaperType.toUpperCase())
}

export function getPaperSize(
  paperType: PaperType,
  paperSizeUnit?: PaperSizeUnit
): PaperSpecifications

export function getPaperSize(
  paperType: Omit<string, PaperType>,
  paperSizeUnit?: string
): undefined

export function getPaperSize(
  paperType: PaperType,
  paperSizeUnit?: Omit<string, PaperSizeUnit>
): undefined

/**
 * Retrieves the portrait paper dimensions.
 * When the paperSizeUnit is undefined, the specified units are returned.
 * - North American paper sizes in "in".
 * - ISO paper sizes in "mm".
 * @param paperType Paper type.
 * @param [paperSizeUnit] Optional parameter to return size values in specific unit ("mm" or "in").
 * @returns The portrait paper specifications.
 */
export function getPaperSize(
  paperType: string,
  paperSizeUnit?: PaperSizeUnit
): PaperSpecifications | undefined {
  const specifications = paperSpecifications[
    (paperType ?? '').toUpperCase()
  ] as PaperSpecifications | undefined

  if (
    specifications === undefined ||
    paperSizeUnit === undefined ||
    specifications.unit === paperSizeUnit
  ) {
    return specifications
  }

  if (paperSizeUnit === 'in') {
    return {
      width: Number.parseFloat((specifications.width / mmToInches).toFixed(3)),
      height: Number.parseFloat(
        (specifications.height / mmToInches).toFixed(3)
      ),
      unit: 'in'
    }
  } else if (paperSizeUnit === 'mm') {
    return {
      width: Number.parseFloat((specifications.width * mmToInches).toFixed(3)),
      height: Number.parseFloat(
        (specifications.height * mmToInches).toFixed(3)
      ),
      unit: 'mm'
    }
  }

  return undefined
}

export function getLandscapePaperSize(
  paperType: PaperType,
  paperSizeUnit?: PaperSizeUnit
): PaperSpecifications

export function getLandscapePaperSize(
  paperType: Omit<string, PaperType>,
  paperSizeUnit?: string
): undefined

export function getLandscapePaperSize(
  paperType: PaperType,
  paperSizeUnit?: Omit<string, PaperSizeUnit>
): undefined

/**
 * Retrieves the landscape paper dimensions.
 * When the paperSizeUnit is undefined, the specified units are returned.
 * - North American paper sizes in "in".
 * - ISO paper sizes in "mm".
 * @param paperType Paper type.
 * @param [paperSizeUnit] Optional parameter to return size values in specific unit ("mm" or "in").
 * @returns The landscape paper specifications.
 */
export function getLandscapePaperSize(
  paperType: string,
  paperSizeUnit?: PaperSizeUnit
): PaperSpecifications | undefined {
  if (!isPaperType(paperType)) {
    return undefined
  }

  const portraitSize = getPaperSize(paperType as PaperType, paperSizeUnit)

  if (portraitSize === undefined) {
    return undefined
  }

  return {
    width: portraitSize.height,
    height: portraitSize.width,
    unit: portraitSize.unit
  }
}

export function getPaperSizeInInches(paperType: PaperType): PaperSpecifications

export function getPaperSizeInInches(
  paperType: Omit<string, PaperType>
): undefined

/**
 * Retrieves the portarit paper dimensions in inches.
 * @param paperType Paper type.
 * @returns The portrait paper specifications in inches.
 */
export function getPaperSizeInInches(
  paperType: string
): PaperSpecifications | undefined {
  if (!isPaperType(paperType)) {
    return undefined
  }

  return getPaperSize(paperType, 'in')
}

export function getPaperSizeInMillimetres(
  paperType: PaperType
): PaperSpecifications

export function getPaperSizeInMillimetres(
  paperType: Omit<string, PaperType>
): undefined

/**
 * Retrieves the portrait paper dimensions in millimetres.
 * @param paperType Paper type.
 * @returns The portrait paper specifications in millimetres.
 */
export function getPaperSizeInMillimetres(
  paperType: string
): PaperSpecifications | undefined {
  if (!isPaperType(paperType)) {
    return undefined
  }

  return getPaperSize(paperType, 'mm')
}

export { type PaperType, paperSpecifications } from './paperSpecifications.js'

export {
  type NorthAmericanPaperType,
  commonNorthAmericanPaperSpecifications,
  ansiPaperSpecifications,
  archPaperSpecifications,
  northAmericanPaperSpecifications,
  isNorthAmericanPaperType
} from './paperSpecifications/northAmerica.js'

export {
  type IsoPaperType,
  aSeriesPaperSpecifications,
  bSeriesPaperSpecifications,
  cSeriesPaperSpecifications,
  isoPaperSpecifications,
  isIsoPaperType
} from './paperSpecifications/iso.js'

export type { PaperSpecifications, PaperSizeUnit } from './types.js'
