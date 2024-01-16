import React from 'react'
import PropTypes from 'prop-types'

import TimeLineBarListScalePropType from 'prop-types/TimeLineBarListScale.prop-type'
import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'
import { calcLeft } from 'util/UtilTimeLineBarList/UtilTimeLineBar'

import './TimeLineBarLabelWrapper.scss'

function TimeLineBarLabelWrapper({
  children,
  labelListPosition,
  scale,
}) {
  return (
    <div
      className='time-line-bar-label-wrapper column-layout'
      style={{ left: `${calcLeft({ scale, val: labelListPosition })}%` }}
    >
      {children}
    </div>
  )
}

TimeLineBarLabelWrapper.propTypes = {
  children: PropTypes.node,
  labelListPosition: NumberOrStringPropType.isRequired,
  scale: TimeLineBarListScalePropType.isRequired
}

export default TimeLineBarLabelWrapper
