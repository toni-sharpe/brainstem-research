import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'

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
  expect(screen.getByText('English')).toBeTruthy()
  expect(screen.getByText('Deutsche')).toBeTruthy()


  /*
   * Simple tests of on screen specifics, not always needed
   */
  expect(screen.getByLabelText('Interactive chart')).toBeTruthy()
  expect(screen.getByLabelText('List of statistics based on scatter output')).toBeTruthy()
  expect(screen.getByText('X Axis (bottom)')).toBeTruthy()
  expect(screen.getByText('Y Axis (side)')).toBeTruthy()
  expect(screen.getByText('Sample correlation:')).toBeTruthy()
  expect(screen.getByText('Sample covariance:')).toBeTruthy()
  expect(screen.getAllByText('Fatal symptom 1').length).toEqual(3)
  expect(screen.getAllByText('Fatal symptom 2').length).toEqual(3)
})
