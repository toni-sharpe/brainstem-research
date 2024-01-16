import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'
import { fromPairs, pluck } from 'ramda'
import { sampleCorrelation, sampleCovariance } from 'simple-statistics'

import ErrorOutput from 'components/ErrorOutput/ErrorOutput'
import GanttScale from 'sections/GanttScale/GanttScale'
import ScatterPointListPropType from 'prop-types/ScatterPointList.prop-type'
import StatBarDetailListPropType from 'prop-types/GanttToggleList.prop-type'
import GanttBarList from 'sections/GanttBarList/GanttBarList'
import { CURRENT_FILTER_LIST } from 'util/Constant/FilterConstantList'
import { FULL_DATA_POINT_LIST } from 'util/Constant/FullDataPointList'
import { calcScale, mapToGanttBars } from 'util/UtilGanttBarList/UtilGanttBarList'
import { GANTT_TOGGLE_LIST } from 'util/Constant/BaseConstantList'

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
  setGanttToggleList,
  ganttToggleList,
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

  xStatList = mapToGanttBars({
    data: [xKey, { _: '_', tone: fromPairs(FULL_DATA_POINT_LIST)[xKey].tone }],
    i18nBase: 'CommonClinicalResponses'
  })(x)

  yStatList = mapToGanttBars({
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
              <GanttScale
                ariaLabel='scatter statistic output'
                lineHeight='210px'
                scale={scale}
                setGanttToggleList={setGanttToggleList}
                ganttToggleList={ganttToggleList}
              />
            </div>
            <div className='scatter-statistic-output__time-line-bar-list'>
              <GanttBarList
                currentFilterList={CURRENT_FILTER_LIST}
                scale={scale}
                statDataList={[xStatList, yStatList]}
                ganttToggleList={ganttToggleList}
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
  ganttToggleList: GANTT_TOGGLE_LIST,
  showBars: true,
}

ScatterStatisticOutput.propTypes = {
  pointList: ScatterPointListPropType,
  setGanttToggleList: PropTypes.func,
  showBars: PropTypes.bool,
  ganttToggleList: StatBarDetailListPropType,
  xKey: PropTypes.string.isRequired,
  yKey: PropTypes.string.isRequired,
}

export default ScatterStatisticOutput
