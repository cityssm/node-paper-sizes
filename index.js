import { paperSpecifications } from './paperSpecifications.js';
const mmToInches = 25.4;
export function isPaperType(possiblePaperType) {
    return Object.hasOwn(paperSpecifications, (possiblePaperType ?? '').toUpperCase());
}
export function getPaperSize(paperType, paperSizeUnit) {
    const specifications = paperSpecifications[(paperType ?? '').toUpperCase()];
    if (specifications === undefined ||
        paperSizeUnit === undefined ||
        specifications.unit === paperSizeUnit) {
        return specifications;
    }
    if (paperSizeUnit === 'in') {
        return {
            width: Number.parseFloat((specifications.width / mmToInches).toFixed(3)),
            height: Number.parseFloat((specifications.height / mmToInches).toFixed(3)),
            unit: 'in'
        };
    }
    else if (paperSizeUnit === 'mm') {
        return {
            width: Number.parseFloat((specifications.width * mmToInches).toFixed(3)),
            height: Number.parseFloat((specifications.height * mmToInches).toFixed(3)),
            unit: 'mm'
        };
    }
}
export function getLandscapePaperSize(paperType, paperSizeUnit) {
    if (!isPaperType(paperType)) {
        return undefined;
    }
    const portraitSize = getPaperSize(paperType, paperSizeUnit);
    return {
        width: portraitSize.height,
        height: portraitSize.width,
        unit: portraitSize.unit
    };
}
export function getPaperSizeInInches(paperType) {
    if (!isPaperType(paperType)) {
        return undefined;
    }
    return getPaperSize(paperType, 'in');
}
export function getPaperSizeInMillimetres(paperType) {
    if (!isPaperType(paperType)) {
        return undefined;
    }
    return getPaperSize(paperType, 'mm');
}
export { paperSpecifications } from './paperSpecifications.js';
export { commonNorthAmericanPaperSpecifications, ansiPaperSpecifications, archPaperSpecifications, northAmericanPaperSpecifications, isNorthAmericanPaperType } from './paperSpecifications/northAmerica.js';
export { aSeriesPaperSpecifications, bSeriesPaperSpecifications, cSeriesPaperSpecifications, isoPaperSpecifications, isIsoPaperType } from './paperSpecifications/iso.js';
