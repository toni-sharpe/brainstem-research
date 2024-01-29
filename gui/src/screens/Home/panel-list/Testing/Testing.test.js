import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

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

test('Testing with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: testing } = render(
    <Testing />
  )

  expect(await axe(testing)).toHaveNoViolations()
})
