import { primeSymptomHistogramBarGrouper, calcPrimeSymptomHistogramBarGroup } from './UtilPrimeSymptomHistogram'

const histogramData = [
  { outcome: 'NFT', first_prime_symptom: 24 },
  { outcome: 'FAT', first_prime_symptom: 25 },
  { outcome: 'FAT', first_prime_symptom: 14 },
  { outcome: 'FAT', first_prime_symptom: 14 },
  { outcome: 'NFT', first_prime_symptom: 12 },
  { outcome: 'NFT', first_prime_symptom: 15 },
  { outcome: 'FAT', first_prime_symptom: 43 },
  { outcome: 'FAT', first_prime_symptom: 22 },
  { outcome: 'NFT', first_prime_symptom: 20 },
  { outcome: 'NFT', first_prime_symptom: 16 },
  { outcome: 'NFT', first_prime_symptom: 28 },
  { outcome: 'FAT', first_prime_symptom: 27 },
  { outcome: 'FAT', first_prime_symptom: 22 },
  { outcome: 'FAT', first_prime_symptom: 14 },
  { outcome: 'FAT', first_prime_symptom: 45 },
  { outcome: 'NFT', first_prime_symptom: 19 },
  { outcome: 'NFT', first_prime_symptom: 24 },
  { outcome: 'FAT', first_prime_symptom: 31 },
  { outcome: 'NFT', first_prime_symptom: 13 },
  { outcome: 'NFT', first_prime_symptom: 12 },
  { outcome: 'NFT', first_prime_symptom: 18 },
  { outcome: 'FAT', first_prime_symptom: 14 },
  { outcome: 'NFT', first_prime_symptom: 26 },
  { outcome: 'NFT', first_prime_symptom: 16 },
  { outcome: 'FAT', first_prime_symptom: 22 },
  { outcome: 'FAT', first_prime_symptom: 23 },
  { outcome: 'NFT', first_prime_symptom: 19 },
  { outcome: 'FAT', first_prime_symptom: 33 },
  { outcome: 'FAT', first_prime_symptom: 31 },
  { outcome: 'NFT', first_prime_symptom: 18 },
  { outcome: 'NFT', first_prime_symptom: 20 },
  { outcome: 'NFT', first_prime_symptom: 15 },
  { outcome: 'NFT', first_prime_symptom: 13 },
  { outcome: 'FAT', first_prime_symptom: 17 },
  { outcome: 'FAT', first_prime_symptom: 14 },
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
    [ "0", { "fatal":  0, "nonFatal":  0 }],
    [ "5", { "fatal":  0, "nonFatal":  0 }],
    ["10", { "fatal":  5, "nonFatal": 12 }],
    ["15", { "fatal":  1, "nonFatal": 16 }],
    ["20", { "fatal":  5, "nonFatal":  4 }],
    ["25", { "fatal":  1, "nonFatal":  4 }],
    ["30", { "fatal":  3, "nonFatal":  0 }],
    ["35", { "fatal":  0, "nonFatal":  0 }],
    ["40", { "fatal":  2, "nonFatal":  0 }],
    ["45", { "fatal":  0, "nonFatal":  0 }],
    ["50", { "fatal":  0, "nonFatal":  0 }],
    ["55", { "fatal":  0, "nonFatal":  0 }],
    ["60", { "fatal":  0, "nonFatal":  0 }],
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


