import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import APIAntiBiasToolKitData from 'example-data/APIAntiBiasToolKit.example-data'

import BiasedJudgementSim from './BiasedJudgementSim'

test('BiasedJudgementSim - ', async () => {
  render(
    <BiasedJudgementSim
      antiBiasToolKitData={APIAntiBiasToolKitData.biased_test_cases}
    />
  )


  /*
   * Base screen tests, has it rendered
   */
  const descriptionText = "Repeatedly, and randomly each time, assumes ~50% of my assessments turn out to be incorrect"
})

test('BiasedJudgementSim with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: biasedJudgementSim } = render(
    <BiasedJudgementSim
      antiBiasToolKitData={APIAntiBiasToolKitData.biased_test_cases}
    />
  )

  expect(await axe(biasedJudgementSim)).toHaveNoViolations()
})
