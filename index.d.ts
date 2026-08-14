import { type PaperType } from './paperSpecifications.js';
import type { PaperSizeUnit, PaperSpecifications } from './types.js';
/**
 * Determines if a paper type is known.
 * @param possiblePaperType - A possible paper type.
 * @returns True if the string represents a known paper type.
 */
export declare function isPaperType(possiblePaperType?: string): possiblePaperType is PaperType;
export declare function getPaperSize(paperType: PaperType, paperSizeUnit?: PaperSizeUnit): PaperSpecifications;
export declare function getLandscapePaperSize(paperType: PaperType, paperSizeUnit?: PaperSizeUnit): PaperSpecifications;
export declare function getPaperSizeInInches(paperType: PaperType): PaperSpecifications;
export declare function getPaperSizeInMillimetres(paperType: PaperType): PaperSpecifications;
export { type PaperType, paperSpecifications } from './paperSpecifications.js';
export { type IsoPaperType, aSeriesPaperSpecifications, bSeriesPaperSpecifications, cSeriesPaperSpecifications, isIsoPaperType, isoPaperSpecifications } from './paperSpecifications/iso.js';
export { type NorthAmericanPaperType, ansiPaperSpecifications, archPaperSpecifications, commonNorthAmericanPaperSpecifications, isNorthAmericanPaperType, northAmericanPaperSpecifications } from './paperSpecifications/northAmerica.js';
export type { PaperSizeUnit, PaperSpecifications } from './types.js';
