/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { paperSpecifications } from './paperSpecifications.js';
const mmToInches = 25.4;
const calculatedPrecision = 3;
/**
 * Determines if a paper type is known.
 * @param possiblePaperType - A possible paper type.
 * @returns True if the string represents a known paper type.
 */
export function isPaperType(possiblePaperType = '') {
    return Object.hasOwn(paperSpecifications, possiblePaperType.toUpperCase());
}
/**
 * Retrieves the portrait paper dimensions.
 * When the paperSizeUnit is undefined, the specified units are returned.
 * - North American paper sizes in "in".
 * - ISO paper sizes in "mm".
 * @param paperType - Paper type.
 * @param paperSizeUnit - Optional parameter to return size values in specific unit ("mm" or "in").
 * @returns The portrait paper specifications.
 */
export function getPaperSize(paperType, paperSizeUnit) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    const specifications = paperSpecifications[(paperType ?? '').toUpperCase()];
    if (specifications === undefined ||
        paperSizeUnit === undefined ||
        specifications.unit === paperSizeUnit) {
        return specifications;
    }
    if (paperSizeUnit === 'in') {
        return {
            height: Number.parseFloat((specifications.height / mmToInches).toFixed(calculatedPrecision)),
            width: Number.parseFloat((specifications.width / mmToInches).toFixed(calculatedPrecision)),
            unit: 'in'
        };
    }
    else if (paperSizeUnit === 'mm') {
        return {
            height: Number.parseFloat((specifications.height * mmToInches).toFixed(calculatedPrecision)),
            width: Number.parseFloat((specifications.width * mmToInches).toFixed(calculatedPrecision)),
            unit: 'mm'
        };
    }
    return undefined;
}
/**
 * Retrieves the landscape paper dimensions.
 * When the paperSizeUnit is undefined, the specified units are returned.
 * - North American paper sizes in "in".
 * - ISO paper sizes in "mm".
 * @param paperType - Paper type.
 * @param paperSizeUnit - Optional parameter to return size values in specific unit ("mm" or "in").
 * @returns The landscape paper specifications.
 */
export function getLandscapePaperSize(paperType, paperSizeUnit) {
    if (!isPaperType(paperType)) {
        return undefined;
    }
    const portraitSize = getPaperSize(paperType, paperSizeUnit);
    if (portraitSize === undefined) {
        return undefined;
    }
    return {
        height: portraitSize.width,
        width: portraitSize.height,
        unit: portraitSize.unit
    };
}
/**
 * Retrieves the portrait paper dimensions in inches.
 * @param paperType - Paper type.
 * @returns The portrait paper specifications in inches.
 */
export function getPaperSizeInInches(paperType) {
    if (!isPaperType(paperType)) {
        return undefined;
    }
    return getPaperSize(paperType, 'in');
}
/**
 * Retrieves the portrait paper dimensions in millimetres.
 * @param paperType - Paper type.
 * @returns The portrait paper specifications in millimetres.
 */
export function getPaperSizeInMillimetres(paperType) {
    if (!isPaperType(paperType)) {
        return undefined;
    }
    return getPaperSize(paperType, 'mm');
}
export { paperSpecifications } from './paperSpecifications.js';
export { aSeriesPaperSpecifications, bSeriesPaperSpecifications, cSeriesPaperSpecifications, isIsoPaperType, isoPaperSpecifications } from './paperSpecifications/iso.js';
export { ansiPaperSpecifications, archPaperSpecifications, commonNorthAmericanPaperSpecifications, isNorthAmericanPaperType, northAmericanPaperSpecifications } from './paperSpecifications/northAmerica.js';
