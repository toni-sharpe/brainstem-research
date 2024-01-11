import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByRole, render, screen, waitFor } from '@testing-library/react'

import { SingleHistogramData } from 'example-data/Histogram.example-data'

import HistogramBarList from './HistogramBarList'


const baseHistogramBarListProps = {
  averageLineList: null,
  barCountPerBlock: 1,
  barMargin: 6,
  blockSize: 1,
  histogramBarGroupList: SingleHistogramData,
  histogramHeight: 70,
  graphLabel: 'StoryBook test graph bar list',
  i18nBaseOverride: 'PrimeSymptomHistogram'
}


test('HistogramBarList', async () => {
  render(
    <HistogramBarList
      {...baseHistogramBarListProps}
    />
  )

  expect(screen.getByText('0..5 days')).toBeTruthy()
})
