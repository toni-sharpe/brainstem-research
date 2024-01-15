import { primeSymptomTimingError } from './UtilPrimeSymptomHistogram'


/*
 * primeSymptomTimingError()
 */
test('primeSymptomTimingError() - neither times set', () => {
  const args = { returned: 'unchanged' }
  const expected = args
  const mapper = primeSymptomTimingError({ badTimingError: 0, timingError: 0 })
  expect(mapper(args)).toEqual(expected)
})

test('primeSymptomTimingError() - FIR example', () => {
  const args = {
    first_prime_symptom: 19,
    consultant_doctor: 'FIR',
    returned: 'unchanged',
  }
  const expected = args
  const mapper = primeSymptomTimingError({ badTimingError: 10, timingError: 0 })
  expect(mapper(args)).toEqual(expected)
})

test('primeSymptomTimingError() - timing error & no bad error - effects non-fatal', () => {
  const args = {
    first_prime_symptom: 19,
    outcome: 'NFT',
    theRest: 'returned unchanged',
  }
  const expected = {
    ...args,
    first_prime_symptom: 29,
  }
  const mapper = primeSymptomTimingError({ badTimingError: 0, timingError: 10 })
  expect(mapper(args)).toEqual(expected)
})

test('primeSymptomTimingError() - timing error & no bad error - no effect on fatal', () => {
  const args = {
    first_prime_symptom: 19,
    outcome: 'FAT',
    returned: 'unchanged',
  }
  const expected = args
  const mapper = primeSymptomTimingError({ badTimingError: 0, timingError: 10 })
  expect(mapper(args)).toEqual(expected)
})

test('primeSymptomTimingError() - bad timing error & no timing error - effects both', () => {
  const argsNFT = {
    first_prime_symptom: 19,
    outcome: 'NFT',
    theRest: 'returned unchanged',
  }
  const expectedNFT = {
    ...argsNFT,
    first_prime_symptom: 29,
  }
  const argsFAT = {
    first_prime_symptom: 19,
    outcome: 'FAT',
    theRest: 'returned unchanged',
  }
  const expectedFAT = {
    ...argsFAT,
    first_prime_symptom: 9,
  }
  const mapper = primeSymptomTimingError({ badTimingError: 10, timingError: 0 })
  expect(mapper(argsNFT)).toEqual(expectedNFT)
  expect(mapper(argsFAT)).toEqual(expectedFAT)
})
