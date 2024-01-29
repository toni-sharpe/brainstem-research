import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { GANTT_TOGGLE_LIST } from 'util/Constant/BaseConstantList'

import GanttToggleList from './GanttToggleList'

const user = userEvent.setup()

const setGanttToggleListStub = jest.fn()

const baseGanttToggleListProps = {
  setGanttToggleList: setGanttToggleListStub,
  ganttToggleList: {
    deviation: false,
    label: false,
    statList: false,
    quantile: false,
    quantileNumber: false,
    mean: false,
    median: false,
    range: false,
    fatLines: false,
  },
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
  const quNums = screen.getByText('Qu\' Numbers')
  expect(quNums).toBeTruthy()
  expect(screen.getByText('Mean')).toBeTruthy()
  expect(screen.getByText('Median')).toBeTruthy()
  expect(screen.getByText('Range')).toBeTruthy()
  const fatLines = screen.getByText('Fat lines')
  expect(fatLines).toBeTruthy()

  await user.click(quNums)
  await user.click(fatLines)

  expect(setGanttToggleListStub.mock.calls.length).toEqual(2)

  expect(setGanttToggleListStub).toHaveBeenCalledWith({
    deviation: false,
    fatLines: false,
    label: false,
    mean: false,
    median: false,
    quantile: false,
    quantileNumber: true,
    range: false,
    statList: false,
  })

  expect(setGanttToggleListStub).toHaveBeenCalledWith({
    deviation: false,
    fatLines: true,
    label: false,
    mean: false,
    median: false,
    quantile: false,
    quantileNumber: false,
    range: false,
    statList: false,
  })
})


test('GanttToggleList with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: ganttToggleList } = render(
    <GanttToggleList
      {...baseGanttToggleListProps}
    />
  )

  expect(await axe(ganttToggleList)).toHaveNoViolations()
})
