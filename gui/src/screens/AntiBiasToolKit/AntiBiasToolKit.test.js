import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import APIAntiBiasToolKitData from 'example-data/APIAntiBiasToolKit.example-data'

import AntiBiasToolKit from './AntiBiasToolKit'

test('AntiBiasToolKit - ', async () => {
  render(
    <AntiBiasToolKit
      data={APIAntiBiasToolKitData}
    />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('Anti-bias Tool Kit')).toBeTruthy()
  expect(screen.getByLabelText('Secondary nav for selecting which bias sim. to look at')).toBeTruthy()
  expect(screen.getByText('EN')).toBeTruthy()
  expect(screen.getByText('DE')).toBeTruthy()
})

test('AntiBiasToolKit with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: antiBiasToolKit } = render(
    <AntiBiasToolKit
      data={APIAntiBiasToolKitData}
    />
  )

  expect(await axe(antiBiasToolKit)).toHaveNoViolations()
})
