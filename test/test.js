import assert from 'node:assert';
import { describe, it } from 'node:test';
import { getLandscapePaperSize, getPaperSize, getPaperSizeInInches, getPaperSizeInMillimetres, isIsoPaperType, isNorthAmericanPaperType, isPaperType, paperSpecifications } from '../index.js';
await describe('@cityssm/paper-sizes', async () => {
    const paperTypes = Object.keys(paperSpecifications);
    for (const paperType of paperTypes) {
        await describe(`Paper type: ${paperType}`, async () => {
            await it('Defined with an upper case key', () => {
                assert.strictEqual(paperType, paperType.toUpperCase());
            });
            await it('Returns portrait paper dimensions', () => {
                const portrait = getPaperSize(paperType);
                console.log(`${paperType}: ${JSON.stringify(portrait)}`);
                assert(portrait);
                assert(portrait.width <= portrait.height);
                if (isIsoPaperType(paperType)) {
                    assert.strictEqual(portrait.unit, 'mm');
                }
                if (isNorthAmericanPaperType(paperType)) {
                    assert.strictEqual(portrait.unit, 'in');
                }
            });
            await it('Returns landscape paper dimensions', () => {
                const landscape = getLandscapePaperSize(paperType.toUpperCase());
                assert(landscape);
                assert(landscape.width >= landscape.height);
                if (isIsoPaperType(paperType)) {
                    assert.strictEqual(landscape.unit, 'mm');
                }
                if (isNorthAmericanPaperType(paperType)) {
                    assert.strictEqual(landscape.unit, 'in');
                }
            });
            await it('Returns paper dimensions in inches', () => {
                const portrait = getPaperSizeInInches(paperType.toLowerCase());
                assert(portrait);
                assert.strictEqual(portrait.unit, 'in');
            });
            await it('Returns paper dimensions in millimetres', () => {
                const portrait = getPaperSizeInMillimetres(paperType);
                assert(portrait);
                assert.strictEqual(portrait.unit, 'mm');
            });
        });
    }
    await describe('Error handling', async () => {
        await it('Returns false for unknown paper types', () => {
            const invalidPaperType = 'invalidPaperType';
            assert.strictEqual(isPaperType(invalidPaperType), false);
            assert.strictEqual(isNorthAmericanPaperType(invalidPaperType), false);
            assert.strictEqual(isIsoPaperType(invalidPaperType), false);
            assert.strictEqual(isPaperType(undefined), false);
        });
        await it('Returns undefined when the size unit is unknown', () => {
            const invalidUnit = 'bananas';
            assert.strictEqual(getPaperSize('Letter', invalidUnit), undefined);
            assert.strictEqual(getLandscapePaperSize('Letter', invalidUnit), undefined);
        });
        await it('Returns undefined when the paper type is unknown', () => {
            const unknownPaperType = 'unknown';
            assert.strictEqual(getPaperSize(unknownPaperType), undefined);
            assert.strictEqual(getLandscapePaperSize(unknownPaperType), undefined);
            assert.strictEqual(getPaperSizeInInches(unknownPaperType), undefined);
            assert.strictEqual(getPaperSizeInMillimetres(unknownPaperType), undefined);
        });
    });
});
