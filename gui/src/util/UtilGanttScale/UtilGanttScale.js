import { PRECISION } from 'util/Constant/BaseConstantList'
import { throwError, throwNumberError } from 'util/UtilError/UtilError'


/*
 * Scale to fit UI
 */
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
  throwNumberError({ caller: 'calcScaleToFitUI in UtilGanttScale', numberList: [['stepDivision', scale.stepDivision], ['totalSteps', totalSteps]] })

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


/*
 * fine grained range and scale marks (zoom related)
 */
export function totalDivisionCount({ stepDiff, stepDivision }) {
  return stepDiff * stepDivision
}

export function calcFineGrainedStepDivision({ firstStep, lastStep, stepDivision }) {
  throwNumberError({ caller: 'calcFineGrainedStepDivision in UtilGanttScale', numberList: [['stepDivision', stepDivision]] })
  const stepDiff = calcStepDiff({ firstStep, lastStep })
  const totalDivisions = totalDivisionCount({ stepDiff, stepDivision })
  throwError({ check: totalDivisions <= 100, i18nKey: 'calcFineGrainedStepDivision' })
  if (totalDivisions > 50) {
    return 10
  }
  if (totalDivisions > 20) {
    return 5
  }
  if (totalDivisions > 10) {
    return 2
  }
  return 1
}


export function calcRegularRange({ firstStep, lastStep, stepDivision }) {
  const divisionCountFromStart = firstStep * stepDivision
  const divisionMarkGranularity = calcFineGrainedStepDivision({ firstStep, lastStep, stepDivision })
  const stepDiff = calcStepDiff({ firstStep, lastStep })
  const totalDivisions = totalDivisionCount({ stepDiff, stepDivision })
  const minDivision = firstStep * stepDivision
  const maxDivision = lastStep * stepDivision
  const firstMark = minDivision - minDivision % divisionMarkGranularity + divisionMarkGranularity
  const results = [firstMark]
  let nextMark = firstMark
  while (nextMark <= maxDivision) {
    nextMark = nextMark + divisionMarkGranularity
    if (nextMark <+ maxDivision) {
      results.push(nextMark)
    }
  }
  console.log(results, 'results')
  return results
}


/*
 * General
 */
export function calcStepDiff({ firstStep, lastStep }) {
  throwNumberError({ caller: 'calcStepDiff in UtilGanttScale', numberList: [['lastStep', lastStep], ['firstStep', firstStep]] })
  const greaterThanCheck = lastStep >= firstStep
  throwError({ check: greaterThanCheck, i18nKey: 'calcStepDiffGoodDiff' })

  return (lastStep + 1) - firstStep
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


/*
 * Position scale elements
 */
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

