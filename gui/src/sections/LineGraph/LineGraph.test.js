import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByRole, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import { SingleHistogramData } from 'example-data/Histogram.example-data'

import LineGraph from './LineGraph'


const baseLineGraphProps = {
  ariaLabel: 'Testing the aria label',
  data: [[0, [{ v: 1, l: 'a' }]]],
  heading: 'Heading for LG',
  max: 1,
  svgScale: 100,
  xLabel: 'xLabel',
  yLabel: 'yLabel',
}


test('LineGraph', async () => {
  render(
    <LineGraph
      {...baseLineGraphProps}
    />
  )

  expect(screen.getByText('Heading for LG')).toBeTruthy()
  expect(screen.getByLabelText('Testing the aria label')).toBeTruthy()
})


test('LineGraph with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: histogramBarList } = render(
    <LineGraph
      {...baseLineGraphProps}
    />
  )

  expect(await axe(histogramBarList)).toHaveNoViolations()
})
