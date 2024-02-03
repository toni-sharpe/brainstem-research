import { primeSymptomHistogramBarGrouper, calcPrimeSymptomHistogramBarGroup } from './UtilPrimeSymptomHistogram'

const histogramData = [
  { outcome: 'NSV', first_prime_symptom: 24 },
  { outcome: 'SEV', first_prime_symptom: 25 },
  { outcome: 'SEV', first_prime_symptom: 14 },
  { outcome: 'SEV', first_prime_symptom: 14 },
  { outcome: 'NSV', first_prime_symptom: 12 },
  { outcome: 'NSV', first_prime_symptom: 15 },
  { outcome: 'SEV', first_prime_symptom: 43 },
  { outcome: 'SEV', first_prime_symptom: 22 },
  { outcome: 'NSV', first_prime_symptom: 20 },
  { outcome: 'NSV', first_prime_symptom: 16 },
  { outcome: 'NSV', first_prime_symptom: 28 },
  { outcome: 'SEV', first_prime_symptom: 27 },
  { outcome: 'SEV', first_prime_symptom: 22 },
  { outcome: 'SEV', first_prime_symptom: 14 },
  { outcome: 'SEV', first_prime_symptom: 45 },
  { outcome: 'NSV', first_prime_symptom: 19 },
  { outcome: 'NSV', first_prime_symptom: 24 },
  { outcome: 'SEV', first_prime_symptom: 31 },
  { outcome: 'NSV', first_prime_symptom: 13 },
  { outcome: 'NSV', first_prime_symptom: 12 },
  { outcome: 'NSV', first_prime_symptom: 18 },
  { outcome: 'SEV', first_prime_symptom: 14 },
  { outcome: 'NSV', first_prime_symptom: 26 },
  { outcome: 'NSV', first_prime_symptom: 16 },
  { outcome: 'SEV', first_prime_symptom: 22 },
  { outcome: 'SEV', first_prime_symptom: 23 },
  { outcome: 'NSV', first_prime_symptom: 19 },
  { outcome: 'SEV', first_prime_symptom: 33 },
  { outcome: 'SEV', first_prime_symptom: 31 },
  { outcome: 'NSV', first_prime_symptom: 18 },
  { outcome: 'NSV', first_prime_symptom: 20 },
  { outcome: 'NSV', first_prime_symptom: 15 },
  { outcome: 'NSV', first_prime_symptom: 13 },
  { outcome: 'SEV', first_prime_symptom: 17 },
  { outcome: 'SEV', first_prime_symptom: 14 },
]


/*
 * calcPrimeSymptomHistogramBarGroup()
 */
test('calcPrimeSymptomHistogramBarGroup()', () => {
  const args = {
    blockSize: 1,
    factor: 2,
    primeSymptomHistogramBarGrouper,
    histogramData,
  }

  const expected = [
    [ "0", { "severe": [ 0,  0], "nonSevere": [ 0,  0] }],
    [ "5", { "severe": [ 0,  0], "nonSevere": [ 0,  0] }],
    ["10", { "severe": [ 5,  5], "nonSevere": [ 6, 12] }],
    ["15", { "severe": [ 1,  1], "nonSevere": [ 8, 16] }],
    ["20", { "severe": [ 5,  5], "nonSevere": [ 2,  4] }],
    ["25", { "severe": [ 1,  1], "nonSevere": [ 2,  4] }],
    ["30", { "severe": [ 3,  3], "nonSevere": [ 0,  0] }],
    ["35", { "severe": [ 0,  0], "nonSevere": [ 0,  0] }],
    ["40", { "severe": [ 2,  2], "nonSevere": [ 0,  0] }],
    ["45", { "severe": [ 0,  0], "nonSevere": [ 0,  0] }],
    ["50", { "severe": [ 0,  0], "nonSevere": [ 0,  0] }],
    ["55", { "severe": [ 0,  0], "nonSevere": [ 0,  0] }],
    ["60", { "severe": [ 0,  0], "nonSevere": [ 0,  0] }],
  ]

  expect(calcPrimeSymptomHistogramBarGroup(args)).toEqual(expected)
})

test('calcPrimeSymptomHistogramBarGroup() throws histogramData error', () => {
  const args = {
    factor: 2,
    primeSymptomHistogramBarGrouper,
    histogramData: null,
  }
  const errorText = 'Prime symptom graph block list must be an array with positive count'
  expect(() => calcPrimeSymptomHistogramBarGroup(args)).toThrow(errorText)
})

test('calcPrimeSymptomHistogramBarGroup() throws fn error', () => {
  const args = {
    factor: 2,
    primeSymptomHistogramBarGrouper: 'not a fn',
    histogramData,
  }
  const errorText = 'primeSymptomHistogramBarGrouper must be provided to UtilPrimeSymptomHistogram.calcPrimeSymptomHistogramBarGroup and must be a function'
  expect(() => calcPrimeSymptomHistogramBarGroup(args)).toThrow(errorText)
})


