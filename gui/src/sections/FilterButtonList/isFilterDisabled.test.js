import '@testing-library/jest-dom'

import isFilterDisabled from './isFilterDisabled'


/*
 * Filter is disabled
 */
test('isFilterDisabled() - yes if anti-bias-tool-kit and primeSymptomType', () => {
  expect(isFilterDisabled({ currentUrl: 'anti-bias-tool-kit', k: 'primeSymptomType' })).toBeTruthy()
})
test('isFilterDisabled() - yes if prime-symptom-list and primeSymptomType', () => {
  expect(isFilterDisabled({ currentUrl: 'prime-symptom-list', k: 'primeSymptomType' })).toBeTruthy()
})
test('isFilterDisabled() - yes if time-line and fatal', () => {
  expect(isFilterDisabled({ currentUrl: 'time-line', k: 'fatal' })).toBeTruthy()
})


/*
 * Filter isn't disabled
 */
test('isFilterDisabled() - other, no', () => {
  expect(isFilterDisabled({ currentUrl: 'scatter', k: 'fatal' })).toBeFalsy()
})
