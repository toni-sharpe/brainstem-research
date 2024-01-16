import { isNotNil } from 'ramda'
import { SCALE_DEFAULT } from 'util/Constant/BaseConstantList'
import { throwError } from 'util/Util/Util'


export function calcPercentage({
  scale = SCALE_DEFAULT,
  val
}) {
  throwError({ check: isNotNil(val), i18nKey: 'calcPercentage' })
  const { stepDivision, totalSteps } = scale
  return parseFloat(val / stepDivision) / totalSteps * 100
}


export function calcLeft({
  scale = SCALE_DEFAULT,
  val,
  fattenerOffset = 0
}) {
  throwError({ check: isNotNil(val), i18nKey: 'calcLeft' })
  const percentage = calcPercentage({ scale, val: val - fattenerOffset })
  return val > 0
    ? Number(percentage.toPrecision(5))
    : null
}


export function calcWidth({
  min,
  max,
  scale = SCALE_DEFAULT,
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
