import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'

import Background from './Background'

test('Background - ', async () => {
  render(
    <Background />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('Background')).toBeTruthy()
  expect(screen.getByText('The medical research is real, the events are real and each one represents the experience of a real person, many of whom, around 90, are now dead as a result. For this reason the site is purposefully genericised for the sake of the dignity of both the dead and living and because as of yet, my hypothesis has not been verified or even inspected by anyone who has the right credentials.')).toBeTruthy()
})
