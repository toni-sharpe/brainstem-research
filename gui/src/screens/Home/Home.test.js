import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import Home from './Home'

test('Home - ', async () => {
  render(
    <Home />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('Research')).toBeTruthy()
  expect(screen.getByText('EN')).toBeTruthy()
  expect(screen.getByText('DE')).toBeTruthy()


  /*
   * Simple tests of on screen specifics, not always needed
   */
  expect(screen.getByText('The medical research is real, the events are real and each one represents the experience of a real person, many of whom, around 90, have not fared so well and cannot be said to be fully better, if they ever will be. The site is purposefully genericised for the sake of those folk and because my hypothesis has stood up my own attempts to discredit it but has never been validated by an expert who would be accepted generally as capable of speaking on such matters.')).toBeTruthy()
})

test('Home with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: home } = render(
    <Home />
  )

  expect(await axe(home)).toHaveNoViolations()
})
