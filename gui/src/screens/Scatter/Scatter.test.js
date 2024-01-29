import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import APIScatterData from 'example-data/APIScatter.example-data'

import Scatter from './Scatter'

test('Scatter - ', async () => {
  render(
    <Scatter
      data={APIScatterData}
    />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('Scatter Plot')).toBeTruthy()
  expect(screen.getByText('EN')).toBeTruthy()
  expect(screen.getByText('DE')).toBeTruthy()


  /*
   * Simple tests of on screen specifics, not always needed
   */
  expect(screen.getByLabelText('Interactive chart')).toBeTruthy()
  // expect(screen.getByLabelText('List of statistics based on scatter output')).toBeTruthy()
  expect(screen.getByText('X Axis')).toBeTruthy()
  expect(screen.getByText('Y Axis')).toBeTruthy()
  // expect(screen.getByText('Sample correlation:')).toBeTruthy()
  // expect(screen.getByText('Sample covariance:')).toBeTruthy()
  expect(screen.getAllByText('Sev symp 1').length).toEqual(2)
  expect(screen.getAllByText('Sev symp 2').length).toEqual(2)
})

test('Scatter with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: scatter } = render(
    <Scatter
      data={APIScatterData}
    />
  )

  expect(await axe(scatter)).toHaveNoViolations()
})
