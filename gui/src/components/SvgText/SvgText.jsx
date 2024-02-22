import React from 'react'

function SvgText({ text, x, y}) {
  return (
    <text
      x={x}
      y={x}
      dominantBaseline='middle'
    >
      {text}
    </text>
  )
}

export default SvgText
