import { pipe, split, last, init } from 'ramda'
import React, { useState } from 'react'

import { calcPolygonCoordString } from 'util/UtilDragGraph/UtilDragGraph'
import { WORLD_MAP_SVG_SCALE } from 'util/Constant/BaseConstantList'
import DragGraphButton from 'components/DragGraphButton/DragGraphButton'
import MapBorderList from 'util/Constant/MapBorderList'
import SvgCircle from 'components/SvgCircle/SvgCircle'
import SvgWrapper from 'components/SvgWrapper/SvgWrapper'
import { getJSONLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import './MapSvg.scss'

function MapSvg() {
  const [graphOffset, setGraphOffset] = useState('0 0')
  const persisted = getJSONLocalStorage({ k: 'mapZoom' })

  const [zoom, setZoom] = useState(persisted?.zoom || 1)

  const commonButtonProps = {
    graphKey: 'mapZoom',
    localStorageValList: persisted,
  }

  return (
    <figure>
      <div
        style={{
          width: '100vw',
          justifyContent: 'center',
          position: 'fixed',
          bottom: 0,
          display: 'flex',
          left: 0,
          right: 0
        }}>
        <div
          className='row-layout'
        >
          { [1, 2, 3, 5, 10, 15, 20, 30, 50].map(z => {
            return (
              <DragGraphButton
                {...commonButtonProps}
                newValue={z}
                isSelected={zoom === z}
                k={z}
                key={`${z}-zoom`}
                localStorageValList={{...persisted, zoom: z }}
                stateFn={(newVal) => {
                  const factor = newVal / zoom
                  const newGraphOffset = pipe(
                    split(' '),
                    d => {
                      return `${(d[0] * factor) - (500 * (factor - 1))} ${(d[1] * factor) - (350 * (factor - 1))}`
                    },
                  )(graphOffset)
                  setGraphOffset(newGraphOffset)
                  setZoom(newVal)
                }}
              />
            )
          }) }
          <DragGraphButton
            {...commonButtonProps}
            isDisabled={graphOffset === '0 0'}
            localStorageValList={false}
            newValue={'0 0'}
            k='resetGraphCenter'
            stateFn={(newVal) => {
              setGraphOffset(newVal)
            }}
          />
        </div>
      </div>
      <SvgWrapper
        extraClass='map-svg'
        k='world-map-svg'
        svgScale={`0 0 ${WORLD_MAP_SVG_SCALE}`}
        style={{ height: '80vh' }}
      >
        <g key='guides' transform={`translate(${graphOffset})`}>
          { MapBorderList.map(({ mapBorder }, i) => {
              return mapBorder.map((subBorder, j) => {
                const { c } = last(subBorder)
                const borderCoords = init(subBorder)

                return (
                  <g
                    key={`${c.x}${c.y}`}
                    onClick={() => {
                      setGraphOffset(`${500 - (c.x * zoom)} ${350 - (c.y * zoom)}`)
                    }
                  }>
                    <polygon
                      fill={'#4c4'}
                      fillOpacity={0.2}
                      points={calcPolygonCoordString({
                        coordList: borderCoords.map(
                          ([a, b]) => {
                            return ([a * zoom , b * zoom])
                          }
                        )
                      })}
                      stroke={'#484'}
                      strokeOpacity={1}
                      strokeWidth={0.5}
                    />
                    <foreignObject
                      key={'test'}
                      x={c.x * zoom - 18}
                      y={c.y * zoom - 7}
                      width='36'
                      height='14'
                    >
                      <article className={`map-svg__point`}>
                        <section
                          className='map-svg__point-num'
                        >
                          <span>70 yrs</span>
                        </section>
                      </article>
                    </foreignObject>
                    <SvgCircle
                      fill='red'
                      fillOpacity={0.5}
                      r={2}
                      stroke='red'
                      c={{ x: c.x * zoom, y: c.y + zoom }}
                    />
                  </g>
                )
              })
            })
          })}
        </g>
      </SvgWrapper>
    </figure>
  )
}

export default MapSvg
