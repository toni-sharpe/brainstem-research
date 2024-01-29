import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

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

test('BiasedCorrelationSim with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: biasedCorrelationSim } = render(
    <BiasedCorrelationSim
      antiBiasToolKitData={APIScatterData}
    />
  )

  expect(await axe(biasedCorrelationSim)).toHaveNoViolations()
})
