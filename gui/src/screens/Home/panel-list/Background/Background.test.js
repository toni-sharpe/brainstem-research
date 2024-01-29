import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import Background from './Background'

test('Background - ', async () => {
  render(
    <Background />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('Background')).toBeTruthy()
  expect(screen.getByText('The medical research is real, the events are real and each one represents the experience of a real person, many of whom, around 90, have not fared so well and cannot be said to be fully better, if they ever will be. The site is purposefully genericised for the sake of those folk and because my hypothesis has stood up my own attempts to discredit it but has never been validated by an expert who would be accepted generally as capable of speaking on such matters.')).toBeTruthy()
})

test('Background with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: background } = render(
    <Background />
  )

  expect(await axe(background)).toHaveNoViolations()
})
