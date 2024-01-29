import React from 'react'
import PropTypes from 'prop-types'

import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'
import { numberPrecision } from 'util/Util/Util'

function SvgLabelText({
  extraClass,
  label,
  x,
  y,
}) {
  return (
    <text
      className={extraClass}
      dominantBaseline='middle'
      textAnchor='middle'
      x={numberPrecision({ n: x })}
      y={numberPrecision({ n: y })}
    >
      {label}
    </text>
  )
}

SvgLabelText.propTypes = {
  label: NumberOrStringPropType,
  x: PropTypes.number,
  y: PropTypes.number,
}

export default SvgLabelText
