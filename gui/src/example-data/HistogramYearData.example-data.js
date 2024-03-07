import { calcHistogramBarGroupList } from './HistogramMakerDataFunctions'

export const histogramBarGroupListByYear = {
  2024: calcHistogramBarGroupList({
    currentBarFn: 'max',
    currentGroupBy: 'prime_symptom_2_duration',
    currentPathogenesisStepList: ['mild_symptom_1', 'prime_symptom_3'],
    data,
  }),
  2022: calcHistogramBarGroupList({
    currentBarFn: 'range',
    currentGroupBy: 'pathological_event_duration',
    currentPathogenesisStepList: ['mild_symptom_1', 'mild_symptom_2', 'prime_symptom_1', 'prime_symptom_2'],
    data,
  }),
  2020: calcHistogramBarGroupList({
    currentBarFn: 'mda',
    currentGroupBy: 'prime_symptom_1_duration',
    currentPathogenesisStepList: ['mild_symptom_2', 'prime_symptom_1', 'prime_symptom_2'],
    data,
  }),
  2018: calcHistogramBarGroupList({
    currentBarFn: 'ave',
    currentGroupBy: 'prime_symptom_1_duration',
    currentPathogenesisStepList: ['mild_symptom_1', 'prime_symptom_3'],
    data,
  }),
  2016: calcHistogramBarGroupList({
    currentBarFn: 'range',
    currentGroupBy: 'mild_symptom_1',
    currentPathogenesisStepList: ['prime_symptom_1', 'prime_symptom_2', 'prime_symptom_3', 'prime_symptom_2_duration', 'prime_symptom_3_duration'],
    data,
  }),
  2014: calcHistogramBarGroupList({
    currentBarFn: 'mda',
    currentGroupBy: 'pathological_event_duration',
    currentPathogenesisStepList: ['prime_symptom_1', 'prime_symptom_2'],
    data,
  }),
  2012: calcHistogramBarGroupList({
    currentBarFn: 'ave',
    currentGroupBy: 'mild_symptom_1',
    currentPathogenesisStepList: ['mild_symptom_2', 'prime_symptom_1', 'prime_symptom_2'],
    data,
  })
}
