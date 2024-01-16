// export const CURRENT_FILTER_LIST = {
//   confirmedActors: false,
//   severe: false,
//   primeSymptomType: false,
//   fjp: false,
//   hardPrimeSymptom: false,
//   rmDubious: false,
//   longTime: false,
//   moderateTime: false,
//   nonSevere: false,
//   secondOrMore: false,
//   thirdOrMore: false,
// }

// export const ORDERED_FILTERS = [
//   'fjp',
//   'rmDubious',
//   'confirmedActors',
//   'moderateTime',
//   'longTime',
//   'primeSymptomType',
//   'hardPrimeSymptom',
//   'secondOrMore',
//   'thirdOrMore',
//   'severe',
//   'nonSevere'
// ]

export const FILTER_TOTAL = 10

export const CURRENT_FILTER_LIST = {
  confirmedActors: false,
  severe: false,
  fjp: false,
  hardEventOnly: false,
  hardPrimeSymptom: false,
  rmDubious: true,
  nonSevere: false,
}

export const SEVERE_KEYS = [
  'fatal_symptom_1',
  'fatal_symptom_2',
  'time_of_death',
  'death_response_1',
  'slight_death_response_1',
  'death_response_2',
  'slight_death_response_2',
  'web_test_key__SB1',
  'veryBad',
]

export const NON_SEVERE_KEYS = [
  'pathogenesis_duration',
  'recovery_duration',
  'web_test_key__SB2',
  'good',
]
