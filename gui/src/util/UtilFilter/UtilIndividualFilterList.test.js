import '@testing-library/jest-dom'

import { CURRENT_FILTER_LIST } from 'util/Constant/FilterConstantList'

import {
  confirmedActorFilter,
  removeDubiousFilter,
  fatalFilter,
  fjpFilter,
  pathologicalEventDurationFilter,
  hardEventOnlyFilter,
  hardPrimeSymptomFilter,
  primeSymptomFilter,
  secondOrMore,
  thirdOrMore,
} from './UtilIndividualFilterList'


/*
 * Set up
 */
function filterOn({ fn, key }) {
  return fn({ currentFilterList: { [key]: true }})
}

const confirmedActorFilterMapper = confirmedActorFilter({
  currentFilterList: CURRENT_FILTER_LIST
})
const removeDubiousFilterMapper = removeDubiousFilter({
  currentFilterList: CURRENT_FILTER_LIST
})
const fatalFilterMapper = fatalFilter({
  currentFilterList: CURRENT_FILTER_LIST
})
const fjpFilterMapper = fjpFilter({
  currentFilterList: CURRENT_FILTER_LIST
})
const pathologicalEventDurationFilterMapper = pathologicalEventDurationFilter({
  currentFilterList: CURRENT_FILTER_LIST
})
const hardEventOnlyFilterMapper = hardEventOnlyFilter({
  currentFilterList: CURRENT_FILTER_LIST
})
const hardPrimeSymptomFilterMapper = hardPrimeSymptomFilter({
  currentFilterList: CURRENT_FILTER_LIST
})
const primeSymptomFilterMapper = primeSymptomFilter({
  currentFilterList: CURRENT_FILTER_LIST
})
const secondOrMoreMapper = secondOrMore({
  currentFilterList: CURRENT_FILTER_LIST
})
const thirdOrMoreMapper = thirdOrMore({
  currentFilterList: CURRENT_FILTER_LIST
})


/*
 * confirmedActorFilter()
 */
test('confirmedActorFilter() - when off does nothing', () => {
  expect(confirmedActorFilterMapper({})).toBeTruthy()
})

test('confirmedActorFilter()', () => {
  const filterFn = filterOn({ fn: confirmedActorFilter, key: 'confirmedActors' })

  expect(filterFn({ consultant_doctor: 'FIR' })).toBeTruthy()
  expect(filterFn({ consultant_doctor: 'CRW' })).toBeTruthy()
  expect(filterFn({ consultant_doctor: 'AGG' })).toBeTruthy()
  expect(filterFn({ consultant_doctor: 'NEM' })).toBeTruthy()
  expect(filterFn({ consultant_doctor: 'RPV' })).toBeTruthy()
  expect(filterFn({ consultant_doctor: 'GAL' })).toBeTruthy()
  expect(filterFn({ consultant_doctor: 'BOD' })).toBeTruthy()
  expect(filterFn({ consultant_doctor: 'IRN' })).toBeTruthy()

  expect(filterFn({ consultant_doctor: 'WRONG' })).toBeFalsy()
  expect(filterFn({})).toBeFalsy()
})


/*
 * removeDubiousFilter()
 */
test('removeDubiousFilter() - when off does nothing', () => {
  expect(removeDubiousFilterMapper({})).toBeFalsy()
  expect(removeDubiousFilterMapper({ outlier: true })).toBeFalsy()
})

test('removeDubiousFilter()', () => {
  const filterFn = filterOn({ fn: removeDubiousFilter, key: 'rmDubious' })
  expect(filterFn({ outlier: true })).toBeFalsy()
})


/*
 * fatalFilter()
 */
test('fatalFilter() - when off does nothing', () => {
  expect(fatalFilterMapper({})).toBeTruthy()
})

test('fatalFilter()', () => {
  const fatalFilterFn = filterOn({ fn: fatalFilter, key: 'fatal' })
  expect(fatalFilterFn({ outcome: 'FAT' })).toBeTruthy()
  expect(fatalFilterFn({ outcome: 'NFT' })).toBeFalsy()
  const nonFatalFilterFn = filterOn({ fn: fatalFilter, key: 'nonFatal' })
  expect(nonFatalFilterFn({ outcome: 'FAT' })).toBeFalsy()
  expect(nonFatalFilterFn({ outcome: 'NFT' })).toBeTruthy()
})


/*
 * fjpFilter()
 */
test('fjpFilter() - when off does nothing', () => {
  expect(fjpFilterMapper({})).toBeTruthy()
})

test('fjpFilter()', () => {
  const filterFn = filterOn({ fn: fjpFilter, key: 'fjp' })
  expect(filterFn({ consultant_doctor: 'FIR' })).toBeTruthy()
  expect(filterFn({ consultant_doctor: 'WRONG' })).toBeFalsy()
})


/*
 * pathologicalEventDurationFilter()
 */
test('pathologicalEventDurationFilter() - when off does nothing', () => {
  expect(pathologicalEventDurationFilterMapper({})).toBeTruthy()
})

test('pathologicalEventDurationFilter() - moderate', () => {
  const filterFn = filterOn({ fn: pathologicalEventDurationFilter, key: 'moderateTime' })
  expect(filterFn({ pathological_event_duration: 29 })).toBeFalsy()
  expect(filterFn({ pathological_event_duration: 30 })).toBeTruthy()
  expect(filterFn({ pathological_event_duration: 31 })).toBeTruthy()
})

test('pathologicalEventDurationFilter() - long', () => {
  const filterFn = filterOn({ fn: pathologicalEventDurationFilter, key: 'longTime' })
  expect(filterFn({ pathological_event_duration: 59 })).toBeFalsy()
  expect(filterFn({ pathological_event_duration: 60 })).toBeTruthy()
  expect(filterFn({ pathological_event_duration: 61 })).toBeTruthy()
})


/*
 * hardEventOnlyFilter()
 */
const baseArgsAllNull = {
  fatal_symptom_1: null,
  fatal_symptom_2: null,
  first_prime_symptom: null,
  prime_symptom_1: null,
  prime_symptom_2: null,
  prime_symptom_3: null,
  mild_symptom_1_duration: null,
}
test('hardEventOnlyFilter() - when off does nothing', () => {
  expect(hardEventOnlyFilterMapper({})).toBeTruthy()
})

test('hardEventOnlyFilter() - when everything indicates a softer event returns false', () => {
  const filterFn = filterOn({ fn: hardEventOnlyFilter, key: 'hardEventOnly' })
  expect(filterFn(baseArgsAllNull)).toBeFalsy()
})

test('hardEventOnlyFilter() - with any prime or fatal symptom returns true', () => {
  const filterFn = filterOn({ fn: hardEventOnlyFilter, key: 'hardEventOnly' })
  // Fatal symptom 1
  const argsFatalSymptom1 = {
    ...baseArgsAllNull,
    fatal_symptom_1: 19,
  }
  expect(filterFn(argsFatalSymptom1)).toBeTruthy()

  // Fatal symptom 2
  const argsFatalSymptom2 = {
    ...baseArgsAllNull,
    fatal_symptom_2: 23,
  }
  expect(filterFn(argsFatalSymptom2)).toBeTruthy()

  // First prime symptom
  const argsPrimeSymptom = {
    ...baseArgsAllNull,
    first_prime_symptom: 29,
  }
  expect(filterFn(argsPrimeSymptom)).toBeTruthy()

  // Prime symptom 1
  const argsPrimeSymptom1 = {
    ...baseArgsAllNull,
    prime_symptom_1: 31,
  }
  expect(filterFn(argsPrimeSymptom1)).toBeTruthy()

  // Prime symptom 2
  const argsPrimeSymptom2 = {
    ...baseArgsAllNull,
    prime_symptom_2: 37,
  }
  expect(filterFn(argsPrimeSymptom2)).toBeTruthy()

  // Prime symptom 3
  const argsPrimeSymptom3 = {
    ...baseArgsAllNull,
    prime_symptom_3: 41,
  }
  expect(filterFn(argsPrimeSymptom3)).toBeTruthy()
})

test('hardEventOnlyFilter() - with just a mild symptom duration of null returns false', () => {
  const filterFn = filterOn({ fn: hardEventOnlyFilter, key: 'hardEventOnly' })
  expect(filterFn(baseArgsAllNull)).toBeFalsy()
})

test('hardEventOnlyFilter() - with just a mild symptom duration of <=15 returns false', () => {
  const filterFn = filterOn({ fn: hardEventOnlyFilter, key: 'hardEventOnly' })
  const argsShortMildSymptomDuration = {
    ...baseArgsAllNull,
    mild_symptom_1_duration: 15,
  }
  expect(filterFn(argsShortMildSymptomDuration)).toBeFalsy()
})

test('hardEventOnlyFilter() - with just a mild symptom duration of >15 returns true', () => {
  const filterFn = filterOn({ fn: hardEventOnlyFilter, key: 'hardEventOnly' })
  const argsLongEnoughMildSymptomDuration = {
    ...baseArgsAllNull,
    mild_symptom_1_duration: 16,
  }
  expect(filterFn(argsLongEnoughMildSymptomDuration)).toBeTruthy()
})


/*
 * hardPrimeSymptomFilter()
 */
test('hardPrimeSymptomFilter() - when off does nothing', () => {
  expect(hardPrimeSymptomFilterMapper({})).toBeTruthy()
})

test('hardPrimeSymptomFilter()', () => {
  const filterFn = filterOn({ fn: hardPrimeSymptomFilter, key: 'hardPrimeSymptom' })
  expect(filterFn({ prime_symptom_level: 3 })).toBeFalsy()
  expect(filterFn({ prime_symptom_level: 4 })).toBeTruthy()
})


/*
 * primeSymptomFilter()
 */
test('primeSymptomFilter() - when off does nothing', () => {
  expect(primeSymptomFilterMapper({})).toBeTruthy()
})

test('primeSymptomFilter()', () => {
  const filterFn = filterOn({ fn: primeSymptomFilter, key: 'primeSymptomType' })
  expect(filterFn({ first_prime_symptom_type: null })).toBeFalsy()
  expect(filterFn({ first_prime_symptom_type: 3 })).toBeTruthy()
})


/*
 * secondOrMore()
 */
test('secondOrMore() - when off does nothing', () => {
  expect(secondOrMoreMapper({})).toBeTruthy()
})

test('secondOrMore()', () => {
  const filterFn = filterOn({ fn: secondOrMore, key: 'secondOrMore' })
  expect(filterFn({ event_number: 1 })).toBeFalsy()
  expect(filterFn({ event_number: 2 })).toBeTruthy()
})


/*
 * thirdOrMore()
 */
test('thirdOrMore() - when off does nothing', () => {
  expect(thirdOrMoreMapper({})).toBeTruthy()
})

test('thirdOrMore()', () => {
  const filterFn = filterOn({ fn: thirdOrMore, key: 'thirdOrMore' })
  expect(filterFn({ event_number: 2 })).toBeFalsy()
  expect(filterFn({ event_number: 3 })).toBeTruthy()
})
