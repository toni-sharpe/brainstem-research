import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'

import APIAntiBiasToolKitData from 'example-data/APIAntiBiasToolKit.example-data'

import AntiBiasToolKit from './AntiBiasToolKit'

test.skip('AntiBiasToolKit - ', async () => {
  render(
    <AntiBiasToolKit
      data={APIAntiBiasToolKitData}
    />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('Anti-bias Tool Kit')).toBeTruthy()
  expect(screen.getByLabelText('Secondary nav for selecting which error simulation to look at')).toBeTruthy()
  expect(screen.getByText('English')).toBeTruthy()
  expect(screen.getByText('Deutsche')).toBeTruthy()
})
