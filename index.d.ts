import { type PaperType } from './paperSizes.js';
import type { PaperSpecifications } from './types.js';
export declare function getPaperSize(paperType: PaperType): PaperSpecifications | undefined;
export declare function getLandscapePaperSize(paperType: PaperType): PaperSpecifications | undefined;
export declare function getPaperSizeInInches(paperType: PaperType): PaperSpecifications | undefined;
export declare function getPaperSizeInMillimetres(paperType: PaperType): PaperSpecifications | undefined;
export { paperSpecifications } from './paperSizes.js';
export type { PaperSpecifications } from './types.js';
