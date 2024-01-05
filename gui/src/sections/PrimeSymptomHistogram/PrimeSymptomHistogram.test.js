import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { PRIME_SYMPTOM_COUNT } from 'util/Constant/BaseConstantList'
import APIPrimeSymptomListData from 'example-data/APIPrimeSymptomList.example-data'

import PrimeSymptomHistogram from './PrimeSymptomHistogram'


const basePrimeSymptomHistogramProps = {
  primeSymptomData: APIPrimeSymptomListData,
}


test('PrimeSymptomHistogram - user key interaction', async () => {
  const user = userEvent.setup()

  render(
    <PrimeSymptomHistogram
      {...basePrimeSymptomHistogramProps}
    />
  )


  /*
   * Basic totals
   */
  expect(screen.getByText('Increase data as added')).toBeTruthy()
  expect(screen.getByText('Total:')).toBeTruthy()
  expect(screen.getByText('20')).toBeTruthy()
  expect(screen.getByText('Fatal: 11')).toBeTruthy()
  expect(screen.getByText('Non Fatal: 9')).toBeTruthy()


  /*
   * Factor operation
   */
  expect(screen.getByText('Factor is on')).toBeTruthy()
  const factorButton = screen.getByText('Turn off')

  await user.click(factorButton)

  expect(screen.getByText('Factor is off')).toBeTruthy()
  const newFactorButton = screen.getByText('Turn on')
})
