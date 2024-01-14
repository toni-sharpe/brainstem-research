import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'

import APICorrelationHeatmapData from 'example-data/APICorrelationHeatmap.example-data'

import CorrelationHeatmap from './CorrelationHeatmap'

test('CorrelationHeatmap - ', async () => {
  render(
    <CorrelationHeatmap
      data={APICorrelationHeatmapData}
    />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('Corr. Heatmap')).toBeTruthy()
  expect(screen.getByText('EN')).toBeTruthy()
  expect(screen.getByText('DE')).toBeTruthy()
})
