import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { GanttBarDataToneSet } from 'example-data/GanttBar.example-data'
import { GANTT_SCALE_DEFAULT, GANTT_TOGGLE_LIST, TONE_KEY_LIST } from 'util/Constant/BaseConstantList'

import GanttBar from './GanttBar'


test('GanttBar', async () => {
  render(
    <GanttBar
      {...GanttBarDataToneSet.good}
      ganttToggleList={GANTT_TOGGLE_LIST}
    />
  )

  expect(screen.getByText('Recovery responses')).toBeTruthy()

  expect(screen.getByText('=61')).toBeTruthy()

  expect(screen.getByText('lo | MDA | hi')).toBeTruthy()
  expect(screen.getByText('Mean | Medn')).toBeTruthy()
  expect(screen.getByText('Skew')).toBeTruthy()
})


test('GanttBar with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: ganttBar } = render(
    <GanttBar
      {...GanttBarDataToneSet.good}
      ganttToggleList={GANTT_TOGGLE_LIST}
    />
  )

  expect(await axe(ganttBar)).toHaveNoViolations()
})
