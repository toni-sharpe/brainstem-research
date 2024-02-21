import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import WorldMap from './WorldMap'

test('WorldMap - ', async () => {
  render(
    <WorldMap
      data={[1]}
    />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('WorldMap')).toBeTruthy()
  expect(screen.getByText('EN')).toBeTruthy()
  expect(screen.getByText('DE')).toBeTruthy()


  /*
   * Simple tests of on screen specifics, not always needed
   */
})

test('WorldMap with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: worldMap } = render(
    <WorldMap
      data={[1]}
    />
  )

  expect(await axe(worldMap)).toHaveNoViolations()
})
