import '@testing-library/jest-dom'
import { calcHistogramBarHeight, calcHistogramWidth } from './UtilHistogram'

const histogramBarGroupList = [
  ['1', { a: 10, b: 11 }],
  ['2', { a: 11, b:  9 }],
  ['3', { a:  8, b:  7 }],
]


/*
 * calcHistogramWidth()
 */
test('calcHistogramWidth() - with default properties', () => {
  expect(calcHistogramWidth({ histogramBarGroupList })).toEqual(19)
  // 160 = 1(Bl) * 3(BlC) + 8(Marg) * 2
})

test('calcHistogramWidth() - with all properties set', () => {
  expect(calcHistogramWidth({
    barCountPerBlock: 1,
    blockSize: 1,
    barMargin: 1,
    histogramBarGroupList,
  })).toEqual(5)
  // 5 = 1(Bl) * 3(BlC) + 1(Marg) * 2
})


/*
 * calcHistogramWidth() errors
 */
const zeroMessage = ({ callingFn }) => `histogramBarGroupList has length 0, there should be something in histogramBarGroupList for ${callingFn}`
const invalidMessage = ({ callingFn }) => `histogramBarGroupList is not correct in ${callingFn} - receiving: String | tt`

test('calcHistogramWidth() - throws error with bad histogramBarGroupList', () => {
  expect(() => { calcHistogramWidth({ histogramBarGroupList: 'tt' }) }).toThrow(invalidMessage({ callingFn: 'calcHistogramWidth' }))
})

test('calcHistogramWidth() - throws error with empty histogramBarGroupList', () => {
  expect(() => { calcHistogramWidth({ histogramBarGroupList: [] }) }).toThrow(zeroMessage({ callingFn: 'calcHistogramWidth' }))
})


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
