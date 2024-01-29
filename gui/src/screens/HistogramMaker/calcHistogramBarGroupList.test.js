import APIHistogramMakerData from 'example-data/APIHistogramMaker.example-data'

import { calcHistogramBarGroupList } from './HistogramMakerDataFunctions'

test('calcHistogramBarGroupList()', () => {
  const result = calcHistogramBarGroupList({
    currentBarFn: 'count',
    currentGroupBy: 'prime_symptom_1',
    currentPathogenesisStepList: ['prime_symptom_2', 'prime_symptom_3'],
    data: APIHistogramMakerData,
  })
  expect(result).toEqual([
    [  '0-8', {}],
    [ '8-16', {
      prime_symptom_2: 8,
      prime_symptom_3: 5,
    }],
    ['16-24', {
      prime_symptom_2: 11,
      prime_symptom_3: 14,
    }],
    ['24-32', {
      prime_symptom_2: 3,
      prime_symptom_3: 4,
    }],
    ['32-40', {
      prime_symptom_2: 1,
      prime_symptom_3: 1,
    }],
    ['40-48', {}],
    ['48-56', {
      prime_symptom_2: 1,
    }]
  ])
})

test('calcHistogramBarGroupList() with bad fn', () => {
  expect(() => calcHistogramBarGroupList({
    currentBarFn: 'bad',
    currentGroupBy: 'prime_symptom_1',
    currentPathogenesisStepList: ['prime_symptom_2', 'prime_symptom_3'],
    data: APIHistogramMakerData,
  })).toThrow('dataFn must be provided to pathogenesisToGroupMapper and must be a function')
})

test('calcHistogramBarGroupList() with missing group by', () => {
  expect(() => calcHistogramBarGroupList({
    currentBarFn: 'count',
    currentGroupBy: undefined,
    currentPathogenesisStepList: ['prime_symptom_2', 'prime_symptom_3'],
    data: APIHistogramMakerData,
  })).toThrow('calcHistogramBarGroupList must have a string groupBy')
})

test('calcHistogramBarGroupList() with missing pathogenesis step list', () => {
  expect(() => calcHistogramBarGroupList({
    currentBarFn: 'count',
    currentGroupBy: 'prime_symptom_1',
    currentPathogenesisStepList: undefined,
    data: APIHistogramMakerData,
  })).toThrow('calcHistogramBarGroupList must have an array of at least one pathogenesis steps')
})

test('calcHistogramBarGroupList() with empty pathogenesis step list', () => {
  expect(() => calcHistogramBarGroupList({
    currentBarFn: 'count',
    currentGroupBy: 'prime_symptom_1',
    currentPathogenesisStepList: [],
    data: APIHistogramMakerData,
  })).toThrow('calcHistogramBarGroupList must have an array of at least one pathogenesis steps')
})