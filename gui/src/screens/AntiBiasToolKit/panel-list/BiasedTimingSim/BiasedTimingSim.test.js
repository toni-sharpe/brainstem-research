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
  expect(screen.getByText("Simulates prime symptom timing bias towards the hypothesis")).toBeTruthy()
  expect(screen.getByText("Biased")).toBeTruthy()
  expect(screen.getByText("V. Biased")).toBeTruthy()


  /*
   * Simple tests of on screen specifics, not always needed
   */
  expect(screen.getByText("Increase data as added")).toBeTruthy()
  expect(screen.getByText("Outcome column summary")).toBeTruthy()
  expect(screen.getByText("Factor is on")).toBeTruthy()
  expect(screen.getByText("NB: this graph always counts from the first entry made, therefore filtering may return numbers that don't immediately make sense")).toBeTruthy()
  expect(screen.getByText("Prime symptom bar graph")).toBeTruthy()
})
