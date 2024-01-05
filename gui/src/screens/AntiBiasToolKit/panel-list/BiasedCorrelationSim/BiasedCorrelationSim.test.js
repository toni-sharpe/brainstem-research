import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'

import APIScatterData from 'example-data/APIScatter.example-data'

import BiasedCorrelationSim from './BiasedCorrelationSim'

test('BiasedCorrelationSim - ', async () => {
  render(
    <BiasedCorrelationSim
      antiBiasToolKitData={APIScatterData}
    />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText("Alters the correlated values randomly up or down limited to button value")).toBeTruthy()
  expect(screen.getByText('Random')).toBeTruthy()
  expect(screen.getByLabelText('Biased correlation sim chart')).toBeTruthy()
})
