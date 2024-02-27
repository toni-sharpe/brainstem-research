import React from 'react'
import PropTypes from 'prop-types'

function SvgText({
  extraClass,
  style,
  text,
  x,
  y,
}) {
  return (
    <text
      className={extraClass}
      dominantBaseline='middle'
      style={style}
      textAnchor='middle'
      x={x}
      y={y}
    >
      {text}
    </text>
  )
}

SvgText.propTypes = {
  extraClass: PropTypes.string,
  text: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
}

export default SvgText
