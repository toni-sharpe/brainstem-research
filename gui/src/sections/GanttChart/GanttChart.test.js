import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import APIGanttData from 'example-data/APIGantt.example-data'
import { GANTT_SCALE_DEFAULT } from 'util/Constant/BaseConstantList'
import { calcInteractiveGantt } from 'util/UtilGanttBarList/UtilInteractiveGantt'

import GanttChart from './GanttChart'

test('GanttChart', async () => {
  render(
    <GanttChart
      currentFilterList={[]}
      ganttToggleList={[]}
      maxOfAll={390}
      scale={GANTT_SCALE_DEFAULT}
      statDataList={calcInteractiveGantt({
        currentGroupBy: 'mild_symptom_1',
        currentResponse: 'prime_symptom_1',
        data: APIGanttData,
      })}
    />
  )

  expect(screen.getByText('0')).toBeTruthy()
  expect(screen.getByText('100')).toBeTruthy()
  expect(screen.getByText('200')).toBeTruthy()
  expect(screen.getByText('300')).toBeTruthy()
  expect(screen.getByText('400')).toBeTruthy()
  expect(screen.getAllByText('=1').length).toEqual(2)
  expect(screen.getByText('=2')).toBeTruthy()
  expect(screen.getAllByText('=3').length).toEqual(2)
  expect(screen.getByText('=7')).toBeTruthy()
})
