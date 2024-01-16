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

test('primeSymptomTimingError() - timing error & no bad error - effects non-severe', () => {
  const args = {
    first_prime_symptom: 19,
    outcome: 'NSV',
    theRest: 'returned unchanged',
  }
  const expected = {
    ...args,
    first_prime_symptom: 29,
  }
  const mapper = primeSymptomTimingError({ badTimingError: 0, timingError: 10 })
  expect(mapper(args)).toEqual(expected)
})

test('primeSymptomTimingError() - timing error & no bad error - no effect on severe', () => {
  const args = {
    first_prime_symptom: 19,
    outcome: 'SEV',
    returned: 'unchanged',
  }
  const expected = args
  const mapper = primeSymptomTimingError({ badTimingError: 0, timingError: 10 })
  expect(mapper(args)).toEqual(expected)
})

test('primeSymptomTimingError() - bad timing error & no timing error - effects both', () => {
  const argsNSV = {
    first_prime_symptom: 19,
    outcome: 'NSV',
    theRest: 'returned unchanged',
  }
  const expectedNSV = {
    ...argsNSV,
    first_prime_symptom: 29,
  }
  const argsSEV = {
    first_prime_symptom: 19,
    outcome: 'SEV',
    theRest: 'returned unchanged',
  }
  const expectedSEV = {
    ...argsSEV,
    first_prime_symptom: 9,
  }
  const mapper = primeSymptomTimingError({ badTimingError: 10, timingError: 0 })
  expect(mapper(argsNSV)).toEqual(expectedNSV)
  expect(mapper(argsSEV)).toEqual(expectedSEV)
})
