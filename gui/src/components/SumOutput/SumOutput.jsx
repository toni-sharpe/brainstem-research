import PropTypes from 'prop-types'

import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'
import { CROSSOVER_TO_SERIOUS } from 'util/Constant/BaseConstantList'

import './SumOutput.scss'

function writeClassName({ crossover, fullSum, v }) {
  const crossoverToClassName = v >= crossover ? 'high' : 'low'
  return fullSum
    ? 'sum-output__total'
    : `sum-output__${crossoverToClassName}-tot`
}

function SumOutput({ crossover, fullSum, k, v, }) {
  if (!v) {
    return null
  }

  const className = writeClassName({ crossover, fullSum, v })

  return (
    <span className={className} key={k}>
      {v.toFixed(0)}
    </span>
  )
}

SumOutput.defaultProps = {
  crossover: CROSSOVER_TO_SERIOUS,
  fullSum: false,
}

SumOutput.propTypes = {
  crossover: PropTypes.number,
  fullSum: PropTypes.bool,
  k: NumberOrStringPropType,
  v: PropTypes.number,
}

export default SumOutput
