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
  expect(screen.getByText('The medical research is real, the events are real and each one represents the experience of a real person, many of whom, around 90, have not fared so well and cannot be said to be fully better, if they ever are. For this reason the site is purposefully genericised for the sake of those who aren\'t necessarily in a position to voice concerns, compounded by my hypothesis standing firmly enough from my perspective but not yet examined by someone who knows the real detail.')).toBeTruthy()
})
