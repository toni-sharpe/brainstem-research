import i18next from 'util/i18next/i18next'
import React from 'react'
import PropTypes from 'prop-types'

import { SCALE_DEFAULT, GANTT_TOGGLE_LIST } from 'util/Constant/BaseConstantList'
import GanttBarLabel from 'components/GanttBarLabel/GanttBarLabel'
import GanttBarLabelWrapper from 'components/GanttBarLabelWrapper/GanttBarLabelWrapper'
import GanttBarQuantileList from 'components/GanttBarQuantileList/GanttBarQuantileList'
import GanttScalePropType from 'prop-types/GanttScale.prop-type'
import { calcLeft, calcLineFattener, calcWidth } from 'util/UtilGanttBarList/UtilGanttBar'
import { GanttBarDataPropType } from 'prop-types/GanttBar.prop-type'
import { statisticBarListi18nBase } from 'sections/GanttBarList/GanttBarList'

import './GanttBar.scss'

function GanttBar({
  ariaLabel,
  barData,
  barPosition,
  maxOfAll,
  scale,
  ganttToggleList,
}) {
  const {
    count,
    label,
    max,
    maxMda,
    mean,
    median,
    min,
    minMda,
    quantile,
    skewness,
    tone,
  } = barData

  const lineFattener = calcLineFattener({ fatLines: ganttToggleList?.fatLines })

  const markClassPrefix = 'gantt-bar gantt-bar__mark '
  const barClass = `gantt-bar gantt-bar__range ${tone ? `gantt-bar--${tone}` : '' }`
  const markClass = `${markClassPrefix} ${tone ? `gantt-bar--${tone}` : '' }`
  const markClassDark = `${markClassPrefix} ${tone ? `gantt-bar--${tone}-dark` : '' }`
  const hueStyle = maxOfAll && !tone
    ? ({ lightness = 60 } = {}) => {
      return {
        backgroundColor: `hsl(${270 - (270 / maxOfAll * 1.1 * max)} 80% ${lightness}%)`
      }
    }
    : (args = {}) => ({})

  const labelListPosition = maxMda > max ? maxMda : max

  return (min !== 0 || max !== 0) && (
    <dl
      aria-label={ariaLabel}
      className='gantt-bar'
      title={ariaLabel}
    >
      <dt className='row-layout space-children--with-border gantt-bar__label-main'>
        { ganttToggleList?.label && (
          <span
            key='l'
            className='gantt-bar__label-main-text'
          >
            {label}
          </span>
        ) }
        <span key='n' className='gantt-bar__label-main-text'><i>N</i>={count}</span>
      </dt>
      <dd>
        <ol>
          { ganttToggleList?.quantile && (
            <GanttBarQuantileList
              count={count}
              fatLines={ganttToggleList?.fatLines}
              numberShown={ganttToggleList?.quantileNumber}
              quantile={quantile}
              scale={scale}
            />
          ) }
          { ganttToggleList?.range && (
            <>
              <li
                key={`scale-1`}
                className={barClass}
                style={{
                  ...hueStyle(),
                  ...calcWidth({ min, max, scale })
                }}
              />
              <li
                key={`min-1`}
                className={markClass}
                style={{
                  ...hueStyle({ lightness: 45 }),
                  ...lineFattener,
                  left: `${calcLeft({ scale, val: min })}%`,
                }}
              />
              <li
                key={`max-1`}
                className={markClass}
                style={{
                  ...hueStyle({ lightness: 45 }),
                  ...lineFattener,
                  left: `${calcLeft({ scale, val: max })}%`,
                }}
              />
            </>
          ) }
          { ganttToggleList?.deviation && (
            <li
              key={`scale-2`}
              className={barClass}
              style={{
                ...hueStyle(),
                ...calcWidth({ min: minMda, max: maxMda, scale })
              }}
            />
          ) }
          { ganttToggleList?.mean && (
            <li
              key={`mean-1`}
              className={markClass}
              style={{
                ...hueStyle(),
                left: `${calcLeft({ scale, val: mean })}%`
              }}
            />
          ) }
          { ganttToggleList?.median && (
            <li
              key={`median-1`}
              className={markClassDark}
              style={{
                ...hueStyle({ lightness: 30 }),
                ...lineFattener,
                left: `${calcLeft({ scale, val: median })}%`,
              }}
            />
          ) }
          { ganttToggleList?.statList && (
            <li key={`statlab-1`} >
              <GanttBarLabelWrapper
                labelListPosition={labelListPosition}
                scale={scale}
              >
                <GanttBarLabel
                  key='st1'
                  label={i18next.t(`${statisticBarListi18nBase}.ranges`)}
                  value={`${min} | ${minMda} - ${maxMda} | ${max}`}
                  width='80px'
                />
                <GanttBarLabel
                  key='st2'
                  label={i18next.t(`${statisticBarListi18nBase}.mAndM`)}
                  value={`${mean.toFixed(1)} | ${median.toFixed(1)}`}
                  width='80px'
                />
                <GanttBarLabel
                  key='st3'
                  label={i18next.t(`${statisticBarListi18nBase}.skewness`)}
                  value={(skewness && count > 2) ? parseFloat(skewness).toFixed(3) : 'N/A'}
                  width='80px'
                />
              </GanttBarLabelWrapper>
            </li>
          ) }
        </ol>
      </dd>
    </dl>
  )
}

GanttBar.defaultProps = {
  heading: "Heading needs to be set!",
  scale: SCALE_DEFAULT,
  showAllQuantiles: true,
  ganttToggleList: GANTT_TOGGLE_LIST,
}

GanttBar.propTypes = {
  ariaLabel: PropTypes.string,
  barData: GanttBarDataPropType,
  barPosition: PropTypes.number.isRequired,
  maxOfAll: PropTypes.number,
  scale: GanttScalePropType,
  showAllQuantiles: PropTypes.bool,
}

export default GanttBar;
