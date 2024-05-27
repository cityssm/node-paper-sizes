import { type PaperType, paperSpecifications } from './paperSizes.js'
import type { PaperSpecifications } from './types.js'

const mmToInches = 25.4

/**
 * Retrieves the exact portrait paper dimensions in the unit they were specified in.
 * - North American paper sizes in "in".
 * - European paper sizes in "mm".
 * @param paperType Paper type.
 * @returns The paper specifications.
 */
export function getPaperSize(
  paperType: PaperType
): PaperSpecifications | undefined {
  return paperSpecifications[paperType.toUpperCase()]
}

/**
 * Retrieves the exact landscape paper dimensions in the unit they were specified in.
 * - North American paper sizes in "in".
 * - European paper sizes in "mm".
 * @param paperType Paper type.
 * @returns The landscape paper specifications.
 */
export function getLandscapePaperSize(
  paperType: PaperType
): PaperSpecifications | undefined {
  const portraitSize = getPaperSize(paperType)

  if (portraitSize === undefined) {
    return undefined
  }

  return {
    width: portraitSize.height,
    height: portraitSize.width,
    unit: portraitSize.unit
  }
}

/**
 * Retrieves the portarit paper dimensions in inches.
 * @param paperType Paper type.
 * @returns The portrait paper specifications in inches.
 */
export function getPaperSizeInInches(
  paperType: PaperType
): PaperSpecifications | undefined {
  const size = getPaperSize(paperType)

  if (size === undefined || size.unit === 'in') {
    return size
  }

  return {
    width: Number.parseFloat((size.width / mmToInches).toFixed(3)),
    height: Number.parseFloat((size.height / mmToInches).toFixed(3)),
    unit: 'in'
  }
}

/**
 * Retrieves the portarit paper dimensions in millimetres.
 * @param paperType Paper type.
 * @returns The portrait paper specifications in millimetres.
 */
export function getPaperSizeInMillimetres(
  paperType: PaperType
): PaperSpecifications | undefined {
  const size = getPaperSize(paperType)

  if (size === undefined || size.unit === 'mm') {
    return size
  }

  return {
    width: Number.parseFloat((size.width * mmToInches).toFixed(3)),
    height: Number.parseFloat((size.height * mmToInches).toFixed(3)),
    unit: 'mm'
  }
}

export { type PaperType, paperSpecifications } from './paperSizes.js'
export type { PaperSpecifications } from './types.js'
