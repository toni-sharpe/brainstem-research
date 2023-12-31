import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'

import Motivation from './Motivation'

test('Motivation - ', async () => {
  render(
    <Motivation />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('Motivation')).toBeTruthy()
  expect(screen.getByText('The saving of lives was the core motivation, though that was complicated as the nuances emerged (see below). The possibility of discovery motivated me and the breakthroughs, of which there were several, were both exciting and kept that motivation going.')).toBeTruthy()


  /*
   * Simple tests of on screen specifics, not always needed
   */
})
