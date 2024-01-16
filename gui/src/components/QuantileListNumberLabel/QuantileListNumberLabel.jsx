import React from 'react'
import PropTypes from 'prop-types'

import './QuantileListNumberLabel.scss'

function QuantileListNumberLabel({
  left,
  numberTop,
  val,
}) {
  return (
    <span
      className='quantile-list-number'
      style={{
        left: `${left}%`,
        top: numberTop,
      }}
    >
      {val}
    </span>
  )
}

QuantileListNumberLabel.propTypes = {
  left: PropTypes.number,
  numberTop: PropTypes.number,
  val: PropTypes.number,
}

export default QuantileListNumberLabel
