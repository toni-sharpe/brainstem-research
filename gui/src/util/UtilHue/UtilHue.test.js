import { CONTRAST_TOGGLE_MINIMUM } from 'util/Constant/BaseConstantList'
import { calcAccessibleHue } from './UtilHue'

test('calcAccessibleHue() useHueWheel false returns null, not a fn', () => {
  expect(calcAccessibleHue({ useHueWheel: false })).toEqual(null)
})

test('calcAccessibleHue() returns fn which sets hue to 0 for i 0', () => {
  const hueFn = calcAccessibleHue()
  expect(hueFn({ i: 0, total: 10 })).toEqual('hsla(0 80% 50% / 1)')
})

test('calcAccessibleHue() returns fn which sets hue to 360 / (total / i)', () => {
  const hueFn = calcAccessibleHue()
  expect(hueFn({ i: 1, total: 10 })).toEqual(`hsla(36 80% 50% / 1)`)
  expect(hueFn({ i: 9, total: 10 })).toEqual(`hsla(324 80% 50% / 1)`)
})

test('calcAccessibleHue() returns fn which processes an alpha level', () => {
  const hueFn = calcAccessibleHue()
  expect(hueFn({ i: 1, total: 12, aLevel: 0.5 })).toEqual(`hsla(210 80% 50% / 0.5)`)
})

test('calcAccessibleHue() doesnt use contrast toggle at or below threshold', () => {
  const hueFn = calcAccessibleHue()
  expect(hueFn({ i: 9, total: CONTRAST_TOGGLE_MINIMUM })).toEqual(`hsla(294.5 80% 50% / 1)`)
})

test('calcAccessibleHue() does use contrast toggle at threshold + 1', () => {
  const hueFn = calcAccessibleHue()
  expect(hueFn({ i: 9, total: CONTRAST_TOGGLE_MINIMUM + 1 })).toEqual(`hsla(90 80% 50% / 1)`)
})

test('calcAccessibleHue() doesnt use constrast toggle if told not to when above threshold', () => {
  const hueFn = calcAccessibleHue({ useHueContrastToggle: false })
  expect(hueFn({ i: 9, total: 20 })).toEqual(`hsla(162 80% 50% / 1)`)
})