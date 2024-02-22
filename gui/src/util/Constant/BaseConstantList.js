import { keys } from 'ramda'

/***********************************/
/*
 * Common
 */
export const I18N_ERROR_KEY = 'ErrorList'
export const PRECISION = 6


/***********************************/
/*
 * Filters
 */
export const ORDERED_FILTERS = {
  fjp: false,
  rmDubious: false,
  hardEventOnly: false,
  severe: false,
  nonSevere: false,
}


/***********************************/
/*
 * Histogram
 */
export const HISTOGRAM_BAR_LIST_COUNT = 1
export const HISTOGRAM_BAR_LIST_MARGIN = 1
export const HISTOGRAM_BAR_WIDTH = 1
export const HISTORGRAM_HEIGHT = 74.0 // vh units
export const TOP_SPACER = 1.1 // Add a bit of space above the largest bar, in YAxis units


/***********************************/
/*
 * Hue
 */
export const CONTRAST_TOGGLE_MINIMUM = 11 // contrast toggling doesn't work with small numbers that
                                         // naturally contrast when spread around the wheel
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
  'Gantt',
  'HistogramMaker',
  'SVG',
  'WorldMap',
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
export const PRIME_SYMPTOM_HISTOGRAM_HEIGHT = 56


/***********************************/
/*
 * Gantt Bars
 */
export const GANTT_BAR_HEIGHT = 44
export const GANTT_BAR_SPACER = 29
export const QUANTILE_LIST = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
export const QUANTILE_LIST_LONG = QUANTILE_LIST
export const QUANTILE_LIST_SHORT = [
  QUANTILE_LIST[1],
  QUANTILE_LIST[4],
  QUANTILE_LIST[7],
]
export const QUANTILE_DETAIL_THRESHOLD = 5
export const GANTT_SCALE_DEFAULT = {
  firstStep: 0,
  lastStep: 12,
  totalSteps: 12,
  stepDivision: 30,
}
export const TONE_KEY_LIST = [
  'good',
  'notGood',
  'bad',
  'veryBad',
  'neutral',
]
export const GANTT_TOGGLE_LIST = {
  deviation: true,
  label: true,
  statList: true,
  quantile: true,
  quantileNumber: false,
  mean: true,
  median: true,
  range: true,
  fatLines: false,
}


/***********************************/
/*
 * SVG
 */
export const SVG_SCALE = 500
export const SVG_SCALE_RADIUS = SVG_SCALE / 2
export const SVG_OFFSET = 0
export const OUTCOME_MULTIPLIER = 2
export const OUTCOME_START = 15

/*
 * Drag graph
 */
export const DRAG_GRAPH_LABEL_SIZE = 52
export const DRAG_GRAPH_MINIMUM_SELECTED_RADIUS = 6
export const DRAG_GRAPH_SVG_SCALE = 640
export const DRAG_GRAPH_SVG_SCALE_RADIUS = DRAG_GRAPH_SVG_SCALE / 2
export const DRAG_GRAPH_SVG_VIEWBOX = `${SVG_OFFSET} ${SVG_OFFSET} ${DRAG_GRAPH_SVG_SCALE} ${DRAG_GRAPH_SVG_SCALE}`

/*
 * Scatter graph
 */
export const SCATTER_SVG_SCALE = 700
export const HYPOTHESIS_SYMPTOM_X_Y = {
  x: 'fatal_symptom_2',
  y: 'fatal_symptom_1',
}
export const SCATTER_SCALE_HIGHLIGHT = 5
export const SCATTER_SCALE_LABEL_OFFSET = 50
export const SCATTER_SCALE_NUMBER_OFFSET = 12
export const SCATTER_AXIS_LABEL_OFFSET = 36

/*
 * World map
 */
export const NON_ISLAND_TINY_TERRIROTORIES = [
  'Azerbaijan',
  'Kosovo',
  'Luxembourg',
  'Oman',
  'Palestine',
]
export const TINY_TERRIROTORY_MAX = 1
export const WORLD_MAP_SVG_SCALE_WIDTH = 960
export const WORLD_MAP_SVG_SCALE_HEIGHT = 432
export const WORLD_MAP_LATITUDE = [
  [  0  , 90, 'N'],
  [ 24  , 80, 'N'],
  [ 48  , 70, 'N'],
  [ 57.6, 66, 'A'],
  [ 72  , 60, 'N'],
  [ 96  , 50, 'N'],
  [120  , 40, 'N'],
  [144  , 30, 'N'],
  [160.8, 23, 'R'],
  [168  , 20, 'N'],
  [192  , 10, 'N'],
  [240  ,  0, 'E'],
  [240  , 10, 'S'],
  [264  , 20, 'S'],
  [271.2, 23, 'P'],
  [288  , 30, 'S'],
  [312  , 40, 'S'],
  [336  , 50, 'S'],
  [360  , 60, 'S'],
  [374.4, 66, 'C'],
  [384  , 70, 'S'],
  [418  , 80, 'S'],
  [432  , 90, 'S'],
]
export const WORLD_MAP_LONGITUDE = [
  [  0  , 180, 'W'],
  [ 25  , 170, 'W'],
  [ 50  , 160, 'W'],
  [ 75  , 150, 'W'],
  [100  , 140, 'W'],
  [125  , 130, 'W'],
  [150  , 120, 'W'],
  [175  , 110, 'W'],
  [200  , 100, 'W'],
  [225  ,  90, 'W'],
  [250  ,  80, 'W'],
  [275  ,  70, 'W'],
  [300  ,  60, 'W'],
  [325  ,  50, 'W'],
  [350  ,  40, 'W'],
  [375  ,  30, 'W'],
  [400  ,  20, 'W'],
  [425  ,  10, 'W'],
  [450  ,   0, 'G'],
  [475  ,  10, 'E'],
  [500  ,  20, 'E'],
  [525  ,  30, 'E'],
  [550  ,  40, 'E'],
  [575  ,  50, 'E'],
  [600  ,  60, 'E'],
  [625  ,  70, 'E'],
  [650  ,  80, 'E'],
  [675  ,  90, 'E'],
  [700  , 100, 'E'],
  [725  , 110, 'E'],
  [750  , 120, 'E'],
  [775  , 130, 'E'],
  [800  , 140, 'E'],
  [825  , 150, 'E'],
  [850  , 160, 'E'],
  [875  , 170, 'E'],
]
export const WORLD_MAP_SVG_CENTER_X = WORLD_MAP_SVG_SCALE_WIDTH / 2
export const WORLD_MAP_SVG_CENTER_Y = WORLD_MAP_SVG_SCALE_HEIGHT / 2
export const WORLD_MAP_SVG_SCALE = `${WORLD_MAP_SVG_SCALE_WIDTH} ${WORLD_MAP_SVG_SCALE_HEIGHT}`
export const WORLD_MAP_ZOOM_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 25, 30]


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
  NSV: ['outcome', 'NSV'],
  UNK: ['outcome', 'UNK'],
}

export const TIME_LINE_FIRST_MONTH = '2000-01-01'
