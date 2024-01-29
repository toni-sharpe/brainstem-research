import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import APIGanttData from 'example-data/APIGantt.example-data'
import { labelListDefault } from 'prop-types/GanttScale.prop-type'

import PathogenesisGantt from './PathogenesisGantt'

test('PathogenesisGantt - ', async () => {
  render(
    <PathogenesisGantt
      data={APIGanttData}
    />
  )

  expect(screen.getByLabelText('Scale for clinical response timings')).toBeTruthy()

  expect(screen.getByText('Mild symptom 1')).toBeTruthy()
  expect(screen.getByText('Prime symptom 1')).toBeTruthy()

  expect(screen.getAllByText('lo | MDA | hi').length).toEqual(6)
  expect(screen.getAllByText('Mean | Medn').length).toEqual(6)
  expect(screen.getAllByText('Skew').length).toEqual(6)
})

test('PathogenesisGantt with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: pathogenesisGantt } = render(
    <PathogenesisGantt
      data={APIGanttData}
    />
  )

  expect(await axe(pathogenesisGantt)).toHaveNoViolations()
})
