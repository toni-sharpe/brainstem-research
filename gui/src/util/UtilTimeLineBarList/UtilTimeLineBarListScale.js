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
  const { stepDivision, totalSteps } = scale

  throwError({
    check: type(stepDivision) === 'Number' && type(totalSteps) === 'Number',
    i18nKey: 'calcScaleToFitUI'
  })

  if (totalSteps <= 20) {
    return scale
  }

  if (totalSteps <= 200) {
    return scaleAdjust({ factor: 10, stepDivision, totalSteps })
  }

  if (totalSteps <= 2000) {
    return scaleAdjust({ factor: 100, stepDivision, totalSteps })
  }

  if (totalSteps <= 20000) {
    return scaleAdjust({ factor: 1000, stepDivision, totalSteps })
  }

  if (totalSteps <= 200000) {
    return scaleAdjust({ factor: 10000, stepDivision, totalSteps })
  }

  if (totalSteps <= 2000000) {
    return scaleAdjust({ factor: 100000, stepDivision, totalSteps })
  }

  return scale
}
