import * as ramda from 'ramda'
import PropTypes from 'prop-types'
import React from 'react'
import i18next from 'util/i18next/i18next'

import GanttScalePropType from 'prop-types/GanttScale.prop-type'
import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'
import { GANTT_SCALE_DEFAULT } from 'util/Constant/BaseConstantList'
import { calcScaleToFitUI } from 'util/UtilGanttBarList/UtilGanttScale'

import './GanttScale.scss'

function GanttScale({
  ariaLabel,
  ganttHeight,
  scale,
  style,
}) {
  const { firstStep, lastStep, stepDivision } = calcScaleToFitUI({ scale })

  return (
    <ol
      aria-label={i18next.t('GanttScale.scaleFor', { ariaLabel })}
      className='gantt-scale'
      style={style}
    >
      { ramda.range(firstStep, lastStep + 1).map(step => {
        const isLastStep = step === lastStep
        const scalePerc = (step / (lastStep - firstStep) * 100).toPrecision(5)
        const positionScaleStep = isLastStep
          ? { right: `1px` }
          : { left: `calc(${scalePerc}% - ${100 / (lastStep - firstStep) * firstStep}% + 1px)`}
        const positionScaleLine = { left: `calc(${scalePerc}%  - ${100 / (lastStep - firstStep) * firstStep}% - 1px)`, height: `${ganttHeight}px` }

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
  style: PropTypes.object,
}

export default GanttScale;
