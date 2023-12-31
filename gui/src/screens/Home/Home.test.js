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
  expect(screen.getByText('Brainstem Research')).toBeTruthy()
  expect(screen.getByText('English')).toBeTruthy()
  expect(screen.getByText('Deutsche')).toBeTruthy()


  /*
   * Simple tests of on screen specifics, not always needed
   */
})
