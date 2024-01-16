import React from 'react'
import PropTypes from 'prop-types'

import QuantileListNumberLabel from 'components/QuantileListNumberLabel/QuantileListNumberLabel'
import { SCALE_DEFAULT } from 'util/Constant/BaseConstantList'
import TimeLineBarQuantilePropType from 'prop-types/TimeLineBarQuantile.prop-type'
import TimeLineBarListScalePropType from 'prop-types/TimeLineBarListScale.prop-type'
import { calcLineFattener } from 'util/UtilTimeLineBarList/UtilTimeLineBar'
import { calcQuantileListPosition } from 'util/UtilTimeLineBarList/UtilQuantile'

import './TimeLineBarQuantileList.scss'

function TimeLineBarQuantileList({
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
            className={'time-line-bar-quantile-list__line'}
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

TimeLineBarQuantileList.defaultProps = {
  fatLines: false,
  numberShown: true,
  scale: SCALE_DEFAULT,
}

TimeLineBarQuantileList.propTypes = {
  count: PropTypes.number,
  fatLines: PropTypes.bool,
  numberShown: PropTypes.bool,
  quantile: TimeLineBarQuantilePropType,
  scale: TimeLineBarListScalePropType,
}

export default TimeLineBarQuantileList
