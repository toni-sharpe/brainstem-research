import React from 'react'
import PropTypes from 'prop-types'

function SvgCircle({
  c,
  extraClass,
  fill,
  fillOpacity,
  r,
  stroke,
  strokeOpacity,
}) {
  return (
    <circle
      className={extraClass}
      cx={c.x}
      cy={c.y}
      fill={fill}
      fillOpacity={fillOpacity}
      r={r}
      stroke={stroke}
      strokeOpacity={strokeOpacity}
    />
  )
}

SvgCircle.defaultProps = {
  fillOpacity: 1.0,
  stroke: undefined,
  strokeOpacity: 1.0,
}

SvgCircle.propTypes = {
  c: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
  r: PropTypes.number,
  fillOpacity: PropTypes.number,
  stroke: PropTypes.string,
}

export default SvgCircle
