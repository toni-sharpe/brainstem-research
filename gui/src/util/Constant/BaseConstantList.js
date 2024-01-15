import { keys } from 'ramda'

/***********************************/
/*
 * Correlation heatmap
 */
export const CORRELATION_HEATMAP_FIELD_LIST = [
  // 0
  'care_technique_1', 'care_equipment_1', 'care_technique_2', 'care_technique_3', 'care_technique_4',
  'care_technique_5', 'care_equipment_2', 'care_equipment_3', 'care_technique_6', 'care_technique_7',
  'care_equipment_4',

  // 11
  'patient_weight',
  'presented_gender',
  'source_country',
  'consultant_doctor',
  'event_count',
  'care_site',

  // 17
  'etiology',
  'outcome',
  'outcome_type',
  'care_error_level',
  'overall_patient_rating',
  'pathological_severity',
  'pathogenesis_duration',
  'pathological_event_duration',
  'outlier',

  // 26
  'intro_symptom_start', 'intro_symptom_end', 'intro_symptom_duration',
  'mild_symptom_1', 'mild_symptom_1_1_end', 'mild_symptom_1_2', 'mild_symptom_1_duration',
  'mild_symptom_2', 'mild_symptom_2_duration',

  // 35
  'first_prime_symptom', 'first_prime_symptom_type',
  'prime_symptom_1', 'prime_symptom_1_duration', 'prime_symptom_any',
  'prime_symptom_2', 'prime_symptom_2_duration',
  'prime_symptom_3', 'prime_symptom_3_duration',
  'prime_symptom_duration', 'prime_symptom_level', 'prime_symptom_proportion',

  // 48
  'recovery_duration', 'recovery_proportion',

  // 50
  'fatal_symptom_1', 'fatal_symptom_2',
  'death_response_1', 'death_response_2', 'slight_death_response_1', 'slight_death_response_2',
  'time_of_death',
]


/***********************************/
/*
 * Errors
 */
export const I18N_ERROR_KEY = 'ErrorList'


/***********************************/
/*
 * Filters
 */
export const ORDERED_FILTERS = [
  'fjp',
  'rmDubious',
  'confirmedActors',
  'hardEventOnly',
  'hardPrimeSymptom',
  'fatal',
  'nonFatal'
]


/***********************************/
/*
 * Histogram
 */
export const HISTOGRAM_BAR_LIST_COUNT = 1
export const HISTOGRAM_BAR_LIST_MARGIN = 1
export const HISTOGRAM_BAR_SEGMENT_ALPHA_STEP = 0.25
export const HISTOGRAM_BAR_WIDTH = 1
export const CONTRAST_TOGGLE_MINIMUM = 11 // contrast toggling doesn't work with small numbers that
                                         // naturally contrast when spread around the wheel
export const HISTORGRAM_HEIGHT = 70.0 // vh units
export const TOP_SPACER = 1.1 // Add a bit of space above the largest bar, in YAxis units
export const USE_HUE_WHEEL = false
export const USE_HUE_CONTRAST_TOGGLE = false


/***********************************/
/*
 * Menu
 */
export const ROOT_MENU_SLUGS = [
  '',
  'Scatter',
  'PrimeSymptomList',
  'AntiBiasToolKit',
  'TimeLine',
  'HistogramMaker',
]


/***********************************/
/*
 * Mistakes
 */
export const BAD_CORRELATION_SIM_ERROR_LIST = [
  0,
  3,
  5,
  7,
  11,
  17,
  23,
  31,
  41,
  53,
  67,
  87,
  113,
  143,
]
export const BAD_TIMING_ERROR = 0
export const BAD_TIMING_SIM_ERROR_LIST = [
  0,
  0.5,
  1,
  1.5,
  2,
  2.5,
  3,
  3.5,
  4,
  4.5,
  5,
  5.5,
  6,
]
export const TIMING_ERROR = 0


/***********************************/
/*
 * Prime symptom
 */
export const PRIME_SYMPTOM_HISTOGRAM_BAR_LIST_MAP = {
   0: [],  5: [], 10: [], 15: [],
  20: [], 25: [], 30: [], 35: [],
  40: [], 45: [], 50: [], 55: [],
  60: []
}
export const PRIME_SYMPTOM_MINIMUM_COUNT = 5
export const PRIME_SYMPTOM_BUTTON_SET = [
  -12,
  -3,
  -1,
  +1,
  +3,
  +12
]
const barListCount = keys(PRIME_SYMPTOM_HISTOGRAM_BAR_LIST_MAP).length
export const PRIME_SYMPTOM_BLOCK_SIZE = (
  100
  -
  (
    barListCount
    -
    1
  )
)
/
(
  barListCount
  *
  2
)


/***********************************/
/*
 * Scatter Hypothesis
 */
export const HYPOTHESIS_SYMPTOM_X_Y = {
  x: 'fatal_symptom_1',
  y: 'fatal_symptom_2',
}


/***********************************/
/*
 * Time Line Stat Chart Bars
 */
export const BAR_HEIGHT = 44
export const BAR_SPACER = 29
export const PRECISION = 5
export const QUANTILE_LIST = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
export const QUANTILE_LIST_LONG = QUANTILE_LIST
export const QUANTILE_LIST_SHORT = [
  QUANTILE_LIST[1],
  QUANTILE_LIST[4],
  QUANTILE_LIST[7],
]
export const QUANTILE_DETAIL_THRESHOLD = 5
export const SCALE_DEFAULT = {
  totalSteps: 5,
  stepDivision: 60,
}
export const TONE_KEY_LIST = [
  'good',
  'notGood',
  'bad',
  'veryBad',
  'neutral',
]
export const STAT_BAR_DETAIL_LIST = {
  deviation: true,
  label: true,
  statList: true,
  quantile: true,
  quantileNumber: false,
  mean: true,
  median: true,
  range: true,
  min: false,
  max: false,
  fatLines: false,
}


/***********************************/
/*
 * Time-line heatmap
 */
export const CROSSOVER_TO_SERIOUS = 20

export const DATA_POINT_SUM_LIST = [
  'overall_patient_rating',
  'pathological_severity',
  'care_error_level',
]

export const MONTH_TYPE_LIST = [
  null,
  'event-free',
  'future',
  'this-month',
]

// This number, higer than 255 restricts the increments to a reduced range that stays above black
// 510, double 255, drops in increments of 0.5
export const COLOR_RANGE_RESTRICTOR = 510

// null is just the regular severity reflecting month
export const TIME_LINE_FILTER_LIST = {
  clear: [null, null],
  CRW: ['consultant_doctor', 'CRW'],
  AGG: ['consultant_doctor', 'AGG'],
  NEM: ['consultant_doctor', 'NEM'],
  DEE: ['outcome_type', 'DEE'],
  DNT: ['outcome_type', 'DNT'],
  DCI: ['outcome_type', 'DCI'],
  NFT: ['outcome', 'NFT'],
  UNK: ['outcome', 'UNK'],
}

export const TIME_LINE_FIRST_MONTH = '2000-01-01'
