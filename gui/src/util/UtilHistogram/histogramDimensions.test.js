import { calcHistogramBarHeight } from './UtilHistogram'

const histogramBarGroupList = [
  ['1', { a: 10, b: 11 }],
  ['2', { a: 11, b:  9 }],
  ['3', { a:  8, b:  7 }],
]


/*
 * calcHistogramBarHeight()
 */
test('calcHistogramBarHeight() - with elems and height', () => {
  expect(calcHistogramBarHeight({ blockSize: 30, elems: [1, 2] })).toEqual(60)
})

test('calcHistogramBarHeight() - with elems and default height', () => {
  expect(calcHistogramBarHeight({ elems: [1, 2, 3] })).toEqual(3)
})

test('calcHistogramBarHeight() - with no elems', () => {
  expect(calcHistogramBarHeight({ blockSize: 30, elems: [] })).toEqual(0)
})

test('calcHistogramBarHeight() - with null elems', () => {
  expect(calcHistogramBarHeight({ elems: null })).toEqual(0)
})
