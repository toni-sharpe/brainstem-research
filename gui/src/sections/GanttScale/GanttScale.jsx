import * as ramda from 'ramda'
import PropTypes from 'prop-types'
import React from 'react'
import i18next from 'util/i18next/i18next'

import GanttScalePropType from 'prop-types/GanttScale.prop-type'
import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'
import { GANTT_SCALE_DEFAULT } from 'util/Constant/BaseConstantList'
import {
  calcLeftScalePerc,
  calcScaleToFitUI,
  calcStepDiff,
  calcScaleLinePosition,
  calcScaleStepPosition,
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
      { ramda.range(firstStep, lastStep + 1).map(step => {
        const stepLeftPerc = calcLeftScalePerc({
          firstStep,
          step,
          stepDiff,
        })

        const isLastStep = step === lastStep

        const positionScaleStep = calcScaleStepPosition({ isLastStep, stepLeftPerc })

        const positionScaleLine = calcScaleLinePosition({ ganttHeight, isLastStep, stepLeftPerc })

        return (
          <li key={step} >
            <span
              className='gantt-scale__label'
              key='step'
              style={positionScaleStep}
            >
              {step * stepDivision}
            </span>
            <div
              className={`gantt-scale__line`}
              key='line'
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
