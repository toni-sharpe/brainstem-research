import React from 'react'
import PropTypes from 'prop-types'

function SvgText({
  extraClass,
  text,
  x,
  y,
}) {
  return (
    <text
      className={extraClass}
      x={x}
      y={y}
      dominantBaseline='middle'
      textAnchor='middle'
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
