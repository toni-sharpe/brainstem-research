import React from 'react'
import { descend, drop, filter, map, pipe, reduce, sort } from 'ramda'

import {
  BLOCK_GRAPH_SVG_HEIGHT,
  BLOCK_GRAPH_SVG_HEIGHT_FACTOR,
} from 'util/Constant/BaseConstantList'
import SvgWrapper from 'components/SvgWrapper/SvgWrapper'
import { numberPrecision } from 'util/Util/Util'

import './BlockGraph.scss'

function BlockGraph({ labelValList }) {
  const bySizeDesc = descend(([a, { length }]) => length)
  const sum = reduce((a, [_, { length }]) => a + length, 0)(labelValList)

  const blockPercList = pipe(
    sort(bySizeDesc),
    map(([label, val]) => ({ ...val, label, perc: numberPrecision({ n: val.length / sum * 100, lessPrecise: 2 }) })),
    reduce((a, c) => {
      const sum = (a.length > 0 ? a[a.length -1].sum : 0) + c.perc
      a.push({ ...c, orientation: sum < 70 ? 'V' : 'H', sum })
      return a
    }, [])
  )(labelValList)

  let vCount = 0;
  let hCount = 0;
  let vX = 0;
  let vY = 0;
  let hList = []
  let remaining = 0
  let vYFixed = 0
  let vYFixedHeight = 0
  let fireOnceOnFlipVertical = false
  let totalRemainingPerc = 0

  let verticalRevert = 0

  const commonRectProps = {
    strokeWidth: '0.5',
    stroke: '#333',
  }

  const commonTextProps = {
    dominantBaseline: 'hanging',
    textAnchor: 'left',
    style: { font: 'normal 2.6px sans-serif' },
  }

  return (
    <figure className='block-graph'>
      <SvgWrapper svgScale={`0 0 100 ${BLOCK_GRAPH_SVG_HEIGHT}`}>
        {blockPercList.map((blPerc, i) => {
          if (blPerc.orientation === 'H' && hCount === 0) {
            remaining = numberPrecision({ n: 100 - blockPercList[i - 1].sum })
            hList = pipe(
              filter(({ orientation }) => orientation === 'H'),
              map(val => ({ ...val, hPerc: val.perc / remaining * BLOCK_GRAPH_SVG_HEIGHT }))
            )(blockPercList)
            hCount ++
          }

          const firstTextProps = {
            ...commonTextProps,
            x: vX + 2,
          }

          const width = blPerc.perc
          const { rgb: [r, g, b] } = blPerc

          const thisRect = (
            <g key={`${vCount}-${i}`}>
              <rect
                {...commonRectProps}
                x={vX}
                y={0}
                width={width}
                fill={`rgba(${r},${g},${b},0.7)`}
                height={BLOCK_GRAPH_SVG_HEIGHT}
              />
              <rect
                x={vX}
                y={0}
                width={12}
                fill='#444'
                fillOpacity={0.6}
                height={14}
              />
              <g fill='#fff'>
                <text {...firstTextProps} y={ 2}>{blPerc.label}</text>
                <text {...firstTextProps} y={ 6}>{blPerc.length}</text>
                <text {...firstTextProps} y={10}>{blPerc.perc}%</text>
              </g>
            </g>
          )

          if (blPerc.orientation === 'V') {
            vCount ++
            vX = vX + blPerc.perc
          }

          return hCount === 0 && thisRect
        })}
        {hList.map((hlPerc, i) => {
          const flipVertical = vY >= 90
          let xBase = 100 - remaining
          let width = remaining
          const vYFactored = vY * BLOCK_GRAPH_SVG_HEIGHT_FACTOR

          // to flip vertical again we'll do some things once
          if (flipVertical && !fireOnceOnFlipVertical) {
            fireOnceOnFlipVertical = true

            vYFixed = vYFactored
            vYFixedHeight = BLOCK_GRAPH_SVG_HEIGHT - vYFixed

            totalRemainingPerc = pipe(
              drop(i),
              reduce((a, c) => a = a + c.hPerc, 0),
              n => numberPrecision({ n }),
            )(hList)
          }

          // and some things everytime
          let finalTextProps
          if (flipVertical) {
            width = numberPrecision({ n: hlPerc.hPerc / totalRemainingPerc * remaining })
            xBase = 100 - remaining + verticalRevert
            finalTextProps = {
              ...commonTextProps,
              style: { font: 'normal 2px sans-serif' },
              x: xBase + 2,
            }
          }

          const { rgb: [r, g, b] } = hlPerc

          const thisRect = vY < 90
            ? (
                <g key={`${hCount}-${i}`}>
                  <rect
                    {...commonRectProps}
                    x={xBase}
                    y={vYFactored}
                    width={width}
                    fill={`rgba(${r},${g},${b},0.7)`}
                    height={hlPerc.hPerc * BLOCK_GRAPH_SVG_HEIGHT_FACTOR}
                  />
                  <rect
                    x={xBase}
                    y={vYFactored}
                    width={width}
                    fill='#444'
                    fillOpacity={0.6}
                    height={6}
                  />
                  <g fill='#fff'>
                    <text
                      {...commonTextProps}
                      x={xBase + 2}
                      y={vYFactored + 2}
                    >
                      {hlPerc.label} : {hlPerc.length} : {hlPerc.perc}%
                    </text>
                  </g>
                </g>
              )
            : (
              <g key={`${hCount}-${i}`}>
                <rect
                  {...commonRectProps}
                  x={xBase}
                  y={vYFixed}
                  width={width}
                  fill={`rgba(${r},${g},${b},0.7)`}
                  height={vYFixedHeight}
                  title={hlPerc.label}
                />
                <text {...finalTextProps} y={vYFixed + 2}>{hlPerc.label}</text>
                <text {...finalTextProps} y={vYFixed + 5}>{hlPerc.length}</text>
                <text {...finalTextProps} y={vYFixed + 8}>{hlPerc.perc}%</text>
              </g>
            )

          if (flipVertical) {
            verticalRevert = verticalRevert + width
          }

          vY = vY + hlPerc.hPerc

          hCount ++

          return thisRect
        })}
      </SvgWrapper>
    </figure>
  );
}

export default BlockGraph;
