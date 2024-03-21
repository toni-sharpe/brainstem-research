import { PRIME_SYMPTOM_MINIMUM_COUNT } from 'util/Constant/BaseConstantList'
import { getJsonLocalStorage } from './UtilLocalStorage'

export function primeSymptomLocalStorage({ k }) {
  return getJsonLocalStorage({ k: 'primeSymptom' }) || { count: PRIME_SYMPTOM_MINIMUM_COUNT, factor: true }
}

export function primeSymptomAntiBiasLocalStorage({ k }) {
  return getJsonLocalStorage({ k: 'primeSymptomAntiBias'}) || { count: PRIME_SYMPTOM_MINIMUM_COUNT, factor: true }
}
