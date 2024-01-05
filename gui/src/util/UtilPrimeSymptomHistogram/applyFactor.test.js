import '@testing-library/jest-dom'
import { applyFactor } from './UtilPrimeSymptomHistogram'


/*
 * applyFactor()
 */
test('applyFactor() - off returns 1', () => {
  expect(applyFactor({ currentFactorOn: false, fatalCount: 7, nonFatalCount: 15 })).toEqual(1)
})
test('applyFactor() - 0 fatals returns 1', () => {
  expect(applyFactor({ currentFactorOn: true, fatalCount: 0, nonFatalCount: 15 })).toEqual(1)
})
test('applyFactor() - 0 non-fatals returns 1', () => {
  expect(applyFactor({ currentFactorOn: true, fatalCount: 7, nonFatalCount: 0 })).toEqual(1)
})
test('applyFactor() - > 0 for both returns a factor', () => {
  expect(applyFactor({ currentFactorOn: true, fatalCount: 7, nonFatalCount: 14 })).toEqual('0.50')
})