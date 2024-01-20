import { type } from 'ramda'
import { throwError } from 'util/Util/Util'


function scaleAdjust({ factor, stepDivision, totalSteps }) {
  return {
    stepDivision:
      stepDivision
      *
      factor,
    totalSteps: Math.ceil(
      totalSteps
      /
      factor
    ),
  }
}


export function calcScaleToFitUI({ scale = {} } = {}) {
  const { firstStep, lastStep, stepDivision, totalSteps } = scale

  throwError({
    check: type(stepDivision) === 'Number' && type(totalSteps) === 'Number',
    i18nKey: 'calcScaleToFitUI'
  })

  let factoredScale = scale

  if (totalSteps > 20 && totalSteps <= 200) {
    factoredScale = scaleAdjust({ factor: 10, stepDivision, totalSteps })
  }

  if (totalSteps > 200 && totalSteps <= 2000) {
    factoredScale = scaleAdjust({ factor: 100, stepDivision, totalSteps })
  }

  if (totalSteps > 2000 && totalSteps <= 20000) {
    factoredScale = scaleAdjust({ factor: 1000, stepDivision, totalSteps })
  }

  if (totalSteps > 20000 && totalSteps <= 200000) {
    factoredScale = scaleAdjust({ factor: 10000, stepDivision, totalSteps })
  }

  if (totalSteps > 200000 && totalSteps <= 2000000) {
    factoredScale = scaleAdjust({ factor: 100000, stepDivision, totalSteps })
  }

  return { ...factoredScale, firstStep, lastStep }
}
