import '@testing-library/jest-dom'
import { calcQuantileDetail, hasSufficientData } from './UtilQuantile'


/*
 * calcQuantileDetail()
 */
test('calcQuantileDetail() count is 6 then long', () => {
  expect(calcQuantileDetail({ count: 6 }).length).toEqual(9)
})
test('calcQuantileDetail() count is 5 then short', () => {
  expect(calcQuantileDetail({ count: 5 }).length).toEqual(3)
})


/*
 * hasSufficientData()
 */
test('hasSufficientData() false so doesnt build without quantile', () => {
  expect(hasSufficientData({ quantile: false })).toEqual(false)
})
test('hasSufficientData() false so doesnt build without quantile length over 0', () => {
  expect(hasSufficientData({ quantile: [] })).toEqual(false)
})
test('hasSufficientData() false so doesnt build without count over 2', () => {
  expect(hasSufficientData({ count: 2, quantile: [1] })).toEqual(false)
})
test('hasSufficientData() true if its good', () => {
  expect(hasSufficientData({ count: 3, quantile: [1] })).toEqual(true)
})
