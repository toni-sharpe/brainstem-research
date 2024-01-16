import { map } from 'ramda'

import APIGanttData from 'example-data/APIGantt.example-data'
import {
  InteractiveGanttFullyProcessedExampleData,
  UserChoiceGroupedExampleData,
  UserChoiceGroupingListAfterStatMapping,
} from 'screens/Gantt/panel-list/InteractiveGantt/InteractiveGantt.example-data.js'

import { calcInteractiveGantt, userChoiceGroupedStatMapper } from './UtilInteractiveGantt'


/*
 * calcInteractiveGantt()
 */
test('calcInteractiveGantt() throws error if data provided is not array', () => {
  const errMsg = 'data to calcInteractiveGantt must be an array and current user choices must be strings'
  expect(() => calcInteractiveGantt({ data: undefined })).toThrow(errMsg)
  expect(() => calcInteractiveGantt({ data: 1 })).toThrow(errMsg)
  expect(() => calcInteractiveGantt({ data: {} })).toThrow(errMsg)
  expect(() => calcInteractiveGantt({ data: 'test' })).toThrow(errMsg)
})

test('calcInteractiveGantt() throws error if user groupBy choice provided is not string', () => {
  const errMsg = 'data to calcInteractiveGantt must be an array and current user choices must be strings'
  expect(() => calcInteractiveGantt({ currentGroupBy: undefined })).toThrow(errMsg)
})

test('calcInteractiveGantt() throws error if user response choice provided is not string', () => {
  const errMsg = 'data to calcInteractiveGantt must be an array and current user choices must be strings'
  expect(() => calcInteractiveGantt({ currentResponse: undefined })).toThrow(errMsg)
})

test('calcInteractiveGantt() returns good data if everything is provided', () => {
  expect(calcInteractiveGantt({
    currentGroupBy: 'mild_symptom_2',
    currentResponse: 'prime_symptom_1',
    data: APIGanttData,
  })).toEqual(InteractiveGanttFullyProcessedExampleData)
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
