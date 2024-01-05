import '@testing-library/jest-dom'

import { calcMostMaxOfAllTheThings } from './UtilHistogramMaxThing'

test('calcMostMaxOfAllTheThings() with no arrays', () => {
  const histogramBarGroupList = [
    ['1', { a: 2, b: 3, c: 5 }],
    ['2', { a: 6, b: 3, c: 5 }],
  ]
  expect(calcMostMaxOfAllTheThings({ histogramBarGroupList })).toEqual(7) // remember the top spacer calc
})

test('calcMostMaxOfAllTheThings() with some arrays', () => {
  const histogramBarGroupList = [
    ['1', { a: 2, b: [3, 7], c: 5 }],
    ['2', { a: 6, b: 3,      c: 5 }],
  ]
  expect(calcMostMaxOfAllTheThings({ histogramBarGroupList })).toEqual(8)
})

test('calcMostMaxOfAllTheThings() with all arrays', () => {
  const histogramBarGroupList = [
    ['1', { a: [2, 8], b: [3, 9], c: [5, 5] }],
    ['2', { a: [6, 1], b: [3, 4], c: [5, 6] }],
  ]
  expect(calcMostMaxOfAllTheThings({ histogramBarGroupList })).toEqual(10)
})
