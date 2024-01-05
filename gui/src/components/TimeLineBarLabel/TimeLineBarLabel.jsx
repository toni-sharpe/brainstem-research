import React from 'react'
import PropTypes from 'prop-types'

import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'

import './TimeLineBarLabel.scss'

function TimeLineBarLabel({ label, value, width }) {
  return (
    <dl className='time-line-bar-label row-layout space-children--with-border'>
      <dt
        className='time-line-bar-label__key'
        style={{ width }}
      >
        {label}
      </dt>
      <dd>
        {value}
      </dd>
    </dl>
  )
}

TimeLineBarLabel.defaultProps = {
  width: 150,
}

TimeLineBarLabel.propTypes = {
  label: PropTypes.string.isRequired,
  value: NumberOrStringPropType.isRequired,
  width: NumberOrStringPropType,
}

export default TimeLineBarLabel
