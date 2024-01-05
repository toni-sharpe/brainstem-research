import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'

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
  expect(screen.getByText('English')).toBeTruthy()
  expect(screen.getByText('Deutsche')).toBeTruthy()


  /*
   * Simple tests of on screen specifics, not always needed
   */
  expect(screen.getByText('Stats per grouping')).toBeTruthy()
  expect(screen.getByText('Groupings (bars)')).toBeTruthy()
  expect(screen.getByText('Durations')).toBeTruthy()
  expect(screen.getByText('Single measures')).toBeTruthy()
})
