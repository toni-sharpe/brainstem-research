import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import GanttScale from './GanttScale'

test('GanttScale', async () => {
  render(
    <GanttScale
      ariaLabel='test graph'
      scale={{ totalSteps: 5, stepDivision: 5 }}
    />
  )

  expect(screen.getByLabelText('Scale for test graph')).toBeTruthy()
  expect(screen.getByText('1')).toBeTruthy()
  expect(screen.getByText('25')).toBeTruthy()
  expect(screen.getAllByText('5').length).toEqual(7)
})
