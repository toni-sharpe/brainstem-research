import React from 'react'
import PropTypes from 'prop-types'

import KeyPropType from 'prop-types/Key.prop-type'

import './GanttBarWrapper.scss'
import { BAR_HEIGHT, BAR_SPACER } from 'util/Constant/BaseConstantList'

function GanttBarWrapper({
  barHeight,
  barSpacer,
  children,
  k,
  i,
  offset,
}) {
  const fullHeight = BAR_HEIGHT + BAR_SPACER

  return (
    <li
      className='gantt-bar-wrapper'
      key={k}
      style={{
        top: `${i * (fullHeight) + offset}px`,
        height: `${fullHeight - 1}px`
      }}
    >
      {children}
    </li>
  )
}

GanttBarWrapper.defaultProps = {
  barHeight: BAR_HEIGHT,
  barSpacer: BAR_SPACER,
  i: 1,
  offset: 35,
}

GanttBarWrapper.propTypes = {
  barHeight: PropTypes.number,
  barSpacer: PropTypes.number,
  children: PropTypes.node,
  k: KeyPropType,
  i: PropTypes.number,
  offset: PropTypes.number,
}

export default GanttBarWrapper
