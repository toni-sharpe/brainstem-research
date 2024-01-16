import { applyFactor } from './UtilPrimeSymptomHistogram'


/*
 * applyFactor()
 */
test('applyFactor() - off returns 1', () => {
  expect(applyFactor({ currentFactorOn: false, severeCount: 7, nonSevereCount: 15 })).toEqual(1)
})
test('applyFactor() - 0 severes returns 1', () => {
  expect(applyFactor({ currentFactorOn: true, severeCount: 0, nonSevereCount: 15 })).toEqual(1)
})
test('applyFactor() - 0 non-severes returns 1', () => {
  expect(applyFactor({ currentFactorOn: true, severeCount: 7, nonSevereCount: 0 })).toEqual(1)
})
test('applyFactor() - > 0 for both returns a factor', () => {
  expect(applyFactor({ currentFactorOn: true, severeCount: 7, nonSevereCount: 14 })).toEqual('0.50')
})