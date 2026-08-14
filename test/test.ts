/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-type-assertion */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */

import assert from 'node:assert'
import { describe, it } from 'node:test'

import {
  type PaperType,
  getLandscapePaperSize,
  getPaperSize,
  getPaperSizeInInches,
  getPaperSizeInMillimetres,
  isIsoPaperType,
  isNorthAmericanPaperType,
  isPaperType,
  paperSpecifications
} from '../index.js'

await describe('@cityssm/paper-sizes', async () => {
  const paperTypes = Object.keys(paperSpecifications) as PaperType[]

  for (const paperType of paperTypes) {
    // eslint-disable-next-line no-await-in-loop
    await describe(`Paper type: ${paperType}`, async () => {
      await it('Defined with an upper case key', () => {
        assert.strictEqual(paperType, paperType.toUpperCase())
      })

      await it('Returns portrait paper dimensions', () => {
        const portrait = getPaperSize(paperType)
        console.log(`${paperType}: ${JSON.stringify(portrait)}`)

        assert.ok(portrait !== undefined)
        assert.ok(portrait.width <= portrait.height)

        if (isIsoPaperType(paperType)) {
          assert.strictEqual(portrait.unit, 'mm')
        }

        if (isNorthAmericanPaperType(paperType)) {
          assert.strictEqual(portrait.unit, 'in')
        }
      })

      await it('Returns landscape paper dimensions', () => {
        const landscape = getLandscapePaperSize(
          paperType.toUpperCase() as PaperType
        )

        assert.ok(landscape !== undefined)
        assert.ok(landscape.width >= landscape.height)

        if (isIsoPaperType(paperType)) {
          assert.strictEqual(landscape.unit, 'mm')
        }

        if (isNorthAmericanPaperType(paperType)) {
          assert.strictEqual(landscape.unit, 'in')
        }
      })

      await it('Returns paper dimensions in inches', () => {
        const portrait = getPaperSizeInInches(
          paperType.toLowerCase() as PaperType
        )
        assert.ok(portrait !== undefined)
        assert.strictEqual(portrait.unit, 'in')
      })

      await it('Returns paper dimensions in millimetres', () => {
        const portrait = getPaperSizeInMillimetres(paperType)
        assert.ok(portrait !== undefined)
        assert.strictEqual(portrait.unit, 'mm')
      })
    })
  }

  await describe('Error handling', async () => {
    await it('Returns false for unknown paper types', () => {
      const invalidPaperType = 'invalidPaperType'

      assert.strictEqual(isPaperType(invalidPaperType), false)
      assert.strictEqual(isNorthAmericanPaperType(invalidPaperType), false)
      assert.strictEqual(isIsoPaperType(invalidPaperType), false)

      // eslint-disable-next-line unicorn/no-useless-undefined, sonarjs/no-undefined-argument
      assert.strictEqual(isPaperType(undefined), false)
    })

    await it('Returns undefined when the size unit is unknown', () => {
      const invalidUnit = 'bananas'

      assert.strictEqual(
        getPaperSize('Letter', invalidUnit as never),
        undefined
      )
      assert.strictEqual(
        getLandscapePaperSize('Letter', invalidUnit as never),
        undefined
      )
    })

    await it('Returns undefined when the paper type is unknown', () => {
      const unknownPaperType = 'unknown'

      assert.strictEqual(getPaperSize(unknownPaperType as never), undefined)
      assert.strictEqual(
        getLandscapePaperSize(unknownPaperType as never),
        undefined
      )

      assert.strictEqual(
        getPaperSizeInInches(unknownPaperType as never),
        undefined
      )
      assert.strictEqual(
        getPaperSizeInMillimetres(unknownPaperType as never),
        undefined
      )
    })
  })
})
