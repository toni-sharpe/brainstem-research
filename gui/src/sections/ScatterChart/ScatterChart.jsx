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
    mapFn: (data) => {
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
              { range(1, squ).map((i) => {
                const stroke = calcStroke({ i })
                const line = i * scatterGuideLine
                return (
                  <>
                    <SvgLine key={`guide-${i}`} stroke={stroke} x={[line, 0]} y={[line, squ]} />
                    { isHighlightLine({ i }) && (
                      <SvgLabelText
                        extraClass='scatter-chart__number'
                        k={`guide-label-${i}-x`}
                        label={i * show}
                        x={line}
                        y={scaleNumY()}
                      />
                    ) }
                    <SvgLine key={`guide-${i}`} stroke={stroke} x={[0, squ - line]} y={[squ, squ - line]} />
                    { isHighlightLine({ i }) && (
                      <SvgLabelText
                        extraClass='scatter-chart__number'
                        k={`guide-label-${i}-y`}
                        label={i * show}
                        x={scaleNumX()}
                        y={squ - line}
                      />
                    ) }
                  </>
                )
              })}
              <SvgLine key='y-edge' stroke='#49d' x={[0, 0]} y={[0, squ]} />
              <SvgLine key='x-edge' stroke='#49d' x={[0, squ]} y={[squ, squ]} />
              <SvgLabelText extraClass='scatter-chart__number' k='zero' label='0' x={scaleNumX() + 5} y={scaleNumY() - 3} />
              { values(pointList).map(({ x, y, careErrors, outcome, primeSymptomSeverity }, i) => {
                const xScaled = numberPrecision({ n: (x * plotStepSize) })
                const yScaled = numberPrecision({ n: (squ - (y * plotStepSize)) })
                return (
                  <>
                    <SvgCircle
                      circleRadius={5 + (primeSymptomSeverity || 0)}
                      c={{ x: xScaled, y: yScaled }}
                      extraClass={`scatter-chart__outcome${outcome === 'SEV' ? '' : '-not'}-severe`}
                      fillOpacity={0.3}
                      key={`scale-${i}-sev`}
                      k={`scale-${i}-sev`}
                      stroke={'rgba(48, 48, 48, 0.3)'}
                    />
                    <SvgCircle
                      circleRadius={10 + (careErrors / 5)}
                      c={{ x: xScaled, y: yScaled }}
                      extraClass={`scatter-chart__care-level${outcome === 'SEV' ? '' : '-not'}-severe`}
                      key={`scale-${i}-care`}
                      k={`scale-${i}-care`}
                    />
                  </>
                )})
              }
              <SvgLabelText
                extraClass='scatter-chart__y-label'
                k={keyPair.x}
                label={`Y: ${i18next.t(`CommonClinicalResponses.${keyPair.x}`)}`}
                x={0 - (squ / 2)}
                y={0 - SCATTER_AXIS_LABEL_OFFSET}
              />
              <SvgLabelText
                k={keyPair.y}
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
