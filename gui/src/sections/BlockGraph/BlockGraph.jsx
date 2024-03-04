import React from 'react'
import { descend, drop, filter, map, pipe, reduce, sort } from 'ramda'

import {
  BLOCK_GRAPH_SVG_WIDTH,
  BLOCK_GRAPH_SVG_HEIGHT,
  BLOCK_GRAPH_PERC_FACTOR,
} from 'util/Constant/BaseConstantList'
import SvgWrapper from 'components/SvgWrapper/SvgWrapper'
import { numberPrecision } from 'util/Util/Util'

import './BlockGraph.scss'

function BlockGraph({
  heading,
  labelValList,
}) {
  const bySizeDesc = descend(([a, { length }]) => length)
  const sum = reduce((a, [_, { length }]) => a + length, 0)(labelValList)

  const blockPercList = pipe(
    sort(bySizeDesc),
    map(([label, val]) => ({ ...val, label, perc: numberPrecision({ n: val.length / sum * BLOCK_GRAPH_SVG_WIDTH }) })),
    reduce((a, c, i) => {
      const accSum = a.length > 0
        ? a[a.length -1].sum
        : 0
      const sum = accSum + c.perc
      const orientation = sum < BLOCK_GRAPH_SVG_WIDTH * 0.7 || i < 1
        ? 'V'
        : 'H'

      a.push({ ...c, orientation, sum })
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

  console.log(blockPercList)

  const commonTextProps = {
    dominantBaseline: 'hanging',
    textAnchor: 'left',
    style: { font: 'normal 9px sans-serif' },
  }

  return (
    <figure className='block-graph'>
      <SvgWrapper
        ariaLabel={`block graph shows drag graph data differently for ${heading}`}
        svgScale={`0 0 456 ${BLOCK_GRAPH_SVG_HEIGHT}`}
        region
      >
        {blockPercList.map((blPerc, i) => {
          if (blPerc.orientation === 'H' && hCount === 0) {
            remaining = numberPrecision({ n: BLOCK_GRAPH_SVG_WIDTH - (i >= 1 ? blockPercList[i - 1].sum : 0) })
            hList = pipe(
              filter(({ orientation }) => orientation === 'H'),
              map(val => ({ ...val, hPerc: val.perc / remaining * BLOCK_GRAPH_SVG_HEIGHT }))
            )(blockPercList)
            hCount ++
          }

          const firstTextProps = {
            ...commonTextProps,
            x: vX + 4,
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
                fill={`rgba(${r},${g},${b},0.4)`}
                height={BLOCK_GRAPH_SVG_HEIGHT}
              />
              <rect
                x={vX}
                y={0}
                width={42}
                fill='#444'
                fillOpacity={0.9}
                height={50}
              />
              <g fill='#fff'>
                <text {...firstTextProps} y={ 5}>{blPerc.label}</text>
                <text {...firstTextProps} y={20}>{blPerc.length}</text>
                <text {...firstTextProps} y={35}>{(blPerc.perc / BLOCK_GRAPH_PERC_FACTOR).toFixed(2)}%</text>
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
          const flipVertical = vY >= BLOCK_GRAPH_SVG_HEIGHT * 0.9
          let xBase = BLOCK_GRAPH_SVG_WIDTH - remaining
          let width = remaining
          const vYFactored = vY

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
            xBase = BLOCK_GRAPH_SVG_WIDTH - remaining + verticalRevert
            finalTextProps = {
              ...commonTextProps,
              style: { font: 'normal 7px sans-serif' },
              x: xBase + 5,
            }
          }

          const { rgb: [r, g, b] } = hlPerc

          const thisRect = !flipVertical
            ? (
                <g key={`${hCount}-${i}`}>
                  <rect
                    {...commonRectProps}
                    x={xBase}
                    y={vYFactored}
                    width={width}
                    fill={`rgba(${r},${g},${b},0.4)`}
                    height={hlPerc.hPerc }
                  />
                  <rect
                    x={xBase}
                    y={vYFactored}
                    width={width}
                    fill='#444'
                    fillOpacity={0.9}
                    height={16}
                  />
                  <g fill='#fff'>
                    <text
                      {...commonTextProps}
                      x={xBase + 4}
                      y={vYFactored + 4}
                    >
                      {hlPerc.label} : {hlPerc.length} : {(hlPerc.perc / BLOCK_GRAPH_PERC_FACTOR).toFixed(2)}%
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
                  fill={`rgba(${r},${g},${b},0.4)`}
                  height={vYFixedHeight}
                  title={hlPerc.label}
                />
                <g fill='#fff'>
                  <text {...finalTextProps} y={vYFixed +  5}>{hlPerc.label}</text>
                  <text {...finalTextProps} y={vYFixed + 14}>{hlPerc.length}</text>
                  <text {...finalTextProps} y={vYFixed + 23}>{(hlPerc.perc / BLOCK_GRAPH_PERC_FACTOR).toFixed(2)}%</text>
                  </g>
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
