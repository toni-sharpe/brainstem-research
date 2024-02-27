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
  expect(confirmedActorFilterMapper({})).toEqual(true)
})

test('confirmedActorFilter()', () => {
  const filterFn = filterOn({ fn: confirmedActorFilter, key: 'confirmedActors' })

  expect(filterFn({ consultant_doctor: 'FIR' })).toEqual(true)
  expect(filterFn({ consultant_doctor: 'CRW' })).toEqual(true)
  expect(filterFn({ consultant_doctor: 'AGG' })).toEqual(true)
  expect(filterFn({ consultant_doctor: 'NEM' })).toEqual(true)
  expect(filterFn({ consultant_doctor: 'RPV' })).toEqual(true)
  expect(filterFn({ consultant_doctor: 'GAL' })).toEqual(true)
  expect(filterFn({ consultant_doctor: 'BOD' })).toEqual(true)
  expect(filterFn({ consultant_doctor: 'DEE' })).toEqual(true)

  expect(filterFn({ consultant_doctor: 'WRONG' })).toEqual(false)
  expect(filterFn({})).toEqual(false)
})


/*
 * removeDubiousFilter()
 */
test('removeDubiousFilter()', () => {
  const filterFn = filterOn({ fn: removeDubiousFilter, key: 'rmDubious' })
  expect(filterFn({ outlier: 'DUB' })).toEqual(false)
})


/*
 * severeFilter()
 */
test('severeFilter() - when off does nothing', () => {
  expect(severeFilterMapper({})).toEqual(true)
})

test('severeFilter()', () => {
  const severeFilterFn = filterOn({ fn: severeFilter, key: 'severe' })
  expect(severeFilterFn({ outcome: 'SEV' })).toEqual(true)
  expect(severeFilterFn({ outcome: 'NSV' })).toEqual(false)
  const nonSevereFilterFn = filterOn({ fn: severeFilter, key: 'nonSevere' })
  expect(nonSevereFilterFn({ outcome: 'SEV' })).toEqual(false)
  expect(nonSevereFilterFn({ outcome: 'NSV' })).toEqual(true)
})


/*
 * fjpFilter()
 */
test('fjpFilter() - when off does nothing', () => {
  expect(fjpFilterMapper({})).toEqual(true)
})

test('fjpFilter()', () => {
  const filterFn = filterOn({ fn: fjpFilter, key: 'fjp' })
  expect(filterFn({ consultant_doctor: 'FIR' })).toEqual(true)
  expect(filterFn({ consultant_doctor: 'WRONG' })).toEqual(false)
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
  expect(hardEventOnlyFilterMapper({})).toEqual(true)
})

test('hardEventOnlyFilter() - when everything indicates a softer event returns false', () => {
  const filterFn = filterOn({ fn: hardEventOnlyFilter, key: 'hardEventOnly' })
  expect(filterFn(baseArgsAllNull)).toEqual(false)
})

test('hardEventOnlyFilter() - with any prime or severe symptom returns true', () => {
  const filterFn = filterOn({ fn: hardEventOnlyFilter, key: 'hardEventOnly' })
  // Severe symptom 1
  const argsSevereSymptom1 = {
    ...baseArgsAllNull,
    fatal_symptom_1: 19,
  }
  expect(filterFn(argsSevereSymptom1)).toEqual(true)

  // Severe symptom 2
  const argsSevereSymptom2 = {
    ...baseArgsAllNull,
    fatal_symptom_2: 23,
  }
  expect(filterFn(argsSevereSymptom2)).toEqual(true)

  // First prime symptom
  const argsPrimeSymptom = {
    ...baseArgsAllNull,
    first_prime_symptom: 29,
  }
  expect(filterFn(argsPrimeSymptom)).toEqual(true)

  // Prime symptom 1
  const argsPrimeSymptom1 = {
    ...baseArgsAllNull,
    prime_symptom_1: 31,
  }
  expect(filterFn(argsPrimeSymptom1)).toEqual(true)

  // Prime symptom 2
  const argsPrimeSymptom2 = {
    ...baseArgsAllNull,
    prime_symptom_2: 37,
  }
  expect(filterFn(argsPrimeSymptom2)).toEqual(true)

  // Prime symptom 3
  const argsPrimeSymptom3 = {
    ...baseArgsAllNull,
    prime_symptom_3: 41,
  }
  expect(filterFn(argsPrimeSymptom3)).toEqual(true)
})

test('hardEventOnlyFilter() - with just a mild symptom duration of null returns false', () => {
  const filterFn = filterOn({ fn: hardEventOnlyFilter, key: 'hardEventOnly' })
  expect(filterFn(baseArgsAllNull)).toEqual(false)
})

test('hardEventOnlyFilter() - with just a mild symptom duration of <=15 returns false', () => {
  const filterFn = filterOn({ fn: hardEventOnlyFilter, key: 'hardEventOnly' })
  const argsShortMildSymptomDuration = {
    ...baseArgsAllNull,
    mild_symptom_1_duration: 15,
  }
  expect(filterFn(argsShortMildSymptomDuration)).toEqual(false)
})

test('hardEventOnlyFilter() - with just a mild symptom duration of >15 returns true', () => {
  const filterFn = filterOn({ fn: hardEventOnlyFilter, key: 'hardEventOnly' })
  const argsLongEnoughMildSymptomDuration = {
    ...baseArgsAllNull,
    mild_symptom_1_duration: 16,
  }
  expect(filterFn(argsLongEnoughMildSymptomDuration)).toEqual(true)
})


/*
 * hardPrimeSymptomFilter()
 */
test('hardPrimeSymptomFilter() - when off does nothing', () => {
  expect(hardPrimeSymptomFilterMapper({})).toEqual(true)
})

test('hardPrimeSymptomFilter()', () => {
  const filterFn = filterOn({ fn: hardPrimeSymptomFilter, key: 'hardPrimeSymptom' })
  expect(filterFn({ prime_symptom_level: 3 })).toEqual(false)
  expect(filterFn({ prime_symptom_level: 4 })).toEqual(true)
})


/*
 * primeSymptomFilter()
 */
test('primeSymptomFilter() - when off does nothing', () => {
  expect(primeSymptomFilterMapper({})).toEqual(true)
})

test('primeSymptomFilter()', () => {
  const filterFn = filterOn({ fn: primeSymptomFilter, key: 'primeSymptomType' })
  expect(filterFn({ first_prime_symptom_type: null })).toEqual(false)
  expect(filterFn({ first_prime_symptom_type: 3 })).toEqual(true)
})


/*
 * secondOrMore()
 */
test('secondOrMore() - when off does nothing', () => {
  expect(secondOrMoreMapper({})).toEqual(true)
})

test('secondOrMore()', () => {
  const filterFn = filterOn({ fn: secondOrMore, key: 'secondOrMore' })
  expect(filterFn({ event_count: 1 })).toEqual(false)
  expect(filterFn({ event_count: 2 })).toEqual(true)
})


/*
 * thirdOrMore()
 */
test('thirdOrMore() - when off does nothing', () => {
  expect(thirdOrMoreMapper({})).toEqual(true)
})

test('thirdOrMore()', () => {
  const filterFn = filterOn({ fn: thirdOrMore, key: 'thirdOrMore' })
  expect(filterFn({ event_count: 2 })).toEqual(false)
  expect(filterFn({ event_count: 3 })).toEqual(true)
})
