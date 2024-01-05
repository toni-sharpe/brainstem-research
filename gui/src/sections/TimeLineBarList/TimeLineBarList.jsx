import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'
import { toPairs } from 'ramda'

import { SCALE_DEFAULT, STAT_BAR_DETAIL_LIST } from 'util/Constant/BaseConstantList'
import TimeLineBarListScalePropType from 'prop-types/TimeLineBarListScale.prop-type'
import TimeLineBar from 'sections/TimeLineBar/TimeLineBar'
import TimeLineBarWrapper from 'components/TimeLineBarWrapper/TimeLineBarWrapper'

import './TimeLineBarList.scss'

export const statisticBarListi18nBase = 'TimeLineBarList'
const i18nBase = statisticBarListi18nBase

function TimeLineBarList({
  maxOfAll,
  scale,
  timeLineBarDetailList,
  statDataList
}) {
  return (
    <ol className='time-line-bar-list'>
      {statDataList.map((statData, i) => {
        const [k, bData] = toPairs(statData)[0]

        const dataBarWrapperProps = {
          k,
          key: k,
          i,
        }

        const { mda, mean, median, std, quantile } = bData
        const minStd = (mean - std).toFixed(1)
        const maxStd = ((mean - std) + std * 2).toFixed(1)
        const minMda = (median - mda).toFixed(1)
        const maxMda = ((median - mda) + mda * 2).toFixed(1)

        const barData = { ...bData, minStd, maxStd, minMda, maxMda }
        const labelList = {
          mda: i18next.t(`${i18nBase}.mda`),
          mean: i18next.t(`${i18nBase}.mean`),
          median: i18next.t(`${i18nBase}.median`),
          quantile: i18next.t(`${i18nBase}.quantile`),
          range: i18next.t(`${i18nBase}.range`),
          skewness: i18next.t(`${i18nBase}.skewness`),
          stddev: i18next.t(`${i18nBase}.stddev`),
        }
        const valueList = [
          `${labelList.mda}: ${mda.toFixed(1)}`,
          [ quantile?.length
            ? `${labelList.quantile}: ${quantile.map((q, i) => `${q}`).join(', ')}`
            : 'umm?' ],
        ]
        const ariaLabel = i18next.t(`${i18nBase}.ariaLabel`, { valueList: valueList.join('\n') })

        const dataBarProps = {
          ariaLabel,
          barData,
          barPosition: (i + 1),
          labelList,
          maxOfAll,
          scale,
          timeLineBarDetailList,
          valueList,
        }

        return (
          <TimeLineBarWrapper {...dataBarWrapperProps}>
            <TimeLineBar {...dataBarProps} />
          </TimeLineBarWrapper>
        )
      })}
    </ol>
  )
}

TimeLineBarList.defaultProps = {
  maxOfAll: null,
  scale: SCALE_DEFAULT,
  timeLineBarDetailList: STAT_BAR_DETAIL_LIST,
}

TimeLineBarList.propTypes = {
  maxOfAll: PropTypes.number,
  scale: TimeLineBarListScalePropType,
  // statDataList
}

export default TimeLineBarList
