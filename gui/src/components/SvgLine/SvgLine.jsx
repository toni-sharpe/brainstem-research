import React from 'react'
import PropTypes from 'prop-types'

import { numberPrecision } from 'util/Util/Util'

function SvgLine({
  stroke,
  strokeOpacity,
  strokeWidth,
  x,
  y,
}) {
  return (
    <line
      stroke={stroke}
      strokeOpacity={strokeOpacity}
      strokeWidth={strokeWidth}
      x1={numberPrecision({ n: x[0] })}
      x2={numberPrecision({ n: y[0] })}
      y1={numberPrecision({ n: x[1] })}
      y2={numberPrecision({ n: y[1] })}
    />
  )
}

SvgLine.defaultProps = {
  strokeOpacity: 1.0,
  strokeWidth: 1,
}

SvgLine.propTypes = {
  stroke: PropTypes.string,
  x: PropTypes.arrayOf(PropTypes.number),
  y: PropTypes.arrayOf(PropTypes.number),
}

export default SvgLine
