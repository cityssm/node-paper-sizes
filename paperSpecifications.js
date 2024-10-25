import { isoPaperSpecifications } from './paperSpecifications/iso.js';
import { northAmericanPaperSpecifications } from './paperSpecifications/northAmerica.js';
export const paperSpecifications = Object.freeze({
    ...northAmericanPaperSpecifications,
    ...isoPaperSpecifications
});
