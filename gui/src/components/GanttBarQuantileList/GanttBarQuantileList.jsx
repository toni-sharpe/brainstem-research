import React from 'react'
import PropTypes from 'prop-types'

import QuantileListNumberLabel from 'components/QuantileListNumberLabel/QuantileListNumberLabel'
import { GANTT_SCALE_DEFAULT } from 'util/Constant/BaseConstantList'
import GanttBarQuantilePropType from 'prop-types/GanttBarQuantile.prop-type'
import GanttScalePropType from 'prop-types/GanttScale.prop-type'
import { calcLineFattener } from 'util/UtilGanttBarList/UtilGanttBar'
import { calcQuantileListPosition } from 'util/UtilQuantile/UtilQuantile'

import './GanttBarQuantileList.scss'

function GanttBarQuantileList({
  count,
  fatLines,
  numberShown,
  quantile,
  scale,
}) {
  const quantileList = calcQuantileListPosition({
    count,
    quantile,
    scale,
  })

  if (!quantileList) {
    return null
  }

  const lineFattener = calcLineFattener({ fatLines })

  return (
    <>
      { quantileList.map((quantileElem, i) => {

        const { left } = quantileElem

        return (
          <li
            key={`qu-${i}`}
            className={'gantt-bar-quantile-list__line'}
            style={{
              left: `${left}%`,
              ...lineFattener,
            }}
          >
            { numberShown && (<QuantileListNumberLabel {...quantileElem} />) }
          </li>
        )
      }) }
    </>
  )
}

GanttBarQuantileList.defaultProps = {
  fatLines: false,
  numberShown: true,
  scale: GANTT_SCALE_DEFAULT,
}

GanttBarQuantileList.propTypes = {
  count: PropTypes.number,
  fatLines: PropTypes.bool,
  numberShown: PropTypes.bool,
  quantile: GanttBarQuantilePropType,
  scale: GanttScalePropType,
}

export default GanttBarQuantileList
