import PropTypes from 'prop-types'
import React from 'react'
import { inc, map, pipe, range } from 'ramda'

import { numberPrecision } from 'util/Util/Util'
import { calcAccessibleHue } from 'util/UtilHue/UtilHue'
import { calcMaxBasedDisplay } from 'util/UtilScale/UtilScaleGranularity'
import SvgLine from 'components/SvgLine/SvgLine'
import SvgWrapper from 'components/SvgWrapper/SvgWrapper'

import './LineGraph.scss'

function LineGraph({
  ariaLabel,
  data,
  heading,
  max,
  svgScale,
  xLabel,
  yLabel,
}) {
  const scale = calcMaxBasedDisplay({ max })

  const fullHeight = (Math.floor(max / scale.highlight) * scale.highlight + scale.highlight) + 30

  let x = 0
  let highLightLineList = []
  let lineList = []
  for (; x <= fullHeight; x = x + scale.show) {
    lineList.push(x)
    if (x % scale.highlight === 0) {
      highLightLineList.push(x)
    }
  }

  const lineCount = data.length

  const longest = pipe(
    map(([_, { length }]) => length),
    d => Math.max(...d),
  )(data)

  const lessPrecise = 3
  const xUnit = numberPrecision({ n: fullHeight / longest, lessPrecise })
  const yUnit = numberPrecision({ n: fullHeight / fullHeight, lessPrecise })
  const yHighlight = numberPrecision({ n: fullHeight / (fullHeight / scale.highlight), lessPrecise })
  const yLine = numberPrecision({ n: fullHeight / (fullHeight / scale.show ), lessPrecise })

  const calcHue = calcAccessibleHue()

  return (
    <figure className='column-layout space-children--column line-graph'>
      <figcaption className='line-graph__heading'>{heading}</figcaption>
      <SvgWrapper
        ariaLabel={ariaLabel}
        extraClass='line-graph__svg'
        offset={20}
        region
        svgScale={`${fullHeight} ${fullHeight}`}
      >
        { lineList.map(l => {
          return (
            <line
              x1={0}
              y1={fullHeight - l}
              x2={fullHeight - 42}
              y2={fullHeight - l}
              stroke={highLightLineList.includes(l) ? '#333' : '#eee'}
              strokeWidth={1}
              key={l}
            />
          )
        }) }
        { range(0, longest + 1).map((_, i) => {
          return (
            <line
              x1={i * xUnit}
              y1={0}
              x2={i * xUnit}
              y2={fullHeight}
              stroke='#ccc'
              strokeWidth={1}
              key={i}
            />
          )
        }) }
        { data.map(([lineLabel, valueList], i) => {
          const lineHue = calcHue({ i, total: lineCount })
          return valueList.map((vl, j) => {
            return valueList[j+1] && (
              <line
                x1={j * xUnit}
                y1={fullHeight - (valueList[j].v * yUnit)}
                x2={(j+1) * xUnit}
                y2={fullHeight - (valueList[j+1].v * yUnit)}
                stroke={lineHue}
                strokeWidth={2}
              />
            )
          })
        })}
      </SvgWrapper>
    </figure>
  )
}

LineGraph.propTypes = {
  ariaLabel: PropTypes.string,
  heading: PropTypes.string,
  xLabel: PropTypes.string,
  yLabel: PropTypes.string,
}

export default LineGraph
