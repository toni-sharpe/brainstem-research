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
  const labelUnit = numberPrecision({ n: fullHeight / lineCount, lessPrecise })
  const yHighlight = numberPrecision({ n: fullHeight / (fullHeight / scale.highlight), lessPrecise })
  const yLine = numberPrecision({ n: fullHeight / (fullHeight / scale.show ), lessPrecise })

  const calcHue = calcAccessibleHue()

  return (
    <figure className='column-layout space-children--column line-graph'>
      <figcaption className='line-graph__heading'>{heading}</figcaption>
      <SvgWrapper
        ariaLabel={ariaLabel}
        extraClass='line-graph__svg'
        region
        svgScale={`0 5 ${fullHeight + 400} ${fullHeight}`}
      >
        <g transform='translate(200 0)'>
          { lineList.map(l => {
            const highlight = highLightLineList.includes(l)
            return (
              <g>
                <line
                  x1={0}
                  y1={fullHeight - l}
                  x2={fullHeight - 42}
                  y2={fullHeight - l}
                  stroke={highlight ? '#333' : '#eee'}
                  strokeWidth={1}
                  key={l}
                />
                <text
                  className={`line-graph__label ${highlight ? 'line-graph__label--highlight' : ''}`}
                  x={fullHeight - 35}
                  y={fullHeight - l}
                  textAnchor='start'
                  dominantBaseline='middle'
                >
                  {l}
                </text>
              </g>
            )
          }) }
          { range(0, longest).map((_, i) => {
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
          { data.sort((a, b) => a[1][0].v >= b[1][0].v ? 1 : -1).map(([lineLabel, valueList], i) => {
            const lineHue = calcHue({ i, total: lineCount })
            const firstPoint = fullHeight - (i * labelUnit) - 30

            return (
              <g>
                <text
                  className='line-graph__label'
                  x={-105}
                  y={firstPoint - 5}
                  textAnchor='end'
                  dominantBaseline='top'
                >
                  {lineLabel}
                </text>
                <line
                  x1={-98}
                  y1={firstPoint}
                  x2={0}
                  y2={fullHeight - (valueList[0].v * yUnit)}
                  stroke={lineHue}
                  strokeWidth={2}
                />
                <line
                  x1={-190}
                  y1={firstPoint}
                  x2={-98}
                  y2={firstPoint}
                  stroke={lineHue}
                  strokeWidth={2}
                />
                { valueList.map((vl, j) => {
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
                }) }
              </g>
            )
          })}
        </g>
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
