import React from 'react'
import { descend, filter, map, pipe, pluck, reduce, sort } from 'ramda'

import SvgWrapper from 'components/SvgWrapper/SvgWrapper'
import { numberPrecision } from 'util/Util/Util'

import './BlockGraph.scss'

function BlockGraph({ labelValList }) {
  console.log(labelValList)
  const bySizeDesc = descend(([a, { length }]) => length)
  const sum = reduce((a, [_, { length }]) => a + length, 0)(labelValList)

  const blockPercList = pipe(
    sort(bySizeDesc),
    pluck(1),
    map(val => ({ ...val, perc: numberPrecision({ n: val.length / sum * 100, lessPrecise: 2 }) })),
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

  const vTotal = blockPercList.filter(({ orientation }) => orientation === 'V').length

  return (
    <figure className='block-graph'>
      <SvgWrapper svgScale='0 0 100 100'>
        {blockPercList.map((blPerc, i) => {
          if (blPerc.orientation === 'H' && hCount === 0) {
            remaining = 100 - blockPercList[i - 1].sum
            hList = pipe(
              filter(({ orientation }) => orientation === 'H'),
              map(val => ({ ...val, hPerc: val.perc / remaining * 100 }))
            )(blockPercList)
            hCount ++
          }

          const thisRect = (
            <rect
              x={vX}
              y={0}
              width={blPerc.perc}
              fill={`rgb(50, ${120 + (100 / vTotal) * (vCount + 1)}, ${100 + (90 / vTotal) * (vCount + 1)})`}
              height='100'
              stroke='#444'
              strokeWidth='0.2'
            />
          )

          if (blPerc.orientation === 'V') {
            vCount ++
            vX = vX + blPerc.perc
          }

          return thisRect
        })}
        {hList.map((hlPerc) => {
          const thisRect = (
            <rect
              x={100 - remaining}
              y={vY}
              width={remaining}
              fill={`rgb(${200 - (60 / hlPerc.length) * (hCount - 1)}, ${100 - (30 / hlPerc.length) * (hCount - 1)}, ${255 - (100 / hlPerc.length) * (hCount - 1)})`}
              height={hlPerc.hPerc}
              stroke='#000'
              strokeWidth='0.2'
            />
          )

          vY = vY + hlPerc.hPerc

          hCount ++

          return thisRect
        })}
      </SvgWrapper>
    </figure>
  );
}

export default BlockGraph;
