import { take } from 'ramda'

import APIGanttData from 'example-data/APIGantt.example-data'
import PathogenisGanttExampleData from 'screens/Gantt/panel-list/PathogenesisGantt/PathogenesisGantt.example-data.js'

import { calcPathogenesisGantt } from './UtilPathogenesisGantt'


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
