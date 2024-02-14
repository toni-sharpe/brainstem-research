import React from 'react'
import PropTypes from 'prop-types'

function SvgPath({
  children,
  fill,
  fillOpacity,
  d,
  stroke,
  strokeOpacity,
  strokeWidth,
}) {
  return (
    <path
      className='path'
      d={d}
      fill={fill}
      fillOpacity={fillOpacity}
      stroke={stroke}
      strokeOpacity={strokeOpacity}
      strokeWidth={strokeWidth}
    >
      {children}
    </path>
  )
}

SvgPath.defaultProps = {
  fill: '#aaa',
  fillOpacity: 1,
  stroke: '#555',
  strokeOpacity: 1,
  strokeWidth: 1,
}

export default SvgPath
