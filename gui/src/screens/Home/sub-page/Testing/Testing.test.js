import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'

import Testing from './Testing'

test('Testing - ', async () => {
  render(
    <Testing />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('Testing')).toBeTruthy()
  expect(screen.getByText('More complex components and any util functions are tested. Util functions are used to keep components more simple and improve testability too.')).toBeTruthy()


  /*
   * Simple tests of on screen specifics, not always needed
   */
})
