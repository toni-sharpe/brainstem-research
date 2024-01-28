import i18next from 'util/i18next/i18next'
import React from 'react'
import PropTypes from 'prop-types'
import { range, values } from 'ramda'

import { PRECISION } from 'util/Constant/BaseConstantList'
import calcKeyPairXy from 'util/UtilKeyPairXY/UtilKeyPairXY'
import { calcScatterScale, calcStroke, isHighlightLine } from 'util/UtilScatter/UtilScatter'

import ErrorOutput from 'components/ErrorOutput/ErrorOutput'
import SvgCircle from 'components/SvgCircle/SvgCircle'
import SvgLine from 'components/SvgLine/SvgLine'
import SvgWrapper from 'components/SvgWrapper/SvgWrapper'

import XYKeyPairPropType from 'prop-types/XYKeyPair.prop-type'
import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'
import ScatterDataPropType from 'prop-types/ScatterData.prop-type'
import ScatterDomainPropType from 'prop-types/ScatterDomain.prop-type'

import './ScatterChart.scss'

const i18nBase = 'ScatterChart'

function ScatterChart({
  ariaLabel,
  domain,
  keyPair: {
    x,
    y,
  },
  mapFn,
  scatterData,
  width,
}) {
  const pointList = calcKeyPairXy({
    data: scatterData,
    xKey: x,
    yKey: y,
    mapFn,
  })

  if (!pointList || pointList?.length === 0) {
    return null
  }

  const {
    plotStepSize,
    scatterGuideLine,
    show,
    squ,
  } = calcScatterScale({ pointList })

  return (
    <div
      aria-label={ariaLabel}
      className='scatter-chart column-layout space-children--column-wide'
      role='region'
    >
      { pointList?.length
        ? (
            <SvgWrapper svgScale={squ}>
              { range(1, squ).map((i) => {
                const stroke = calcStroke({ i })
                const line = i * scatterGuideLine
                return (
                  <>
                    <>
                      <SvgLine key={`guide-${i}`} stroke={stroke} x={[line, 0]} y={[line, squ]} />
                      { isHighlightLine({ i }) && (
                        <text
                          className='scatter-chart__number'
                          key={`guide-label-${i}-x`}
                          x={line + 1}
                          y={squ - 1}
                        >
                          {i * show}
                        </text>
                      ) }
                    </>
                    <>
                      <SvgLine key={`guide-${i}`} stroke={stroke} x={[0, squ - line]} y={[squ, squ - line]} />
                      { isHighlightLine({ i }) && (
                        <text
                          className='scatter-chart__number'
                          key={`guide-label-${i}-y`}
                          x={1}
                          y={squ - line - 1}
                        >
                          {i * show}
                        </text>
                      ) }
                    </>
                  </>
                )
              })}
              <SvgLine key='y-edge' stroke='#49d' x={[0, 0]} y={[0, squ]} />
              <SvgLine key='x-edge' stroke='#49d' x={[0, squ]} y={[squ, squ]} />
              <text key='zero' className='scatter-chart__number' x={1} y={squ - 1}>0</text>
              { values(pointList).map(({ x, y }, i) => {
                const xScaled = Number((x * plotStepSize).toPrecision(PRECISION))
                const yScaled = Number((squ - (y * plotStepSize)).toPrecision(PRECISION))
                return (
                  <SvgCircle
                    circleRadius={10}
                    c={{ x: xScaled, y: yScaled }}
                    key={`scale-${i}`}
                    k={`scale-${i}`}
                    stroke={'#333'}
                  />
                )})
              }
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
  width: '75%',
}

ScatterChart.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  domain: ScatterDomainPropType.isRequired,
  keyPair: XYKeyPairPropType.isRequired,
  mapFn: PropTypes.func,
  scatterData: ScatterDataPropType.isRequired,
  width: NumberOrStringPropType,
}

export default ScatterChart;
