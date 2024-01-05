import React from 'react'
import PropTypes from 'prop-types'

import TimeLineBarListScalePropType from 'prop-types/TimeLineBarListScale.prop-type'
import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'
import { calcLeft } from 'util/UtilTimeLineBarList/UtilTimeLineBar'

import './TimeLineBarLabelWrapper.scss'

function TimeLineBarLabelWrapper({
  children,
  labelListPos,
  scale,
}) {
  return (
    <div
      className='time-line-bar-label-wrapper column-layout'
      style={calcLeft({ scale, val: labelListPos })}
    >
      {children}
    </div>
  )
}

TimeLineBarLabelWrapper.propTypes = {
  children: PropTypes.node,
  labelListPos: NumberOrStringPropType.isRequired,
  scale: TimeLineBarListScalePropType.isRequired
}

export default TimeLineBarLabelWrapper
