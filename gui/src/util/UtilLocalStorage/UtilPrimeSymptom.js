import { PRIME_SYMPTOM_MINIMUM_COUNT } from 'util/Constant/BaseConstantList'
import { getJSONLocalStorage } from './UtilLocalStorage'

export function primeSymptomLocalStorage({ k }) {
  return getJSONLocalStorage({ k: 'primeSymptom' }) || { count: PRIME_SYMPTOM_MINIMUM_COUNT, factor: true }
}

export function primeSymptomAntiBiasLocalStorage({ k }) {
  return getJSONLocalStorage({ k: 'primeSymptomAntiBias'}) || { count: PRIME_SYMPTOM_MINIMUM_COUNT, factor: true }
}
