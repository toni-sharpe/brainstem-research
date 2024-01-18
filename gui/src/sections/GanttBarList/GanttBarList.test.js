import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import baseGanttBarListProps from './baseGanttBarListProps'

import GanttBarList from './GanttBarList'

test('GanttBarList', async () => {
  render(
    <GanttBarList
      {...baseGanttBarListProps()}
    />
  )


  /*
   * Label responses
   */
  expect(screen.getByText('Recovery responses')).toBeTruthy()
  expect(screen.getByText('Serious responses')).toBeTruthy()
  expect(screen.getByText('Impact without bearing')).toBeTruthy()


  /*
   * N= number tests
   */
  expect(screen.getByText('=61')).toBeTruthy()
  expect(screen.getByText('=45')).toBeTruthy()
  expect(screen.getByText('=4')).toBeTruthy()


  /*
   * Stat output tests
   */
  expect(screen.getAllByText('lo | MDA | hi').length).toEqual(3)
  expect(screen.getAllByText('Mean | Medn').length).toEqual(3)
  expect(screen.getAllByText('Skew').length).toEqual(3)
})
