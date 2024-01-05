import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { PRIME_SYMPTOM_BUTTON_SET } from 'util/Constant/BaseConstantList'

import PrimeSymptomListCounter from './PrimeSymptomListCounter'

test('PrimeSymptomListCounter', async () => {
  render(
    <PrimeSymptomListCounter
      currentDisplayedDataPoints={17}
      setCurrentDisplayedDataPoints={()=>{}}
      totalAvailableDataPoints={37}
    />
  )

  expect(screen.getByText('Increase data as added')).toBeTruthy()

  PRIME_SYMPTOM_BUTTON_SET.map(pointChange => {
    expect(screen.getByText(pointChange > 0 ? `+${pointChange}` : pointChange)).toBeTruthy()
  })
})
