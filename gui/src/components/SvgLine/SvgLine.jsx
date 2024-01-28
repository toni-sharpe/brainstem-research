import React from 'react'
import PropTypes from 'prop-types'

function SvgLine({
  stroke,
  x,
  y,
}) {
  return (
    <line
      key={`${x[0]}-${y[0]}`}
      stroke={stroke}
      x1={x[0]}
      x2={y[0]}
      y1={x[1]}
      y2={y[1]}
    />
  )
}

SvgLine.propTypes = {
  stroke: PropTypes.string,
  x: PropTypes.arrayOf(PropTypes.number),
  y: PropTypes.arrayOf(PropTypes.number),
}

export default SvgLine
