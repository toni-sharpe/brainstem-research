import * as ramda from 'ramda'
import PropTypes from 'prop-types'
import React from 'react'
import i18next from 'util/i18next/i18next'

import GanttScalePropType from 'prop-types/GanttScale.prop-type'
import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'
import GanttToggleListPropType from 'prop-types/GanttToggleList.prop-type'
import GanttToggleList from 'sections/GanttToggleList/GanttToggleList'
import { SCALE_DEFAULT, GANTT_TOGGLE_LIST } from 'util/Constant/BaseConstantList'
import { calcScaleToFitUI } from 'util/UtilGanttBarList/UtilGanttScale'

import './GanttScale.scss'

function GanttScale({
  ariaLabel,
  ganttToggleList,
  ganttToggleListIsActive,
  ganttHeight,
  scale,
  setGanttTogglelList,
  showBarControls,
  style,
}) {
  const { stepDivision, totalSteps } = calcScaleToFitUI({ scale })

  const totalDivisions = totalSteps * stepDivision

  return (
    <ol
      aria-label={i18next.t('GanttScale.scaleFor', { ariaLabel })}
      className='gantt-scale'
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
              className='gantt-scale__label'
              key='step'
              style={positionScaleStep}
            >
              {step}
            </span>
            <span
              className='gantt-scale__label gantt-scale__sub-label'
              key='stepDivision'
              style={positionScaleSubStep}
            >
              {stepDivision}
            </span>
            <div
              className={`gantt-scale__line`}
              key='line'
              style={positionScaleLine}
            />
          </li>
        )
      })}
      <li className='gantt-scale__bar-toggle-interface'>
        <GanttToggleList
          setGanttTogglelList={setGanttTogglelList}
          ganttToggleList={ganttToggleList}
        />
      </li>
    </ol>
  )
}
      // <li key='all-steps'>
      //   <span
      //     className='gantt-scale__label gantt-scale__total-label'
      //   >
      //     {totalDivisions}
      //   </span>
      // </li>

GanttScale.defaultProps = {
  scale: SCALE_DEFAULT,
  showBarControls: true,
  ganttHeight: '149vh',
  ganttToggleList: GANTT_TOGGLE_LIST,
  ganttToggleListIsActive: true,
}

GanttScale.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  ganttHeight: NumberOrStringPropType,
  ganttToggleList: GanttToggleListPropType,
  ganttToggleListIsActive: PropTypes.bool,
  scale: GanttScalePropType,
  setGanttToggleList: PropTypes.func,
  showBarControls: PropTypes.bool,
  style: PropTypes.object,
}

export default GanttScale;
