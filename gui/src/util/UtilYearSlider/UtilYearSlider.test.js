import { YEAR_SLIDER_BUTTON_WIDTH } from 'util/Constant/BaseConstantList'

import {
  calcTotalStepCount,
  calcStepSize,
  calcCurrentStep,
} from './UtilYearSlider'

test('calcTotalStepCount() returns endYear - startYear', () => {
  expect(calcTotalStepCount({ endYear: 2, startYear: 1 })).toEqual(1)
})

test('calcTotalStepCount() returns null if theyre equal', () => {
  expect(calcTotalStepCount({ endYear: 1, startYear: 1 })).toEqual(null)
})

test('calcTotalStepCount() throws error if startYear is later than endYear', () => {
  expect(() => calcTotalStepCount({ endYear: 1, startYear: 2 })).toThrow('s')
})

test(`calcStepSize() to return the correct % after ${YEAR_SLIDER_BUTTON_WIDTH} has been removed`, () => {
  expect(calcStepSize({ totalStepCount: 10 })).toEqual(9.5)
})

const currentStepErrMsg = 'currentYear must be equal to of after startYear and equal to or before endYear'

test(`calcCurrentStep() throws error if before start year`, () => {
  expect(() => calcCurrentStep({ currentYear: 1, endYear: 3, startYear: 2 })).toThrow(currentStepErrMsg)
})

test(`calcCurrentStep() is OK if equal to start year`, () => {
  expect(calcCurrentStep({ currentYear: 3, endYear: 11, startYear: 3 })).toEqual(0)
})

test(`calcCurrentStep() is OK if in the middle`, () => {
  expect(calcCurrentStep({ currentYear: 7, endYear: 11, startYear: 3 })).toEqual(4)
})

test(`calcCurrentStep() is OK if equal to end year`, () => {
  expect(calcCurrentStep({ currentYear: 11, endYear: 11, startYear: 3 })).toEqual(8)
})

test(`calcCurrentStep() throws error if after end year`, () => {
  expect(() => calcCurrentStep({ currentYear: 4, endYear: 3, startYear: 2 })).toThrow(currentStepErrMsg)
})

