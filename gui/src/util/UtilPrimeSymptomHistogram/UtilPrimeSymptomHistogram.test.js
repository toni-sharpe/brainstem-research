import {
  calcAverage,
  groupByOutcome,
  primeSymptomHistogramBarGrouper,
  writeLabelForPointChange,
} from './UtilPrimeSymptomHistogram'


/*
 * calcAverage()
 */
test('calcAverage() - with vals', () => {
  const vals = [
    { first_prime_symptom: 10 },
    { first_prime_symptom: 15 },
    { first_prime_symptom: 20 },
  ]

  expect(calcAverage(vals)).toEqual('15.00')

  const valsToTruncate = [
    { first_prime_symptom: 19 },
    { first_prime_symptom: 19 },
    { first_prime_symptom: 20 },
  ]

  expect(calcAverage(valsToTruncate)).toEqual('19.00')
})

test('calcAverage() - without vals', () => {
  expect(calcAverage()).toEqual(0)
  expect(calcAverage([])).toEqual(0)
})


/*
 * groupByOutcome()
 */
test('groupByOutcome()', () => {
  const args = [
    { outcome: 'a', otherData: 'x' },
    { outcome: 'a', otherData: 'y' },
    { outcome: 'a', otherData: 'z' },
    { outcome: 'b', otherData: 'm' },
    { outcome: 'b', otherData: 'n' },
    { outcome: 'b', otherData: 's' },
    { outcome: 'c', otherData: 'p' },
    { outcome: 'c', otherData: 'q' },
  ]
  const expected = {
    a: [
      { outcome: 'a', otherData: 'x' },
      { outcome: 'a', otherData: 'y' },
      { outcome: 'a', otherData: 'z' },
    ],
    b: [
      { outcome: 'b', otherData: 'm' },
      { outcome: 'b', otherData: 'n' },
      { outcome: 'b', otherData: 's' },
    ],
    c: [
      { outcome: 'c', otherData: 'p' },
      { outcome: 'c', otherData: 'q' },
    ],
  }
  expect(groupByOutcome(args)).toEqual(expected)
})


/*
 * primeSymptomHistogramBarGrouper()
 */
test('primeSymptomHistogramBarGrouper()', () => {
  const testMapper = [
    { v: 90, e: 60 }, { v: 61, e: 60 },
    { v: 60, e: 55 }, { v: 56, e: 55 }, { v: 55, e: 50 }, { v: 51, e: 50 },
    { v: 50, e: 45 }, { v: 46, e: 45 }, { v: 45, e: 40 }, { v: 41, e: 40 },
    { v: 40, e: 35 }, { v: 36, e: 35 }, { v: 35, e: 30 }, { v: 31, e: 30 },
    { v: 30, e: 25 }, { v: 26, e: 25 }, { v: 25, e: 20 }, { v: 21, e: 20 },
    { v: 20, e: 15 }, { v: 16, e: 15 }, { v: 15, e: 10 }, { v: 11, e: 10 },
    { v: 10, e:  5 }, { v:  6, e:  5 }, { v:  5, e:  0 },
    { v: null, e: 0 },
    { v: undefined, e: 0 },
    { v: [], e: 0 },
  ]
  testMapper.map(({ v, e }) => expect(primeSymptomHistogramBarGrouper({ first_prime_symptom: v })).toEqual(e))
})


/*
 * writeLabelForPointChange()
 */
test('writeLabelForPointChange()', () => {
  expect(writeLabelForPointChange({ pointChange: 1 })).toEqual('+1')
  expect(writeLabelForPointChange({ pointChange: 0 })).toEqual('0')
  expect(writeLabelForPointChange({ pointChange: -1 })).toEqual('-1')
})
