import React from 'react'
import PropTypes from 'prop-types'

import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'

import './GanttBarLabel.scss'

function GanttBarLabel({ label, value, width }) {
  return (
    <dl className='gantt-bar-label row-layout space-children--with-border'>
      <dt
        className='gantt-bar-label__key'
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

GanttBarLabel.defaultProps = {
  width: 150,
}

GanttBarLabel.propTypes = {
  label: PropTypes.string.isRequired,
  value: NumberOrStringPropType.isRequired,
  width: NumberOrStringPropType,
}

export default GanttBarLabel
