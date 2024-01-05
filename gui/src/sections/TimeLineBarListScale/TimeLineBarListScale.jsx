import * as ramda from 'ramda'
import PropTypes from 'prop-types'
import React from 'react'
import i18next from 'util/i18next/i18next'

import TimeLineBarListScalePropType from 'prop-types/TimeLineBarListScale.prop-type'
import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'
import StatBarDetailListPropType from 'prop-types/TimeLineBarDetailList.prop-type'
import TimeLineBarDetailToggleList from 'sections/TimeLineBarDetailToggleList/TimeLineBarDetailToggleList'
import { SCALE_DEFAULT, STAT_BAR_DETAIL_LIST } from 'util/Constant/BaseConstantList'
import { calcScaleToFitUI } from 'util/UtilTimeLineBarList/UtilTimeLineBarListScale'

import './TimeLineBarListScale.scss'

function TimeLineBarListScale({
  ariaLabel,
  lineHeight,
  scale,
  showBarControls,
  style,
  setTimeLineBarDetailList,
  timeLineBarDetailList,
  timeLineBarDetailListIsActive,
}) {
  const { stepDivision, totalSteps } = calcScaleToFitUI({ scale })

  const totalDivisions = totalSteps * stepDivision

  return (
    <ol
      aria-label={i18next.t('TimeLineBarListScale.scaleFor', { ariaLabel })}
      className='time-line-bar-list-scale'
      style={style}
    >
      { ramda.range(0, totalSteps + 1).map(step => {
        const lastStep = step === totalSteps
        const scalePerc = step / totalSteps * 100
        const positionScaleStep = { left: `calc(${scalePerc}% ${lastStep ? '- 18px' : '- 1px'})`}
        const positionScaleLine = { left: `calc(${scalePerc}% - 1px)`, height: lineHeight || '149vh' }
        const positionScaleSubStep = { left: `calc(${scalePerc}% ${lastStep ? '- 55px' : '+ 30px'})`}

        return (
          <li key={step} >
            <span
              className='time-line-bar-list-scale__label'
              key='step'
              style={positionScaleStep}
            >
              {step}
            </span>
            <span
              className='time-line-bar-list-scale__label time-line-bar-list-scale__sub-label'
              key='stepDivision'
              style={positionScaleSubStep}
            >
              {stepDivision}
            </span>
            <div
              className={`time-line-bar-list-scale__line`}
              key='line'
              style={positionScaleLine}
            />
          </li>
        )
      })}
      <li className='time-line-bar-list-scale__bar-toggle-interface'>
        <TimeLineBarDetailToggleList
          setTimeLineBarDetailList={setTimeLineBarDetailList}
          timeLineBarDetailList={timeLineBarDetailList}
        />
      </li>
      <li key='all-steps'>
        <span
          className='time-line-bar-list-scale__label time-line-bar-list-scale__total-label'
        >
          {totalDivisions}
        </span>
      </li>
    </ol>
  )
}

TimeLineBarListScale.defaultProps = {
  scale: SCALE_DEFAULT,
  showBarControls: true,
  timeLineBarDetailList: STAT_BAR_DETAIL_LIST,
  timeLineBarDetailListIsActive: true,
}

TimeLineBarListScale.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  lineHeight: NumberOrStringPropType,
  scale: TimeLineBarListScalePropType,
  setTimeLineBarDetailList: PropTypes.func,
  timeLineBarDetailList: StatBarDetailListPropType,
  showBarControls: PropTypes.bool,
  timeLineBarDetailListIsActive: PropTypes.bool,
  style: PropTypes.object,
}

export default TimeLineBarListScale;
