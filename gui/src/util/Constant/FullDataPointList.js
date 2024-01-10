import { concat } from 'ramda'

const TEST_POINTS = [
  ['test', { tone: 'neutral' }],
  ['chart', { tone: 'neutral' }],
]

const KEY_ORDER_MAP = [
  ['mild_symptom_1', { tone: 'notGood' }],
  ['mild_symptom_2', { tone: 'notGood' }],
  ['prime_symptom_1', { tone: 'bad' }],
  ['prime_symptom_2', { tone: 'bad' }],
  ['first_prime_symptom', { tone: 'bad' }],
  ['prime_symptom_3', { tone: 'bad' }],
  ['fatal_symptom_1', { tone: 'veryBad' }],
  ['fatal_symptom_2', { tone: 'veryBad' }],
  ['death_response_1', { tone: 'veryBad' }],
  ['slight_death_response_1', { tone: 'veryBad' }],
  ['death_response_2', { tone: 'veryBad' }],
  ['slight_death_response_2', { tone: 'veryBad' }],
]

const BASE_DURATION_MAP = [
  ['pathogenesis_duration', { tone: 'good' }],
  ['recovery_duration', { tone: 'good' }],
  ['pathological_event_duration', { tone: 'neutral' }],
]

const EXTRA_DURATION_MAP = [
  ['intro_symptom_duration', { tone: 'good' }],
  ['mild_symptom_1_duration', { tone: 'notGood' }],
  ['mild_symptom_2_duration', { tone: 'notGood' }],
  ['prime_symptom_duration', { tone: 'bad' }],
  ['prime_symptom_1_duration', { tone: 'bad' }],
  ['prime_symptom_2_duration', { tone: 'bad' }],
  ['prime_symptom_3_duration', { tone: 'bad' }],
]

const DURATION_MAP = concat(BASE_DURATION_MAP, EXTRA_DURATION_MAP)

// care_technique_1
// fatal_symptom_1
// fatal_symptom_2
// first_prime_symptom
// care_error_level
// event_count
// pathological_severity
// death_response_1
// recovery_duration
// mild_symptom_1
// mild_symptom_1_duration
// mild_symptom_2
// pathogenesis_duration
// overall_patient_rating
// prime_symptom_1
// prime_symptom_2
// prime_symptom_3
// prime_symptom_3_duration
// prime_symptom_duration
// prime_symptom_level
// slight_death_response_1
// slight_death_response_2
// time_of_death
// pathological_event_duration
// death_response_2

export const SEVERITY_MEASUREMENT_MAP = [
  ['intro_symptom_start', { tone: 'good' }],
  ['mild_symptom_1_2', { tone: 'notGood' }],
  ['care_technique_1', { tone: 'bad' }],
  ['time_of_death', { tone: 'veryBad' }],
  ['pathological_severity', { tone: 'neutral' }],
  ['care_error_level', { tone: 'neutral' }],
  ['overall_patient_rating', { tone: 'neutral' }],
  ['event_count', { tone: 'neutral' }],
  ['prime_symptom_level', { tone: 'neutral' }],
  ['recovery_proportion', { tone: 'neutral' }],
  ['prime_symptom_proportion', { tone: 'neutral' }],
]

const USER_FACING_SET = concat(
  KEY_ORDER_MAP,
  SEVERITY_MEASUREMENT_MAP,
)

export const FULL_DATA_POINT_LIST = concat(
  concat(USER_FACING_SET, DURATION_MAP),
  TEST_POINTS,
)

export { KEY_ORDER_MAP, DURATION_MAP }

export const GENERAL_RESPONSE_MAP = concat(KEY_ORDER_MAP, BASE_DURATION_MAP)

export default USER_FACING_SET
