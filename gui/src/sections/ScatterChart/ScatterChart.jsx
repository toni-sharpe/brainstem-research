import i18next from 'util/i18next/i18next'
import React from 'react'
import PropTypes from 'prop-types'
import { range, values } from 'ramda'

import { SCATTER_SCALE_LABEL_OFFSET, SCATTER_SCALE_NUMBER_OFFSET } from 'util/Constant/BaseConstantList'
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
  keyPair: {
    x,
    y,
  },
  mapFn,
  scatterData,
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

  function textX() {
    return 0 - SCATTER_SCALE_NUMBER_OFFSET
  }
  function textY() {
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
                        y={textY()}
                      />
                    ) }
                    <SvgLine key={`guide-${i}`} stroke={stroke} x={[0, squ - line]} y={[squ, squ - line]} />
                    { isHighlightLine({ i }) && (
                      <SvgLabelText
                        extraClass='scatter-chart__number'
                        k={`guide-label-${i}-y`}
                        label={i * show}
                        x={textX()}
                        y={squ - line}
                      />
                    ) }
                  </>
                )
              })}
              <SvgLine key='y-edge' stroke='#49d' x={[0, 0]} y={[0, squ]} />
              <SvgLine key='x-edge' stroke='#49d' x={[0, squ]} y={[squ, squ]} />
              <SvgLabelText extraClass='scatter-chart__number' k='zero' label='0' x={textX() + 5} y={textY() - 3} />
              { values(pointList).map(({ x, y }, i) => {
                const xScaled = numberPrecision({ n: (x * plotStepSize) })
                const yScaled = numberPrecision({ n: (squ - (y * plotStepSize)) })
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
}

ScatterChart.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  keyPair: XYKeyPairPropType.isRequired,
  mapFn: PropTypes.func,
  scatterData: ScatterDataPropType.isRequired,
}

export default ScatterChart;
