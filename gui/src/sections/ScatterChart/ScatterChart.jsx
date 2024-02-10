import i18next from 'util/i18next/i18next'
import React from 'react'
import PropTypes from 'prop-types'
import { range, values } from 'ramda'

import {
  SCATTER_AXIS_LABEL_OFFSET,
  SCATTER_SCALE_LABEL_OFFSET,
  SCATTER_SCALE_NUMBER_OFFSET,
} from 'util/Constant/BaseConstantList'
import { numberPrecision } from 'util/Util/Util'
import calcKeyPairXy from 'util/UtilKeyPairXY/UtilKeyPairXY'
import { calcScatterScale, calcStroke, isHighlightLine } from 'util/UtilScatter/UtilScatter'

import ErrorOutput from 'components/ErrorOutput/ErrorOutput'
import SvgCircle from 'components/SvgCircle/SvgCircle'
import SvgLabelText from 'components/SvgLabelText/SvgLabelText'
import SvgLine from 'components/SvgLine/SvgLine'
import SvgWrapper from 'components/SvgWrapper/SvgWrapper'

import XYKeyPairPropType from 'prop-types/XYKeyPair.prop-type'
import ScatterDataPropType from 'prop-types/ScatterData.prop-type'

import './ScatterChart.scss'

const i18nBase = 'ScatterChart'

function ScatterChart({
  ariaLabel,
  keyPair,
  mapFn,
  scatterData,
}) {
  const xKey = keyPair.x
  const yKey = keyPair.y

  const pointList = calcKeyPairXy({
    data: scatterData,
    xKey,
    yKey,
    mapFn: mapFn
      ? mapFn
      : (data) => {
        const {
          care_error_level: careErrors,
          outcome,
          prime_symptom_level: primeSymptomSeverity,
        } = data
        return ({
          careErrors,
          outcome,
          primeSymptomSeverity,
          x: data[xKey],
          y: data[yKey],
        })
      },
  })

  if (!pointList || pointList?.length === 0) {
    return null
  }

  const {
    plotStepSize,
    rangeTopBound,
    scatterGuideLine,
    show,
    squ,
  } = calcScatterScale({ pointList: pointList.map(({ x, y }) => ({ x, y })) })

  function scaleNumX() {
    return 0 - SCATTER_SCALE_NUMBER_OFFSET
  }
  function scaleNumY() {
    return squ + SCATTER_SCALE_NUMBER_OFFSET
  }

  return (
    <div
      aria-label={ariaLabel}
      className='scatter-chart column-layout space-children--column-wide'
      role='region'
    >
      { pointList?.length
        ? (
            <SvgWrapper offset={SCATTER_SCALE_LABEL_OFFSET} svgScale={squ}>
              { range(1, rangeTopBound).map((i) => {
                const stroke = calcStroke({ i })
                const line = i * scatterGuideLine
                return (
                  <g key={`guide-lines-${i}`}>
                    <SvgLine key={`guide-x`} stroke={stroke} x={[line, 0]} y={[line, squ]} />
                    { isHighlightLine({ i }) && (
                      <SvgLabelText
                        extraClass='scatter-chart__number'
                        key={`guide-label-x`}
                        label={i * show}
                        x={line}
                        y={scaleNumY()}
                      />
                    ) }
                    <SvgLine key={`guide-y`} stroke={stroke} x={[0, squ - line]} y={[squ, squ - line]} />
                    { isHighlightLine({ i }) && (
                      <SvgLabelText
                        extraClass='scatter-chart__number'
                        key={`guide-label-y`}
                        label={i * show}
                        x={scaleNumX()}
                        y={squ - line}
                      />
                    ) }
                  </g>
                )
              })}
              <SvgLine key='y-edge' stroke='#49d' x={[0, 0]} y={[0, squ]} />
              <SvgLine key='x-edge' stroke='#49d' x={[0, squ]} y={[squ, squ]} />
              <SvgLabelText extraClass='scatter-chart__number' key='zero' label='0' x={scaleNumX() + 5} y={scaleNumY() - 3} />
              { values(pointList).map(({ x, y, careErrors, outcome, primeSymptomSeverity }, i) => {
                const xScaled = numberPrecision({ n: (x * plotStepSize) })
                const yScaled = numberPrecision({ n: (squ - (y * plotStepSize)) })
                return (
                  <g key={`${x}-${y}-${i}`}>
                    <SvgCircle
                      c={{ x: xScaled, y: yScaled }}
                      extraClass={`scatter-chart__outcome${outcome === 'SEV' ? '' : '-not'}-severe`}
                      fillOpacity={0.3}
                      key={`scale-sev`}
                      r={5 + (primeSymptomSeverity || 0)}
                      stroke={'rgba(48, 48, 48, 0.3)'}
                      strokeWidth={10}
                    />
                    <SvgCircle
                      c={{ x: xScaled, y: yScaled }}
                      extraClass={`scatter-chart__care-level${outcome === 'SEV' ? '' : '-not'}-severe`}
                      key={`scale-care`}
                      r={10 + (careErrors || 0 / 5)}
                      strokeWidth={10}
                    />
                  </g>
                )})
              }
              <SvgLabelText
                extraClass='scatter-chart__y-label'
                key={keyPair.x}
                label={`Y: ${i18next.t(`CommonClinicalResponses.${keyPair.x}`)}`}
                x={0 - (squ / 2)}
                y={0 - SCATTER_AXIS_LABEL_OFFSET}
              />
              <SvgLabelText
                key={keyPair.y}
                label={`X: ${i18next.t(`CommonClinicalResponses.${keyPair.y}`)}`}
                x={(squ - SCATTER_SCALE_LABEL_OFFSET) / 2}
                y={squ + SCATTER_AXIS_LABEL_OFFSET}
              />
            </SvgWrapper>
          )
        : (
          <span>
            <ErrorOutput message={i18next.t(`${i18nBase}.notEnoughData`)} />
          </span>
        )
      }
    </div>
  )
}

ScatterChart.defaultProps = {
  mapFn: null,
}

ScatterChart.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  keyPair: XYKeyPairPropType.isRequired,
  mapFn: PropTypes.func,
  scatterData: ScatterDataPropType.isRequired,
}

export default ScatterChart;
