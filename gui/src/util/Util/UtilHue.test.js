import { calcHue } from './UtilHue'

test('calcHue() with 0 and 1', () => {
  expect(calcHue({ i: 0, total: 1 })).toEqual(0)
})

test('calcHue() with total of 0 will throw an error', () => {
  expect(() => calcHue({ i: 0, total: 0 })).toThrow('calcHue must have a positive integer in the \"total\" property')
})

test('calcHue() with i and total matching', () => {
  expect(calcHue({ i: 10, total: 10 })).toEqual(360)
})

test('calcHue() with i one less than total', () => {
  expect(calcHue({ i: 4, total: 5 })).toEqual(288)
})