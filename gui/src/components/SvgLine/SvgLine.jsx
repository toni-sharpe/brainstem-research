import React from 'react'
import PropTypes from 'prop-types'

import { numberPrecision } from 'util/Util/Util'

function SvgLine({
  stroke,
  x,
  y,
}) {
  return (
    <line
      key={`${x[0]}-${y[0]}`}
      stroke={stroke}
      x1={numberPrecision({ n: x[0] })}
      x2={numberPrecision({ n: y[0] })}
      y1={numberPrecision({ n: x[1] })}
      y2={numberPrecision({ n: y[1] })}
    />
  )
}

SvgLine.propTypes = {
  stroke: PropTypes.string,
  x: PropTypes.arrayOf(PropTypes.number),
  y: PropTypes.arrayOf(PropTypes.number),
}

export default SvgLine
