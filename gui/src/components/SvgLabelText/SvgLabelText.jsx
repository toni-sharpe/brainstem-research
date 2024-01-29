import React from 'react'
import PropTypes from 'prop-types'

import { numberPrecision } from 'util/Util/Util'

function SvgLabelText({
  extraClass,
  k,
  label,
  x,
  y,
}) {
  return (
    <text
      key={k}
      className={extraClass}
      dominant-baseline='middle'
      text-anchor='middle'
      x={numberPrecision({ n: x })}
      y={numberPrecision({ n: y })}
    >
      {label}
    </text>
  )
}

SvgLabelText.propTypes = {
  label: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
}

export default SvgLabelText
