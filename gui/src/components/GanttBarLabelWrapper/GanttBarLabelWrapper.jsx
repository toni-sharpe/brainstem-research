import React from 'react'
import PropTypes from 'prop-types'

import GanttScalePropType from 'prop-types/GanttScale.prop-type'
import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'
import { calcLeft } from 'util/UtilGanttBarList/UtilGanttBar'

import './GanttBarLabelWrapper.scss'

function GanttBarLabelWrapper({
  children,
  labelListPosition,
  scale,
}) {
  let left = calcLeft({ scale, val: labelListPosition })
  let style = { left: `${left}%` }
  if (left > 80) {
    style = { right: '0' }
  }
  if( left < 0) {
    style = { left: `100%` }
  }
  return (
    <div
      className='gantt-bar-label-wrapper column-layout'
      style={style}
    >
      {children}
    </div>
  )
}

GanttBarLabelWrapper.propTypes = {
  children: PropTypes.node,
  labelListPosition: NumberOrStringPropType.isRequired,
  scale: GanttScalePropType.isRequired
}

export default GanttBarLabelWrapper
