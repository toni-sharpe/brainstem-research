import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'

import APIAntiBiasToolKitData from 'example-data/APIAntiBiasToolKit.example-data'

import BiasedTimingSim from './BiasedTimingSim'

test('BiasedTimingSim - ', async () => {
  render(
    <BiasedTimingSim
      antiBiasToolKitData={APIAntiBiasToolKitData.prime_symptom_cases}
    />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText("Assumes poor timing, with interactive percentage to define how far off I am")).toBeTruthy()
  expect(screen.getByText("Biased")).toBeTruthy()
  expect(screen.getByText("V. Biased")).toBeTruthy()
})
