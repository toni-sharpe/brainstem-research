import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'
import { fromPairs, pluck } from 'ramda'
import { sampleCorrelation, sampleCovariance } from 'simple-statistics'

import ErrorOutput from 'components/ErrorOutput/ErrorOutput'
import TimeLineBarListScale from 'sections/TimeLineBarListScale/TimeLineBarListScale'
import ScatterPointListPropType from 'prop-types/ScatterPointList.prop-type'
import StatBarDetailListPropType from 'prop-types/TimeLineBarDetailList.prop-type'
import TimeLineBarList from 'sections/TimeLineBarList/TimeLineBarList'
import { CURRENT_FILTER_LIST } from 'util/Constant/FilterConstantList'
import { FULL_DATA_POINT_LIST } from 'util/Constant/FullDataPointList'
import { calcScale, mapToTimeLineBars } from 'util/UtilTimeLineBarList/UtilTimeLineBarList'
import { STAT_BAR_DETAIL_LIST } from 'util/Constant/BaseConstantList'

import './ScatterStatisticOutput.scss'

const i18nBase = 'ScatterStatisticOutput'

function makeStatisticOutput({ i18nKey, statisticFn, x, y }) {
  return (
    <li className='scatter-statistic-output__key-vals row-layout space-children'>
      <span className='scatter-statistic-output__key'>
        {i18next.t(`${i18nBase}.${statisticFn.name}`)}:
      </span>
      <span className='scatter-statistic-output__value'>
        {statisticFn(x, y).toFixed(2)}
      </span>
    </li>
  )
}

function ScatterStatisticOutput({
  pointList,
  showBars,
  setTimeLineBarDetailList,
  timeLineBarDetailList,
  xKey,
  yKey
}) {
  let x = []
  let y = []
  let xStatList = []
  let yStatList = []

  if (pointList && pointList.length) {
    x = pluck('x', pointList)
    y = pluck('y', pointList)
  }

  xStatList = mapToTimeLineBars({
    data: [xKey, { _: '_', tone: fromPairs(FULL_DATA_POINT_LIST)[xKey].tone }],
    i18nBase: 'CommonClinicalResponses'
  })(x)

  yStatList = mapToTimeLineBars({
    data: [yKey, { _: '_', tone: fromPairs(FULL_DATA_POINT_LIST)[yKey].tone }],
    i18nBase: 'CommonClinicalResponses'
  })(y)

  const { scale } = calcScale({ statDataList: [xStatList, yStatList] })

  return x?.length > 1 && y?.length > 1
    ? (
      <ul
        aria-label={i18next.t(`${i18nBase}.label`)}
        className='column-layout space-children--column'
      >
        {makeStatisticOutput({ statisticFn: sampleCorrelation, x, y })}
        {makeStatisticOutput({ statisticFn: sampleCovariance, x, y })}
        { showBars && (
          <li>
            <div className='scatter-statistic-output__time-line-bar-list-scale'>
              <TimeLineBarListScale
                ariaLabel='scatter statistic output'
                lineHeight='210px'
                scale={scale}
                setTimeLineBarDetailList={setTimeLineBarDetailList}
                timeLineBarDetailList={timeLineBarDetailList}
              />
            </div>
            <div className='scatter-statistic-output__time-line-bar-list'>
              <TimeLineBarList
                currentFilterList={CURRENT_FILTER_LIST}
                scale={scale}
                statDataList={[xStatList, yStatList]}
                timeLineBarDetailList={timeLineBarDetailList}
              />
            </div>
          </li>
        ) }
      </ul>
    )
    : (
      <span>
        <ErrorOutput message={i18next.t(`${i18nBase}.notEnoughData`)} />
      </span>
    )
}

ScatterStatisticOutput.defaultProps = {
  pointList: [],
  timeLineBarDetailList: STAT_BAR_DETAIL_LIST,
  showBars: true,
}

ScatterStatisticOutput.propTypes = {
  pointList: ScatterPointListPropType,
  setTimeLineBarDetailList: PropTypes.func,
  showBars: PropTypes.bool,
  timeLineBarDetailList: StatBarDetailListPropType,
  xKey: PropTypes.string.isRequired,
  yKey: PropTypes.string.isRequired,
}

export default ScatterStatisticOutput
