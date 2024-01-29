import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import APIHistogramMakerData from 'example-data/APIHistogramMaker.example-data'

import HistogramMaker from './HistogramMaker'

test('HistogramMaker - ', async () => {
  render(
    <HistogramMaker
      data={APIHistogramMakerData}
    />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('Histogram')).toBeTruthy()
  expect(screen.getByText('EN')).toBeTruthy()
  expect(screen.getByText('DE')).toBeTruthy()


  /*
   * Simple tests of on screen specifics, not always needed
   */
  expect(screen.getByText('Bars')).toBeTruthy()
  expect(screen.getByText('Durations')).toBeTruthy()
  expect(screen.getByText('Single measures')).toBeTruthy()
})

test('HistogramMaker with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: histogramMaker } = render(
    <HistogramMaker
      data={APIHistogramMakerData}
    />
  )

  expect(await axe(histogramMaker)).toHaveNoViolations()
})
