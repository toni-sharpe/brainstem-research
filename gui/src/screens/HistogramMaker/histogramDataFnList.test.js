import { dataFnList } from './HistogramMakerDataFunctions'

test('dataFnList() count', () => {
  expect(dataFnList.count({ pathogenesisStepData: [1, 2, 3] })).toEqual(3)
})

test('dataFnList() min', () => {
  expect(dataFnList.min({ pathogenesisStepData: [1, 2, 3] })).toEqual(1)
})

test('dataFnList() max', () => {
  expect(dataFnList.max({ pathogenesisStepData: [1, 2, 5] })).toEqual(5)
})

test('dataFnList() range', () => {
  expect(dataFnList.range({ pathogenesisStepData: [1, 2, 9] })).toEqual([1, 9])
})

test('dataFnList() ave', () => {
  expect(dataFnList.ave({ pathogenesisStepData: [1, 2, 3] })).toEqual(2)
})

test('dataFnList() mda', () => {
  expect(dataFnList.mda({ pathogenesisStepData: [1, 2, 3, 5, 7, 11, 13, 17, 19] })).toEqual([2, 7, 12])
})
