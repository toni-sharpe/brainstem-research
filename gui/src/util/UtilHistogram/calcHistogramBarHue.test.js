import '@testing-library/jest-dom'

import { calcHistogramBarHue } from './UtilHistogram'

test('calcHistogramBarHue() useHueWheel false returns null', () => {
  expect(calcHistogramBarHue({ useHueWheel: false })).toEqual(null)
})

test('calcHistogramBarHue() useHueWheel true returns function, called with i = 0, total = 10 and no aLevel', () => {
  const hueFn = calcHistogramBarHue({ useHueWheel: true })
  expect(hueFn({ i: 0, total: 10 })).toEqual('hsla(0 80% 50% / 1)')
})

test('calcHistogramBarHue() useHueWheel true returns function, called with i = 1, total = 10 and no aLevel', () => {
  const hueFn = calcHistogramBarHue({ useHueWheel: true })
  const i = 1
  const hue = 360 / 10 * i + 180 // 180 is contrast toggle
  expect(hueFn({ i, total: 10 })).toEqual(`hsla(${hue} 80% 50% / 1)`)
})

test('calcHistogramBarHue() useHueWheel true returns function, called with i = 1, total = 10 and no aLevel', () => {
  const hueFn = calcHistogramBarHue({ useHueWheel: true })
  const i = 9
  const hue = 360 / 10 * i + 180 // 180 is contrast toggle
  expect(hueFn({ i, total: 10 })).toEqual(`hsla(${hue} 80% 50% / 1)`)
})

test('calcHistogramBarHue() useHueWheel true, and dont alternate returns function, called with i = 0, total = 10 and no aLevel', () => {
  const hueFn = calcHistogramBarHue({ useHueWheel: true, useHueContrastToggle: false })
  const i = 0
  const hue = 360 / 10 * i
  expect(hueFn({ i, total: 10 })).toEqual(`hsla(${hue} 80% 50% / 1)`)
})

test('calcHistogramBarHue() useHueWheel true, and dont alternate returns function, called with i = 1, total = 10 and no aLevel', () => {
  const hueFn = calcHistogramBarHue({ useHueWheel: true, useHueContrastToggle: false })
  const i = 1
  const hue = 360 / 10 * i
  expect(hueFn({ i, total: 10 })).toEqual(`hsla(${hue} 80% 50% / 1)`)
})

test('calcHistogramBarHue() useHueWheel true, and dont alternate returns function, called with i = 1, total = 10 and no aLevel', () => {
  const hueFn = calcHistogramBarHue({ useHueWheel: true, useHueContrastToggle: false })
  const i = 9
  const hue = 360 / 10 * i
  expect(hueFn({ i, total: 10 })).toEqual(`hsla(${hue} 80% 50% / 1)`)
})
