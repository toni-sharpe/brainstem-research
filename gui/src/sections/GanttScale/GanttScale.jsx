import { range } from 'ramda'
import PropTypes from 'prop-types'
import React from 'react'
import i18next from 'util/i18next/i18next'

import GanttScalePropType from 'prop-types/GanttScale.prop-type'
import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'
import { GANTT_SCALE_DEFAULT } from 'util/Constant/BaseConstantList'
import {
  calcLeftScalePerc,
  calcSubScaleLineList  ,
  calcScaleLinePosition,
  calcScaleStepPosition,
  calcScaleToFitUI,
  calcStepDiff,
} from 'util/UtilGanttScale/UtilGanttScale'

import './GanttScale.scss'

function GanttScale({
  ariaLabel,
  ganttHeight,
  scale,
}) {
  const { firstStep, lastStep, stepDivision } = calcScaleToFitUI({ scale })
  const stepDiff = calcStepDiff({ firstStep, lastStep })

  return (
    <ol
      aria-label={i18next.t('GanttScale.scaleFor', { ariaLabel })}
      className='gantt-scale'
    >
      { range(firstStep, lastStep + 1).map(step => {
        const stepLeftPerc = calcLeftScalePerc({
          firstStep,
          step,
          stepDiff,
        })

        const isLastStep = step === lastStep
        const positionScaleStep = calcScaleStepPosition({ isLastStep, stepLeftPerc })
        const positionScaleLine = calcScaleLinePosition({ ganttHeight, isLastStep, stepLeftPerc })

        // Only called when we are zoomed in to three segments or less
        const subScaleLineList = stepDiff <= 3
          ? calcSubScaleLineList({
              firstStep,
              lastStep,
              stepDiff,
              stepDivision,
            })
          : null

        const scaleLineCount = step * stepDivision

        return (
          <li key={`${scaleLineCount}-scale`}>
            { subScaleLineList && subScaleLineList.map(({ perc, count }, i) => {
              return (
                <ol>
                  <li key={`${count}-${perc}-sub-scale`} >
                    <span
                      className='gantt-scale__sub-label'
                      key={`${count}-sub-scale-label`}
                      style={{ left: `${perc}%` }}
                    >
                      {count}
                    </span>
                    <div
                      className={`gantt-scale__sub-line`}
                      key={`${count}-sub-scale-line`}
                      style={{ height: `${ganttHeight}px`, left: `calc(${perc}% - 1px)` }}
                    />
                  </li>
                </ol>
              )}
            )}
            <span
              className='gantt-scale__label'
              key={`${scaleLineCount}-scale-label`}
              style={positionScaleStep}
            >
              {scaleLineCount}
            </span>
            <div
              className={`gantt-scale__line`}
              key={`${scaleLineCount}-scale=line`}
              style={positionScaleLine}
            />
          </li>
        )
      })}
    </ol>
  )
}

GanttScale.defaultProps = {
  scale: GANTT_SCALE_DEFAULT,
  ganttHeight: '149vh',
}

GanttScale.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  ganttHeight: NumberOrStringPropType,
  scale: GanttScalePropType,
}

export default GanttScale;
