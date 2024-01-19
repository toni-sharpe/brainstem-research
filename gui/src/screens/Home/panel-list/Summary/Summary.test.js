import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'

import Summary from './Summary'

test('Summary - ', async () => {
  render(
    <Summary />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('Page Summary')).toBeTruthy()
  expect(screen.getByText('The scatter diagram serves to show the correlation observed that is central to the hypothesis. The hypothesis states that the two symptoms graphed on page load are strongly correlated for a specific reason that disputes the currently accepted hypothesis. Note that these two chosen parameters that relate to the hypothesis remain marked so if the user decides to examine other scatter graph possibilities by using the menus in the page they can choose to the original settings easily.')).toBeTruthy()
})
