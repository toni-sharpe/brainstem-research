export const UserChoiceGroupedExampleData = [
  [10, [
    { mild_symptom_2: 10, prime_symptom_1: 14 },
    { mild_symptom_2: 10, prime_symptom_1: 21 },
    { mild_symptom_2: 10, prime_symptom_1: null },
    { mild_symptom_2: 10, prime_symptom_1: 31 },
  ]],
  ['10-19', [
    { mild_symptom_2: 11, prime_symptom_1: 14 },
    { mild_symptom_2: 11, prime_symptom_1: null },
    { mild_symptom_2: 12, prime_symptom_1: 20 },
    { mild_symptom_2: 13, prime_symptom_1: 11 },
    { mild_symptom_2: 13, prime_symptom_1: 22 },
    { mild_symptom_2: 13, prime_symptom_1: 19 },
    { mild_symptom_2: 13, prime_symptom_1: null },
    { mild_symptom_2: 14, prime_symptom_1: null },
    { mild_symptom_2: 14, prime_symptom_1: 43 },
    { mild_symptom_2: 14, prime_symptom_1: 16 },
    { mild_symptom_2: 14, prime_symptom_1: 20 },
    { mild_symptom_2: 14, prime_symptom_1: null },
    { mild_symptom_2: 16, prime_symptom_1: 22 },
    { mild_symptom_2: 16, prime_symptom_1: null },
    { mild_symptom_2: 16, prime_symptom_1: 36 },
    { mild_symptom_2: 16, prime_symptom_1: 14 },
    { mild_symptom_2: 16, prime_symptom_1: null },
    { mild_symptom_2: 16, prime_symptom_1: null },
    { mild_symptom_2: 18, prime_symptom_1: null },
    { mild_symptom_2: 18, prime_symptom_1: null },
    { mild_symptom_2: 18, prime_symptom_1: 16 },
    { mild_symptom_2: 18, prime_symptom_1: 19 },
    { mild_symptom_2: 18, prime_symptom_1: 39 },
    { mild_symptom_2: 19, prime_symptom_1: 20 },
    { mild_symptom_2: 19, prime_symptom_1: null },
    { mild_symptom_2: 20, prime_symptom_1: null },
    { mild_symptom_2: 22, prime_symptom_1: null },
    { mild_symptom_2: 22, prime_symptom_1: 20 },
    { mild_symptom_2: 28, prime_symptom_1: 15 },
    { mild_symptom_2: 32, prime_symptom_1: null },
    { mild_symptom_2: 36, prime_symptom_1: 31 },
    { mild_symptom_2: 36, prime_symptom_1: 21 },
    { mild_symptom_2: 54, prime_symptom_1: 20 },
  ]],
  ['20-29', [
    { mild_symptom_2: 20, prime_symptom_1: null },
    { mild_symptom_2: 22, prime_symptom_1: null },
    { mild_symptom_2: 22, prime_symptom_1: 20 },
    { mild_symptom_2: 28, prime_symptom_1: 15 },
  ]],
  ['30-39', [
    { mild_symptom_2: 32, prime_symptom_1: null },
    { mild_symptom_2: 36, prime_symptom_1: 31 },
    { mild_symptom_2: 36, prime_symptom_1: 21 },
  ]],
  ['50-59', [
    { mild_symptom_2: 54, prime_symptom_1: 20 },
  ]]
]

export const UserChoiceGroupingListAfterStatMapping = [{
  10: {
    count: 3,
    label: 10,
    max: 31,
    mda: 7,
    mean: 22,
    median: 21,
    min: 14,
    quantile: [14, 14, 14, 21, 21, 21, 31, 31, 31],
    skewness: '0.519470',
    std: '6.976150',
    tone: null
  },
  label: '10 3'
},
{
  '10-19': {
    count: 20,
    label: '10-19',
    max: 43,
    mda: 3,
    mean: 21.9,
    median: 20,
    min: 11,
    quantile: [14, 15.5, 17.5, 19.5, 20, 20, 21.5, 26.5, 37.5],
    skewness: '1.349780',
    std: '8.413679',
    tone: null},
  label: '10-19 20'
},
{
  '20-29': {
    count: 2,
    label: '20-29',
    max: 20,
    mda: 2.5,
    mean: 17.5,
    median: 17.5,
    min: 15,
    quantile: [15, 15, 15, 15, 17.5, 20, 20, 20, 20],
    skewness: 0,
    std: '2.500000',
    tone: null
  },
  label: '20-29 2'
},
{
  '30-39': {
    count: 2,
    label: '30-39',
    max: 31,
    mda: 5,
    mean: 26,
    median: 26,
    min: 21,
    quantile: [21, 21, 21, 21, 26, 31, 31, 31, 31],
    skewness: 0,
    std: '5.000000',
    tone: null
  },
  label: '30-39 2'
},
{
  '50-59': {
    count: 1,
    label: '50-59',
    max: 20,
    mda: 0,
    mean: 20,
    median: 20,
    min: 20,
    quantile: [20, 20, 20, 20, 20, 20, 20, 20, 20],
    skewness: 0,
    std: 0,
    tone: null
  },
  label: '50-59 1'
}]

export const InteractiveStatChartExampleData = [{
  10: {
    count: 3,
    label: '10',
    max: 31,
    mda: 7,
    mean: 22,
    median: 21,
    min: 14,
    quantile: [14, 14, 14, 21, 21, 21, 31, 31, 31],
    skewness: '0.519470',
    std: '6.976150',
    tone: null
  },
  label: '10 3'
},
{
  '1019': {
    count: 15,
    label: '10-19',
    max: 43,
    mda: 4,
    mean: 22.066666666666666,
    median: 20,
    min: 11,
    quantile: [14, 16, 16, 19, 20, 20, 22, 36, 39],
    skewness: '1.305460',
    std: '9.226532',
    tone: null
  },
  label: '10-19 15'
},
{
  '2029': {
    count: 2,
    label: '20-29',
    max: 20,
    mda: 2.5,
    mean: 17.5,
    median: 17.5,
    min: 15,
    quantile: [15, 15, 15, 15, 17.5, 20, 20, 20, 20],
    skewness: 0,
    std: '2.500000',
    tone: null
  },
  label: '20-29 2'
},
{
  '3039': {
    count: 2,
    label: '30-39',
    max: 31,
    mda: 5,
    mean: 26,
    median: 26,
    min: 21,
    quantile: [21, 21, 21, 21, 26, 31, 31, 31, 31],
    skewness: 0,
    std: '5.000000',
    tone: null
  },
  label: '30-39 2'
},
{
  '5059': {
    count: 1,
    label: '50-59',
    max: 20,
    mda: 0,
    mean: 20,
    median: 20,
    min: 20,
    quantile: [20, 20, 20, 20, 20, 20, 20, 20, 20],
    skewness: 0,
    std: 0,
    tone: null
  },
  label: '50-59 1'
}]

export const InteractiveStatChartFullyProcessedExampleData = [{
  10: {
    count: 3,
    label: '10',
    max: 31,
    mda: 7,
    mean: 22,
    median: 21,
    min: 14,
    quantile: [14, 14, 14, 21, 21, 21, 31, 31, 31],
    skewness: '0.519470',
    std: '6.976150',
    tone: null
  },
  label: '10 3'
},
{
  '10-19': {
    count: 15,
    label: '10-19',
    max: 43,
    mda: 4,
    mean: 22.066666666666666,
    median: 20,
    min: 11,
    quantile: [14, 16, 16, 19, 20, 20, 22, 36, 39],
    skewness: '1.305460',
    std: '9.226532',
    tone: null
  },
  label: '10-19 15'
},
{
  '20-29': {
    count: 2,
    label: '20-29',
    max: 20,
    mda: 2.5,
    mean: 17.5,
    median: 17.5,
    min: 15,
    quantile: [15, 15, 15, 15, 17.5, 20, 20, 20, 20],
    skewness: 0,
    std: '2.500000',
    tone: null
  },
  label: '20-29 2'
},
{
  '30-39': {
    count: 2,
    label: '30-39',
    max: 31,
    mda: 5,
    mean: 26,
    median: 26,
    min: 21,
    quantile: [21, 21, 21, 21, 26, 31, 31, 31, 31],
    skewness: 0,
    std: '5.000000',
    tone: null
  },
  label: '30-39 2'
},
{
  '50-59': {
    count: 1,
    label: '50-59',
    max: 20,
    mda: 0,
    mean: 20,
    median: 20,
    min: 20,
    quantile: [20, 20, 20, 20, 20, 20, 20, 20, 20],
    skewness: 0,
    std: 0,
    tone: null
  },
  label: '50-59 1'
}]
