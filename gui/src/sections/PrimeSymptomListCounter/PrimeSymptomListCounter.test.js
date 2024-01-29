import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { PRIME_SYMPTOM_BUTTON_SET } from 'util/Constant/BaseConstantList'

import PrimeSymptomListCounter from './PrimeSymptomListCounter'

const user = userEvent.setup()

test('PrimeSymptomListCounter', async () => {
  const setCurrentDisplayedDataPointsStub = jest.fn()

  render(
    <PrimeSymptomListCounter
      currentDisplayedDataPoints={17}
      setCurrentDisplayedDataPoints={setCurrentDisplayedDataPointsStub}
      totalAvailableDataPoints={101}
    />
  )

  expect(screen.getByText('Increase data as added')).toBeTruthy()

  async function doButtons() {
    const buttonLowest = screen.getByText('-12')
    const buttonLower = screen.getByText('-3')
    const buttonLow = screen.getByText('-1')
    const buttonHigh = screen.getByText('+1')
    const buttonHigher = screen.getByText('+3')
    const buttonHighest = screen.getByText('+12')
    await user.click(buttonLowest)
    await user.click(buttonLower)
    await user.click(buttonLow)
    await user.click(buttonHigh)
    await user.click(buttonHigher)
    await user.click(buttonHighest)
  }

  await doButtons()

  expect(setCurrentDisplayedDataPointsStub.mock.calls.length).toEqual(6)

  expect(setCurrentDisplayedDataPointsStub.mock.calls[0]).toEqual([ 5 ])
  expect(setCurrentDisplayedDataPointsStub.mock.calls[1]).toEqual([ 14 ])
  expect(setCurrentDisplayedDataPointsStub.mock.calls[2]).toEqual([ 16 ])
  expect(setCurrentDisplayedDataPointsStub.mock.calls[3]).toEqual([ 18 ])
  expect(setCurrentDisplayedDataPointsStub.mock.calls[4]).toEqual([ 20 ])
  expect(setCurrentDisplayedDataPointsStub.mock.calls[5]).toEqual([ 29 ])
})
