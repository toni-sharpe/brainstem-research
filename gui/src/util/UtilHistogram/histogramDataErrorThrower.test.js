import { histogramBarGroupListErrorCheck } from './UtilHistogram'

test('histogramBarGroupListErrorCheck() with [] throws error', () => {
  const errorMessage = 'histogramBarGroupList has length 0, there should be something in histogramBarGroupList for testFn'
  const histogramBarGroupList = []
  expect(() => histogramBarGroupListErrorCheck({ callingFn: 'testFn', histogramBarGroupList })).toThrow(errorMessage)
})

test('histogramBarGroupListErrorCheck() with null throws error', () => {
  const errorMessage = 'histogramBarGroupList is not correct in testFn - receiving: Null | null'
  const histogramBarGroupList = null
  expect(() => histogramBarGroupListErrorCheck({ callingFn: 'testFn', histogramBarGroupList })).toThrow(errorMessage)
})