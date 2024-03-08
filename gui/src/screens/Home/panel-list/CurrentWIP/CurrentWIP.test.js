import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import CurrentWIP from './CurrentWIP'

test('CurrentWIP - ', async () => {
  render(
    <CurrentWIP />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('This page lists some of the upcoming features, labelled P0 on the backlog and therefore next in line')).toBeTruthy()
  expect(screen.getByText('Fixed set correlations')).toBeTruthy()


  /*
   * Simple tests of on screen specifics, not always needed
   */
})

test('CurrentWIP with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: techStack } = render(
    <CurrentWIP />
  )

  expect(await axe(techStack)).toHaveNoViolations()
})
