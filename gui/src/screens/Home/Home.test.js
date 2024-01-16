import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'

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
  expect(screen.getByText('The medical research is real, the events are real and each one represents the experience of a real person, many of whom, around 90, have not fared so well and cannot be said to be fully better, if they ever are. For this reason the site is purposefully genericised for the sake of those who aren\'t necessarily in a position to voice concerns, compounded by my hypothesis standing firmly enough from my perspective but not yet examined by someone who knows the real detail.')).toBeTruthy()
})
