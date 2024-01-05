import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByRole, render, screen, waitFor } from '@testing-library/react'

import { SingleHistogramData } from 'example-data/Histogram.example-data'

import Histogram from './Histogram'


const baseHistogramProps = {
  averageLineList: null,
  barCountPerBlock: 1,
  barMargin: 6,
  blockSize: 1,
  histogramBarGroupList: SingleHistogramData,
  graphLabel: 'StoryBook test graph',
}


test('Histogram', async () => {
  render(
    <Histogram
      {...baseHistogramProps}
    />
  )

  expect(screen.getByRole('figure')).toBeTruthy()
  expect(screen.getByText('StoryBook test graph')).toBeTruthy()
  expect(screen.getByText('0..5 days')).toBeTruthy()
})


test('Histogram without data', async () => {
  const props = {
    ...baseHistogramProps,
    histogramBarGroupList: []
  }
  render(
    <Histogram
      {...props}
    />
  )
  expect(screen.getByText('This histogram config has zero results')).toBeTruthy()
})
