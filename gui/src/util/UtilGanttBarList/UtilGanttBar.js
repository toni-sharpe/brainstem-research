import { GANTT_SCALE_DEFAULT } from 'util/Constant/BaseConstantList'
import { isNotNil } from 'ramda'
import { throwError } from 'util/UtilError/UtilError'


export function calcPercentage({
  scale = GANTT_SCALE_DEFAULT,
  val
}) {
  throwError({ check: isNotNil(val), i18nKey: 'calcPercentage' })
  const { firstStep, lastStep, stepDivision, totalSteps } = scale
  const scaleFactor = totalSteps / (lastStep - firstStep)
  return Number(((val / stepDivision) / totalSteps * 100 * scaleFactor).toPrecision(5))
}


export function calcLeft({
  scale = GANTT_SCALE_DEFAULT,
  val,
  fattenerOffset = 0
}) {
  throwError({ check: isNotNil(val), i18nKey: 'calcLeft' })
  const zoomOffset = scale.firstStep * scale.stepDivision
  const left = calcPercentage({ scale, val: val - fattenerOffset - zoomOffset })
  return val > 0
    ? left
    : null
}


export function calcWidth({
  min,
  max,
  scale = GANTT_SCALE_DEFAULT,
}) {
  throwError({ check: isNotNil(min) && isNotNil(max), i18nKey: 'calcWidth' })
  const width = calcPercentage({ scale, val: (max - min) })
  return {
    left: `${calcLeft({ scale, val: min })}%`,
    width: `${width}%`,
  }
}


export function calcLineFattener({
  fatLines = false,
}) {
  if (!fatLines) {
    return null
  }

  return { boxShadow: '0 0 0 1px #555' }
}
