import '@testing-library/jest-dom'
import { map } from 'ramda'

import APITimeLineStatChartData from 'example-data/APITimeLineStatChart.example-data'
import {
  InteractiveStatChartFullyProcessedExampleData,
  InteractiveStatChartUserChoiceGroupedExampleData,
  UserChoiceGroupedExampleData,
  UserChoiceGroupingListAfterStatMapping,
} from 'screens/TimeLineStatChart/sub-page/InteractiveTimeLineStatChart/InteractiveTimeLineStatChart.example-data.js'

import { calcInteractiveTimeLineBarStatList, userChoiceGroupedStatMapper } from './UtilInteractiveTimeLineBarStatList'


/*
 * calcInteractiveTimeLineBarStatList()
 */
test('calcInteractiveTimeLineBarStatList() throws error if data provided is not array', () => {
  const errMsg = 'data to calcInteractiveTimeLineBarStatList must be an array and current user choices must be strings'
  expect(() => calcInteractiveTimeLineBarStatList({ data: undefined })).toThrow(errMsg)
  expect(() => calcInteractiveTimeLineBarStatList({ data: 1 })).toThrow(errMsg)
  expect(() => calcInteractiveTimeLineBarStatList({ data: {} })).toThrow(errMsg)
  expect(() => calcInteractiveTimeLineBarStatList({ data: 'test' })).toThrow(errMsg)
})

test('calcInteractiveTimeLineBarStatList() throws error if user groupBy choice provided is not string', () => {
  const errMsg = 'data to calcInteractiveTimeLineBarStatList must be an array and current user choices must be strings'
  expect(() => calcInteractiveTimeLineBarStatList({ currentGroupBy: undefined })).toThrow(errMsg)
})

test('calcInteractiveTimeLineBarStatList() throws error if user response choice provided is not string', () => {
  const errMsg = 'data to calcInteractiveTimeLineBarStatList must be an array and current user choices must be strings'
  expect(() => calcInteractiveTimeLineBarStatList({ currentResponse: undefined })).toThrow(errMsg)
})

test('calcInteractiveTimeLineBarStatList() returns good data if everything is provided', () => {
  expect(calcInteractiveTimeLineBarStatList({
    currentGroupBy: 'mild_symptom_2',
    currentResponse: 'prime_symptom_1',
    data: APITimeLineStatChartData,
  })).toEqual(InteractiveStatChartFullyProcessedExampleData)
})


/*
 * userChoiceGroupedStatMapper()
 */
test('userChoiceGroupedStatMapper() throws error if data provided is not array', () => {
  const errMsg = 'userChoiceStatMapper needs a string for currentResponse'
  expect(() => userChoiceGroupedStatMapper({ currentResponse: undefined })).toThrow(errMsg)
  expect(() => userChoiceGroupedStatMapper({ currentResponse: 1 })).toThrow(errMsg)
  expect(() => userChoiceGroupedStatMapper({ currentResponse: {} })).toThrow(errMsg)
  expect(() => userChoiceGroupedStatMapper({ currentResponse: [1] })).toThrow(errMsg)
})

test('userChoiceGroupedStatMapper() returns good data if everything is provided', () => {
  expect(
    UserChoiceGroupedExampleData.map(
      userChoiceGroupedStatMapper({
        currentResponse: 'prime_symptom_1'
      })
    )
  ).toEqual(UserChoiceGroupingListAfterStatMapping)
})
