import i18next from 'util/i18next/i18next'
import React from 'react'
import PropTypes from 'prop-types'

import { SCALE_DEFAULT, STAT_BAR_DETAIL_LIST } from 'util/Constant/BaseConstantList'
import TimeLineBarLabel from 'components/TimeLineBarLabel/TimeLineBarLabel'
import TimeLineBarLabelWrapper from 'components/TimeLineBarLabelWrapper/TimeLineBarLabelWrapper'
import TimeLineBarQuantileList from 'components/TimeLineBarQuantileList/TimeLineBarQuantileList'
import TimeLineBarListScalePropType from 'prop-types/TimeLineBarListScale.prop-type'
import { calcLeft, calcLineFattener, calcWidth } from 'util/UtilTimeLineBarList/UtilTimeLineBar'
import { TimeLineBarDataPropType } from 'prop-types/TimeLineBar.prop-type'
import { statisticBarListi18nBase } from 'sections/TimeLineBarList/TimeLineBarList'

import './TimeLineBar.scss'

function TimeLineBar({
  ariaLabel,
  barData,
  barPosition,
  maxOfAll,
  scale,
  timeLineBarDetailList,
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

  const lineFattener = calcLineFattener({ fatLines: timeLineBarDetailList?.fatLines })

  const markClassPrefix = 'time-line-bar time-line-bar__mark '
  const barClass = `time-line-bar time-line-bar__range ${tone ? `time-line-bar--${tone}` : '' }`
  const markClass = `${markClassPrefix} ${tone ? `time-line-bar--${tone}` : '' }`
  const markClassDark = `${markClassPrefix} ${tone ? `time-line-bar--${tone}-dark` : '' }`
  const hueStyle = maxOfAll && !tone
    ? ({ lightness = 60 } = {}) => {
      return {
        backgroundColor: `hsl(${270 - (270 / maxOfAll * 1.1 * max)} 80% ${lightness}%)`
      }
    }
    : (args = {}) => ({})

  const labelListPos = maxMda > max ? maxMda : max

  return (min !== 0 || max !== 0) && (
    <dl
      aria-label={ariaLabel}
      className='time-line-bar'
      title={ariaLabel}
    >
      <dt className='row-layout space-children--with-border time-line-bar__label-main'>
        { timeLineBarDetailList?.label && (
          <span
            key='l'
            className='time-line-bar__label-main-text'
          >
            {label}
          </span>
        ) }
        <span key='n' className='time-line-bar__label-main-text'><i>N</i>={count}</span>
      </dt>
      <dd>
        <ol>
          { timeLineBarDetailList?.quantile && (
            <TimeLineBarQuantileList
              count={count}
              fatLines={timeLineBarDetailList?.fatLines}
              numberShown={timeLineBarDetailList?.quantileNumber}
              quantile={quantile}
              scale={scale}
            />
          ) }
          { timeLineBarDetailList?.range && (
            <li
              key={`scale-1`}
              className={barClass}
              style={{
                ...hueStyle(),
                ...calcWidth({ min, max, scale })
              }}
            />
          ) }
          { timeLineBarDetailList?.min && (
            <li
              key={`min-1`}
              className={markClass}
              style={{
                ...hueStyle({ lightness: 45 }),
                ...calcLeft({ scale, val: min }),
                ...lineFattener,
              }}
            />
          ) }
          { timeLineBarDetailList?.deviation && (
            <li
              key={`scale-2`}
              className={barClass}
              style={{
                ...hueStyle(),
                ...calcWidth({ min: minMda, max: maxMda, scale })
              }}
            />
          ) }
          { timeLineBarDetailList?.mean && (
            <li
              key={`mean-1`}
              className={markClass}
              style={{
                ...hueStyle(),
                ...calcLeft({ scale, val: mean })
              }}
            />
          ) }
          { timeLineBarDetailList?.median && (
            <li
              key={`median-1`}
              className={markClassDark}
              style={{
                ...hueStyle({ lightness: 30 }),
                ...calcLeft({ scale, val: median }),
                ...lineFattener,
              }}
            />
          ) }
          { timeLineBarDetailList?.max && (
            <li
              key={`max-1`}
              className={markClass}
              style={{
                ...hueStyle({ lightness: 45 }),
                ...calcLeft({ scale, val: max }),
                ...lineFattener,
              }}
            />
          ) }
          { timeLineBarDetailList?.statList && (
            <li key={`statlab-1`} >
              <TimeLineBarLabelWrapper
                labelListPos={labelListPos}
                scale={scale}
              >
                <TimeLineBarLabel
                  key='st1'
                  label={i18next.t(`${statisticBarListi18nBase}.ranges`)}
                  value={`${min} | ${minMda} - ${maxMda} | ${max}`}
                  width='80px'
                />
                <TimeLineBarLabel
                  key='st2'
                  label={i18next.t(`${statisticBarListi18nBase}.mAndM`)}
                  value={`${mean.toFixed(1)} | ${median.toFixed(1)}`}
                  width='80px'
                />
                <TimeLineBarLabel
                  key='st3'
                  label={i18next.t(`${statisticBarListi18nBase}.skewness`)}
                  value={(skewness && count > 2) ? parseFloat(skewness).toFixed(3) : 'N/A'}
                  width='80px'
                />
              </TimeLineBarLabelWrapper>
            </li>
          ) }
        </ol>
      </dd>
    </dl>
  )
}

TimeLineBar.defaultProps = {
  heading: "Heading needs to be set!",
  scale: SCALE_DEFAULT,
  showAllQuantiles: true,
  timeLineBarDetailList: STAT_BAR_DETAIL_LIST,
}

TimeLineBar.propTypes = {
  ariaLabel: PropTypes.string,
  barData: TimeLineBarDataPropType,
  barPosition: PropTypes.number.isRequired,
  maxOfAll: PropTypes.number,
  scale: TimeLineBarListScalePropType,
  showAllQuantiles: PropTypes.bool,
}

export default TimeLineBar;
