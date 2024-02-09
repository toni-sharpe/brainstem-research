import { ORDERED_FILTERS } from 'util/Constant/BaseConstantList'

import {
  confirmedActorFilter,
  removeDubiousFilter,
  severeFilter,
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
  currentFilterList: ORDERED_FILTERS
})
const removeDubiousFilterMapper = removeDubiousFilter({
  currentFilterList: ORDERED_FILTERS
})
const severeFilterMapper = severeFilter({
  currentFilterList: ORDERED_FILTERS
})
const fjpFilterMapper = fjpFilter({
  currentFilterList: ORDERED_FILTERS
})
const pathologicalEventDurationFilterMapper = pathologicalEventDurationFilter({
  currentFilterList: ORDERED_FILTERS
})
const hardEventOnlyFilterMapper = hardEventOnlyFilter({
  currentFilterList: ORDERED_FILTERS
})
const hardPrimeSymptomFilterMapper = hardPrimeSymptomFilter({
  currentFilterList: ORDERED_FILTERS
})
const primeSymptomFilterMapper = primeSymptomFilter({
  currentFilterList: ORDERED_FILTERS
})
const secondOrMoreMapper = secondOrMore({
  currentFilterList: ORDERED_FILTERS
})
const thirdOrMoreMapper = thirdOrMore({
  currentFilterList: ORDERED_FILTERS
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
  expect(filterFn({ consultant_doctor: 'DEE' })).toBeTruthy()

  expect(filterFn({ consultant_doctor: 'WRONG' })).toBeFalsy()
  expect(filterFn({})).toBeFalsy()
})


/*
 * removeDubiousFilter()
 */
test('removeDubiousFilter()', () => {
  const filterFn = filterOn({ fn: removeDubiousFilter, key: 'rmDubious' })
  expect(filterFn({ outlier: 'DUB' })).toBeFalsy()
})


/*
 * severeFilter()
 */
test('severeFilter() - when off does nothing', () => {
  expect(severeFilterMapper({})).toBeTruthy()
})

test('severeFilter()', () => {
  const severeFilterFn = filterOn({ fn: severeFilter, key: 'severe' })
  expect(severeFilterFn({ outcome: 'SEV' })).toBeTruthy()
  expect(severeFilterFn({ outcome: 'NSV' })).toBeFalsy()
  const nonSevereFilterFn = filterOn({ fn: severeFilter, key: 'nonSevere' })
  expect(nonSevereFilterFn({ outcome: 'SEV' })).toBeFalsy()
  expect(nonSevereFilterFn({ outcome: 'NSV' })).toBeTruthy()
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

test('hardEventOnlyFilter() - with any prime or severe symptom returns true', () => {
  const filterFn = filterOn({ fn: hardEventOnlyFilter, key: 'hardEventOnly' })
  // Severe symptom 1
  const argsSevereSymptom1 = {
    ...baseArgsAllNull,
    fatal_symptom_1: 19,
  }
  expect(filterFn(argsSevereSymptom1)).toBeTruthy()

  // Severe symptom 2
  const argsSevereSymptom2 = {
    ...baseArgsAllNull,
    fatal_symptom_2: 23,
  }
  expect(filterFn(argsSevereSymptom2)).toBeTruthy()

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
  expect(filterFn({ event_count: 1 })).toBeFalsy()
  expect(filterFn({ event_count: 2 })).toBeTruthy()
})


/*
 * thirdOrMore()
 */
test('thirdOrMore() - when off does nothing', () => {
  expect(thirdOrMoreMapper({})).toBeTruthy()
})

test('thirdOrMore()', () => {
  const filterFn = filterOn({ fn: thirdOrMore, key: 'thirdOrMore' })
  expect(filterFn({ event_count: 2 })).toBeFalsy()
  expect(filterFn({ event_count: 3 })).toBeTruthy()
})
