import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import { GANTT_TOGGLE_LIST } from 'util/Constant/BaseConstantList'

import GanttToggleList from './GanttToggleList'


const user = userEvent.setup()

const baseGanttToggleListProps = {
  setGanttTogglelList: () => {},
  timeLineBarDetailToggleList: GANTT_TOGGLE_LIST,
}

test('GanttToggleList', async () => {
  render(
    <GanttToggleList
      {...baseGanttToggleListProps}
    />
  )

  expect(screen.getByText('MDA')).toBeTruthy()
  expect(screen.getByText('Label')).toBeTruthy()
  expect(screen.getByText('Stats')).toBeTruthy()
  expect(screen.getByText('Quantile')).toBeTruthy()
  expect(screen.getByText('Qu\' Numbers')).toBeTruthy()
  expect(screen.getByText('Mean')).toBeTruthy()
  expect(screen.getByText('Median')).toBeTruthy()
  expect(screen.getByText('Range')).toBeTruthy()
  expect(screen.getByText('Fat lines')).toBeTruthy()
})
