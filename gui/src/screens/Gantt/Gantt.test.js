import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'

import APIGanttData from 'example-data/APIGantt.example-data'
import { labelListDefault } from 'prop-types/GanttScale.prop-type'

import Gantt from './Gantt'

test('Gantt - ', async () => {
  render(
    <Gantt
      data={APIGanttData}
      labelList={labelListDefault}
    />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('Gantt')).toBeTruthy()
  expect(screen.getByLabelText('See response time statistics or interactive where you can choose what to group and see time statistics about')).toBeTruthy()
  expect(screen.getByText('EN')).toBeTruthy()
  expect(screen.getByText('DE')).toBeTruthy()


  /*
   * Simple tests of on screen specifics, not always needed
   */
  expect(screen.getByLabelText('Scale for clinical response timings')).toBeTruthy()
  expect(screen.getByText('Mild symptom 1')).toBeTruthy()
  expect(screen.getByText('Prime symptom 1')).toBeTruthy()
  expect(screen.getAllByText('lo | MDA | hi').length).toEqual(6)
  expect(screen.getAllByText('Mean | Medn').length).toEqual(6)
  expect(screen.getAllByText('Skew').length).toEqual(6)
})
