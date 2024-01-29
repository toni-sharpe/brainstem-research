import React from 'react'
import PropTypes from 'prop-types'

function SvgCircle({
  c,
  circleRadius,
  extraClass,
  fill,
  fillOpacity,
  stroke,
}) {
  return (
    <circle
      className={extraClass}
      cx={c.x}
      cy={c.y}
      fill={fill}
      fillOpacity={fillOpacity || 0.0}
      r={circleRadius}
      stroke={stroke}
    />
  )
}

SvgCircle.propTypes = {
  c: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
  circleRadius: PropTypes.number,
  fillOpacity: PropTypes.number,
  stroke: PropTypes.string,
}

export default SvgCircle
