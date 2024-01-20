import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'
import { toPairs } from 'ramda'

import { PRECISION, GANTT_SCALE_DEFAULT, GANTT_TOGGLE_LIST } from 'util/Constant/BaseConstantList'
import GanttScalePropType from 'prop-types/GanttScale.prop-type'
import GanttBar from 'sections/GanttBar/GanttBar'
import GanttBarWrapper from 'components/GanttBarWrapper/GanttBarWrapper'

import './GanttBarList.scss'

export const statisticBarListi18nBase = 'GanttBarList'
const i18nBase = statisticBarListi18nBase

function GanttBarList({
  maxOfAll,
  scale,
  ganttToggleList,
  statDataList
}) {
  return (
    <ol className='gantt-bar-list'>
      {statDataList.map((statData, i) => {
        const [k, bData] = toPairs(statData)[0]

        const dataBarWrapperProps = {
          k,
          key: k,
          i,
        }

        const { mda, mean, median, std, quantile } = bData

        const minStd = Number((mean - std).toPrecision(PRECISION))
        const maxStd = Number(((mean - std) + std * 2).toPrecision(PRECISION))
        const minMda = Number((median - mda).toPrecision(PRECISION))
        const maxMda = Number(((median - mda) + mda * 2).toPrecision(PRECISION))

        const barData = { ...bData, minStd, maxStd, minMda, maxMda }

        const dataBarProps = {
          barData,
          barPosition: (i + 1),
          maxOfAll,
          scale,
          ganttToggleList,
        }
        return (
          <GanttBarWrapper {...dataBarWrapperProps}>
            <GanttBar {...dataBarProps} />
          </GanttBarWrapper>
        )
      })}
    </ol>
  )
}

GanttBarList.defaultProps = {
  maxOfAll: null,
  scale: GANTT_SCALE_DEFAULT,
  ganttToggleList: GANTT_TOGGLE_LIST,
}

GanttBarList.propTypes = {
  maxOfAll: PropTypes.number,
  scale: GanttScalePropType,
  // statDataList
}

export default GanttBarList
