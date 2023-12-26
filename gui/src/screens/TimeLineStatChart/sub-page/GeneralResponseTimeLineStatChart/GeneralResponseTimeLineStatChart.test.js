import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'

import APITimeLineStatChartData from 'example-data/APITimeLineStatChart.example-data'
import { labelListDefault } from 'prop-types/TimeLineBarListScale.prop-type'

import GeneralResponseTimeLineStatChart from './GeneralResponseTimeLineStatChart'

test('GeneralResponseTimeLineStatChart - ', async () => {
  render(
    <GeneralResponseTimeLineStatChart
      data={APITimeLineStatChartData}
    />
  )

  expect(screen.getByLabelText('Scale for clinical response timings')).toBeTruthy()

  expect(screen.getByText('Mild symptom 1')).toBeTruthy()
  expect(screen.getByText('Prime symptom 1')).toBeTruthy()

  expect(screen.getAllByText('lo | MDA | hi').length).toEqual(6)
  expect(screen.getAllByText('Mean | Medn').length).toEqual(6)
  expect(screen.getAllByText('Skew').length).toEqual(6)
})
