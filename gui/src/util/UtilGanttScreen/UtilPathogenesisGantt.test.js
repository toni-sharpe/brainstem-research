import { take } from 'ramda'

import APIGanttData from 'example-data/APIGantt.example-data'
import PathogenisGanttExampleData from 'screens/Gantt/panel-list/PathogenesisGantt/PathogenesisGantt.example-data.js'

import { calcPathogenesisGantt, showBasedOnSevereFilter } from './UtilPathogenesisGantt'


/*
 * calcGeneralGanttBarStatList()
 */
test('calcGeneralGanttBarStatList() throws error if data provided is not an array', () => {
  const errMsg = 'General stat list calc needs an array for data'
  expect(() => calcPathogenesisGantt({ data: undefined })).toThrow(errMsg)
})

test('calcGeneralGanttBarStatList() correctly processed data when data is provided', () => {
  expect(calcPathogenesisGantt({ data: APIGanttData })).toEqual(PathogenisGanttExampleData)
})


/*
 * showBasedOnSevereFilter()
 */
test('showBasedOnSevereFilter() - both false', () => {
  const currentFilterList = { severe: false, nonSevere: false }
  expect(showBasedOnSevereFilter({ currentFilterList, k: '_' })).toBeTruthy()
})

test('showBasedOnSevereFilter() - neither set', () => {
  const currentFilterList = {  }
  expect(showBasedOnSevereFilter({ currentFilterList, k: '_' })).toBeTruthy()
})

test('showBasedOnSevereFilter() - severe key and severe set', () => {
  const currentFilterList = { severe: true }
  expect(showBasedOnSevereFilter({ currentFilterList, k: 'death_response_1' })).toBeTruthy()
})

test('showBasedOnSevereFilter() - severe key and severe not set', () => {
  const currentFilterList = { severe: false, nonSevere: true }
  expect(showBasedOnSevereFilter({ currentFilterList, k: 'death_response_1' })).toBeFalsy()
})

test('showBasedOnSevereFilter() - non-severe key and non-severe set', () => {
  const currentFilterList = { nonSevere: true }
  expect(showBasedOnSevereFilter({ currentFilterList, k: 'good' })).toBeTruthy()

})

test('showBasedOnSevereFilter() - non-severe key and non-severe not set', () => {
  const currentFilterList = { nonSevere: false, severe: true }
  expect(showBasedOnSevereFilter({ currentFilterList, k: 'good' })).toBeFalsy()
})
