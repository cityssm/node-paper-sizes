import assert from 'node:assert';
import { describe, it } from 'node:test';
import { getLandscapePaperSize, getPaperSize, getPaperSizeInInches, getPaperSizeInMillimetres, isIsoPaperType, isNorthAmericanPaperType, paperSpecifications } from '../index.js';
await describe('@cityssm/paper-sizes', async () => {
    const paperTypes = Object.keys(paperSpecifications);
    for (const paperType of paperTypes) {
        await describe(`Paper type: ${paperType}`, async () => {
            await it('Defined with an upper case key', async () => {
                assert.strictEqual(paperType, paperType.toUpperCase());
            });
            await it('Returns portrait paper dimensions', async () => {
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
            await it('Returns landscape paper dimensions', async () => {
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
            await it('Returns paper dimensions in inches', async () => {
                const portrait = getPaperSizeInInches(paperType.toLowerCase());
                assert(portrait);
                assert.strictEqual(portrait.unit, 'in');
            });
            await it('Returns paper dimensions in millimetres', async () => {
                const portrait = getPaperSizeInMillimetres(paperType);
                assert(portrait);
                assert.strictEqual(portrait.unit, 'mm');
            });
        });
    }
    await describe('Error handling', async () => {
        await it('Returns undefined when the size unit is unknown', async () => {
            assert.strictEqual(getPaperSize('Letter', 'bananas'), undefined);
        });
        await it('Returns undefined when the paper type is unknown', async () => {
            const unknownPaperType = 'unknown';
            assert.strictEqual(getPaperSize(unknownPaperType), undefined);
            assert.strictEqual(getLandscapePaperSize(unknownPaperType), undefined);
            assert.strictEqual(getPaperSizeInInches(unknownPaperType), undefined);
            assert.strictEqual(getPaperSizeInMillimetres(unknownPaperType), undefined);
        });
    });
});
