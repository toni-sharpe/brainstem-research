import React from 'react'

import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'

import './XAxisLineNumber.scss'

function XAxisLineNumber({ lineNumber, top }) {
  return (
    <span
      className='x-axis-line-number'
      style ={{ top }}
    >
      <span className='x-axis-line-number__num'>{lineNumber.toFixed(0)}</span>
    </span>
  )
}

XAxisLineNumber.propTypes = {
  lineNumber: NumberOrStringPropType,
  top: NumberOrStringPropType,
}

export default XAxisLineNumber
