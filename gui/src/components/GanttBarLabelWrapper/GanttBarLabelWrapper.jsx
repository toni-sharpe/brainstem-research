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
  return (
    <div
      className='gantt-bar-label-wrapper column-layout'
      style={{ left: `${calcLeft({ scale, val: labelListPosition })}%` }}
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
