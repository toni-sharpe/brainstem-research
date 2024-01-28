import React from 'react'
import PropTypes from 'prop-types'

function SvgCircle({
  c,
  circleRadius,
  fillRadius,
  k,
  stroke,
}) {
  return (
    <circle
      cx={c.x}
      cy={c.y}
      fillOpacity={fillRadius || 0.0}
      key={k}
      r={circleRadius}
      stroke={stroke}
    />
  )
}

SvgCircle.propTypes = {
  c: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
  circleRadius: PropTypes.number,
  fillRadius: PropTypes.number,
  k: PropTypes.string,
  stroke: PropTypes.string,
}

export default SvgCircle
