import { paperSpecifications } from './paperSizes.js';
const mmToInches = 25.4;
export function getPaperSize(paperType) {
    return paperSpecifications[paperType.toUpperCase()];
}
export function getLandscapePaperSize(paperType) {
    const portraitSize = getPaperSize(paperType);
    if (portraitSize === undefined) {
        return undefined;
    }
    return {
        width: portraitSize.height,
        height: portraitSize.width,
        unit: portraitSize.unit
    };
}
export function getPaperSizeInInches(paperType) {
    const size = getPaperSize(paperType);
    if (size === undefined || size.unit === 'in') {
        return size;
    }
    return {
        width: Number.parseFloat((size.width / mmToInches).toFixed(3)),
        height: Number.parseFloat((size.height / mmToInches).toFixed(3)),
        unit: 'in'
    };
}
export function getPaperSizeInMillimetres(paperType) {
    const size = getPaperSize(paperType);
    if (size === undefined || size.unit === 'mm') {
        return size;
    }
    return {
        width: Number.parseFloat((size.width * mmToInches).toFixed(3)),
        height: Number.parseFloat((size.height * mmToInches).toFixed(3)),
        unit: 'mm'
    };
}
export { paperSpecifications } from './paperSizes.js';
