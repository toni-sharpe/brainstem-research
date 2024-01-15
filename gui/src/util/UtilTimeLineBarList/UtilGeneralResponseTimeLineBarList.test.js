import { take } from 'ramda'

import APITimeLineStatChartData from 'example-data/APITimeLineStatChart.example-data'
import GeneralResponseStatListExampleData from 'screens/TimeLineStatChart/panel-list/GeneralResponseTimeLineStatChart/GeneralResponseTimeLineStatChart.example-data.js'

import { calcGeneralResponseTimeLineBarStatList } from './UtilGeneralResponseTimeLineBarList'


/*
 * calcGeneralTimeLineBarStatList()
 */
test('calcGeneralTimeLineBarStatList() throws error if data provided is not an array', () => {
  const errMsg = 'General stat list calc needs an array for data'
  expect(() => calcGeneralResponseTimeLineBarStatList({ data: undefined })).toThrow(errMsg)
})

test('calcGeneralTimeLineBarStatList() correctly processed data when data is provided', () => {
  expect(calcGeneralResponseTimeLineBarStatList({ data: APITimeLineStatChartData })).toEqual(GeneralResponseStatListExampleData)
})
