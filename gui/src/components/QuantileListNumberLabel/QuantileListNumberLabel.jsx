import React from 'react'
import PropTypes from 'prop-types'

import './QuantileListNumberLabel.scss'

function QuantileListNumberLabel({
  leftPos,
  numberTop,
  val,
}) {
  return (
    <span
      className='quantile-list-number'
      style={{
        ...leftPos,
        top: numberTop,
      }}
    >
      {val}
    </span>
  )
}

QuantileListNumberLabel.propTypes = {
  leftPos: PropTypes.shape({ left: PropTypes.string }),
  numberTop: PropTypes.number,
  val: PropTypes.number,
}

export default QuantileListNumberLabel
