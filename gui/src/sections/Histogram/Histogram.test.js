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
  i18nBaseOverride: 'PrimeSymptomHistogram',
}


test('Histogram', async () => {
  render(
    <Histogram
      {...baseHistogramProps}
    />
  )

  expect(screen.getByRole('figure')).toBeTruthy()
  expect(screen.getByText('StoryBook test graph')).toBeTruthy()
  expect(screen.getByText('0-5 d')).toBeTruthy()
  expect(screen.getByLabelText('Time values 5-10 d with bars for fatal, non fatal')).toBeTruthy()
})


test('Histogram with translation set', async () => {
  const props = {
    ...baseHistogramProps,
    i18nBaseOverride: undefined,
    i18nKeyOnly: true,
    translationSet: {
      barList: ['doing OK'],
      groupBy: 'Symptom'
    }
  }
  render(
    <Histogram
      {...props}
    />
  )

  expect(screen.getByRole('figure')).toBeTruthy()
  expect(screen.getByText('StoryBook test graph')).toBeTruthy()
  expect(screen.getByText('15')).toBeTruthy()
  expect(screen.getByLabelText('Symptom values 0 with bars for doing OK')).toBeTruthy()
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
