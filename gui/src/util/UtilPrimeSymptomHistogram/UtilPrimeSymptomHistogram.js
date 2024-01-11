import * as ramda from 'ramda'

import { throwFnError, throwError } from 'util/Util/Util'
import { calcHistogramBarHeight } from 'util/UtilHistogram/UtilHistogram'
import { PRIME_SYMPTOM_HISTOGRAM_BAR_LIST_MAP } from 'util/Constant/BaseConstantList'

export const primeSymptomHistogramBarGrouper = ({ first_prime_symptom } = {}) => {
  if (first_prime_symptom > 60) { return 60; }
  if (first_prime_symptom > 55) { return 55; }
  if (first_prime_symptom > 50) { return 50; }
  if (first_prime_symptom > 45) { return 45; }
  if (first_prime_symptom > 40) { return 40; }
  if (first_prime_symptom > 35) { return 35; }
  if (first_prime_symptom > 30) { return 30; }
  if (first_prime_symptom > 25) { return 25; }
  if (first_prime_symptom > 20) { return 20; }
  if (first_prime_symptom > 15) { return 15; }
  if (first_prime_symptom > 10) { return 10; }
  if (first_prime_symptom > 5) { return 5; }
  return 0
}

export const groupByOutcome = ramda.groupBy(ramda.prop('outcome'))


export function applyFactor({
  currentFactorOn = true,
  fatalCount = 0,
  nonFatalCount = 0,
}) {
  return fatalCount > 0 && nonFatalCount > 0 && currentFactorOn
    ? (fatalCount / nonFatalCount).toFixed(2)
    : 1
}


export function writeLabelForPointChange({ pointChange }) {
  // the `-` symbol is there by default, this func makes that clearer
  return pointChange > 0 ? `+${pointChange}` : `${pointChange}`
}


export function primeSymptomTimingError({ badTimingError = 0, timingError = 0 }) {
  return (event) => {
    if (
      event?.consultant_doctor === 'FIR'
      ||
      (
        badTimingError === 0
        &&
        timingError === 0
      )
    ) { return event }

    let adjustedPrimeSymptom = event.first_prime_symptom
    if (timingError > 0 && badTimingError === 0 && event.outcome === 'NFT') {
      adjustedPrimeSymptom = event.first_prime_symptom + timingError
    }
    if (timingError === 0 && badTimingError > 0 ) {
      if (event.outcome === 'NFT') {
        adjustedPrimeSymptom = event.first_prime_symptom + badTimingError
      }
      if (event.outcome === 'FAT') {
        adjustedPrimeSymptom = event.first_prime_symptom - badTimingError
      }
    }

    return ({
      ...event,
      first_prime_symptom: adjustedPrimeSymptom
    })
  }
}


export function calcPrimeSymptomHistogramBarGroup({
  factor = 1,
  primeSymptomHistogramBarGrouper,
  histogramData,
}) {
  throwFnError({
    fn: primeSymptomHistogramBarGrouper,
    fnName: 'primeSymptomHistogramBarGrouper',
    caller: 'UtilPrimeSymptomHistogram.calcPrimeSymptomHistogramBarGroup'
  })
  throwError({
    check: histogramData?.length > 0,
    i18nKey: 'primeSymptomHistogramBarGroup'
  })
  return ramda.pipe(
    ramda.groupBy(primeSymptomHistogramBarGrouper),
    ramda.mergeRight(PRIME_SYMPTOM_HISTOGRAM_BAR_LIST_MAP),
    ramda.toPairs,
    ramda.map(([k, v]) => {
      const { FAT, NFT } = groupByOutcome(v)
      return [
        k, {
          fatal: calcHistogramBarHeight({
            blockSize: 1,
            elems: FAT
          }),
          nonFatal: calcHistogramBarHeight({
            blockSize: 1,
            elems: NFT
          }) * factor
        }
      ]
    })
  )(histogramData)
}


export function calcAverage(vals) {
  if (vals?.length) {
    return ramda.pipe(
      ramda.pluck('first_prime_symptom'),
      ramda.median,
      v => v.toFixed(2)
    )(vals)
  }
  return 0
}
