import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import GanttScale from './GanttScale'

test('GanttScale', async () => {
  render(
    <GanttScale
      ariaLabel='test graph'
      scale={{ firstStep: 0, lastStep: 5, totalSteps: 5, stepDivision: 5 }}
    />
  )

  expect(screen.getByLabelText('Scale for test graph')).toBeTruthy()
  expect(screen.getByText('0')).toBeTruthy()
  expect(screen.getByText('5')).toBeTruthy()
  expect(screen.getByText('10')).toBeTruthy()
  expect(screen.getByText('15')).toBeTruthy()
  expect(screen.getByText('20')).toBeTruthy()
  expect(screen.getByText('25')).toBeTruthy()
})
