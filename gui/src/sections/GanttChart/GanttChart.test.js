import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe'

import APIGanttData from 'example-data/APIGantt.example-data'
import { GANTT_SCALE_DEFAULT } from 'util/Constant/BaseConstantList'
import { calcInteractiveGantt } from 'util/UtilGanttScreen/UtilInteractiveGantt'

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

  expect(screen.getAllByText('0').length).toEqual(2)
  expect(screen.getAllByText('90').length).toEqual(2)
  expect(screen.getAllByText('180').length).toEqual(2)
  expect(screen.getAllByText('270').length).toEqual(2)
  expect(screen.getAllByText('360').length).toEqual(2)
  expect(screen.getAllByText('=1').length).toEqual(2)
  expect(screen.getByText('=2')).toBeTruthy()
  expect(screen.getAllByText('=3').length).toEqual(2)
  expect(screen.getByText('=7')).toBeTruthy()
})


test('GanttChart with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: ganttChart } = render(
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

  expect(await axe(ganttChart)).toHaveNoViolations()
})
