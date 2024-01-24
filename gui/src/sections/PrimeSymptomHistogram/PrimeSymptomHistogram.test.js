import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import APIPrimeSymptomListData from 'example-data/APIPrimeSymptomList.example-data'

import PrimeSymptomHistogram from './PrimeSymptomHistogram'

// test works with a full set of data so local storage stub needs to match this
const TEST_COUNT = 20


const basePrimeSymptomHistogramProps = {
  localStorageFn: () => ({ count: TEST_COUNT, factor: true }),
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
  expect(screen.getByText(TEST_COUNT)).toBeTruthy()
  expect(screen.getByText('Severe: 11')).toBeTruthy()
  expect(screen.getByText('Non Severe: 9')).toBeTruthy()


  /*
   * Factor operation
   */
  expect(screen.getByText('Factor is on')).toBeTruthy()
  const factorButton = screen.getByText('Turn off')

  await user.click(factorButton)

  expect(screen.getByText('Factor is off')).toBeTruthy()
  const newFactorButton = screen.getByText('Turn on')
})
