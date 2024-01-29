import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByRole, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

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

  expect(screen.getByText('0-5 d')).toBeTruthy()
})


test('HistogramBarList with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: histogramBarList } = render(
    <HistogramBarList
      {...baseHistogramBarListProps}
    />
  )

  expect(await axe(histogramBarList)).toHaveNoViolations()
})
