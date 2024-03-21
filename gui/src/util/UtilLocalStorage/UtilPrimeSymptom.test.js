import {
  setJsonLocalStorage,
} from './UtilLocalStorage'

import {
  primeSymptomAntiBiasLocalStorage,
  primeSymptomLocalStorage,
} from './UtilPrimeSymptom'

test('we can set and get a primeSymptomsvalue from local storage', () => {
  setJsonLocalStorage({ k: 'primeSymptom', v: { count: 15, factor: false } })
  expect(primeSymptomLocalStorage({ k: 'primeSymptom' })).toEqual({ count: 15, factor: false })
})

test('and this uses the default too', () => {
  setJsonLocalStorage({ k: 'primeSymptom', v: null })
  expect(primeSymptomLocalStorage({ k: 'primeSymptom' })).toEqual({ count: 5, factor: true })
})

test('we can set and get a primeSymptomAntiBias value from local storage', () => {
  setJsonLocalStorage({ k: 'primeSymptomAntiBias', v: { count: 23, factor: false } })
  expect(primeSymptomAntiBiasLocalStorage({ k: 'primeSymptomAntiBias' })).toEqual({ count: 23, factor: false })
})

test('and this uses the default too', () => {
  setJsonLocalStorage({ k: 'primeSymptomAntiBias', v: null })
  expect(primeSymptomAntiBiasLocalStorage({ k: 'primeSymptomAntiBias' })).toEqual({ count: 5, factor: true })
})
