import React from 'react'
import PropTypes from 'prop-types'

function SvgPolygon({
  fill,
  fillOpacity,
  points,
  stroke,
  strokeOpacity,
  strokeWidth,
}) {
  return (
    <polygon
      points={points}
      fill={fill}
      fillOpacity={fillOpacity}
      stroke={stroke}
      strokeOpacity={strokeOpacity}
      strokeWidth={strokeWidth}
    />
  )
}

SvgPolygon.defaultProps = {
  fill: '#aaa',
  fillOpacity: 1,
  stroke: '#555',
  strokeOpacity: 1,
  strokeWidth: 1,
}

export default SvgPolygon
