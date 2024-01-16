import React from 'react'

import AlignPropType from 'prop-types/Align.prop-type'
import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'

import './XAxisLineNumber.scss'

function XAxisLineNumber({
  align,
  lineNumber,
  top,
}) {
  return (
    <span
      className={`x-axis-line-number ${align}`}
      style ={{ top }}
    >
      <span className='x-axis-line-number__num'>{lineNumber.toFixed(0)}</span>
    </span>
  )
}

XAxisLineNumber.defaultProps = {
  align: 'left',
}

XAxisLineNumber.propTypes = {
  align: AlignPropType,
  lineNumber: NumberOrStringPropType,
  top: NumberOrStringPropType,
}

export default XAxisLineNumber
