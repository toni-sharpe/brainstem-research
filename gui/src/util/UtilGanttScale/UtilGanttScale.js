import { type } from 'ramda'
import { PRECISION } from 'util/Constant/BaseConstantList'
import { throwError, throwNumberError } from 'util/UtilError/UtilError'


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
  const { totalSteps } = scale

  throwError({
    check: type(scale.stepDivision) === 'Number' && type(totalSteps) === 'Number',
    i18nKey: 'calcScaleToFitUI'
  })

  let factoredScale = scale

  if (totalSteps > 20 && totalSteps <= 200) {
    factoredScale = scaleAdjust({ factor: 10, ...scale })
  }

  if (totalSteps > 200 && totalSteps <= 2000) {
    factoredScale = scaleAdjust({ factor: 100, ...scale })
  }

  if (totalSteps > 2000 && totalSteps <= 20000) {
    factoredScale = scaleAdjust({ factor: 1000, ...scale })
  }

  if (totalSteps > 20000 && totalSteps <= 200000) {
    factoredScale = scaleAdjust({ factor: 10000, ...scale })
  }

  if (totalSteps > 200000 && totalSteps <= 2000000) {
    factoredScale = scaleAdjust({ factor: 100000, ...scale })
  }

  return { ...scale, ...factoredScale }
}

export function calcStepDiff({ firstStep, lastStep }) {
  throwNumberError({ caller: 'calcStepDiff in UtilGanttScale', numberList: [['lastStep', lastStep], ['firstStep', firstStep]] })
  const greaterThanCheck = lastStep >= firstStep
  throwError({ check: greaterThanCheck, i18nKey: 'calcStepDiffGoodDiff' })

  return lastStep - firstStep
}

export function calcScalePerc({ step, stepDiff }) {
  throwNumberError({ caller: 'calcScalePerc in UtilGanttScale', numberList: [[ 'step', step ], ['stepDiff', stepDiff ]] })

  return Number(
    (
      step
      /
      stepDiff
      *
      100
    ).toPrecision(PRECISION)
  )
}

export function calcLeftScalePerc({ firstStep, step, stepDiff }) {
  throwNumberError({ caller: 'calcLeftScalePerc in UtilGanttScale', numberList: [[ 'firstStep', firstStep ]] })

  const scalePerc = calcScalePerc({ step, stepDiff })

  return Number(
    (
      scalePerc
      -
      (
        100
        /
        stepDiff
        *
        firstStep
      )
    ).toPrecision(PRECISION)
  )
}

export function calcScaleLinePosition({ ganttHeight, isLastStep, stepLeftPerc }) {
  return isLastStep
    ? { height: `${ganttHeight}px`, right: 0 }
    : { height: `${ganttHeight}px`, left: `calc(${stepLeftPerc}%)` }
}

export function calcScaleStepPosition({ isLastStep, stepLeftPerc }) {
  return isLastStep
    ? { right: 0 }
    : { left: `calc(${stepLeftPerc}%)`}
}

