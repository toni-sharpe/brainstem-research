import React from 'react'

import {
  WORLD_MAP_ZOOM_LIST,
  WORLD_MAP_SVG_SCALE_WIDTH,
  WORLD_MAP_SVG_SCALE_HEIGHT,
} from 'util/Constant/BaseConstantList'
import Button from 'components/Button/Button'
import ResetZoomButton from 'components/ResetZoomButton/ResetZoomButton'
import ZoomButton from 'components/ZoomButton/ZoomButton'
import { setJSONLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'
import { calcNewGraphOffset } from 'util/UtilMapControlList/UtilMapControlList'

import './MapSvgControlList.scss'

function MapSvgControlList({
  graphKey,
  graphOffset,
  persisted,
  setGraphOffset,
  setZoom,
  zoom,
}) {
  // Easier code
  const STEP = 10
  const HORZ_MOVE = WORLD_MAP_SVG_SCALE_WIDTH / STEP
  const VERT_MOVE = WORLD_MAP_SVG_SCALE_HEIGHT / STEP

  const [x, y] = graphOffset

  const movementButtonCommonProps = {
    isDisabled: zoom === 1 && x === 0 && y === 0,
    size: 'medium',
  }

  const horz_bound = 0 - (WORLD_MAP_SVG_SCALE_WIDTH * zoom)
  const vert_bound = 0 - (WORLD_MAP_SVG_SCALE_HEIGHT * zoom)

  return (
    <ul
      className='map-svg-control-list'
    >
      <li>
        <ol className='row-layout space-children'>
          <li>
            <Button
              {...movementButtonCommonProps}
              label='← East'
              onClick={() => {
                let newX = x + HORZ_MOVE
                if (newX >= 0) { newX = 0 }
                const offset = [newX, y]
                setGraphOffset(offset)
                setJSONLocalStorage({ k: graphKey, v: { graphOffset, zoom } })
              }}
            />
          </li>
          <li>
            <Button
              {...movementButtonCommonProps}
              label='↑ North'
              onClick={() => {
                let newY = y + VERT_MOVE
                if (newY >= 0) { newY = 0 }
                const offset = [x, newY]
                setGraphOffset(offset)
                setJSONLocalStorage({ k: graphKey, v: { graphOffset, zoom } })
              }}
            />
          </li>
          <li>
            <Button
              {...movementButtonCommonProps}
              label='→ West'
              onClick={() => {
                let m = x
                if (m > horz_bound) {
                  m = x - HORZ_MOVE
                } else {
                  m = horz_bound
                }
              const offset = [m, y]
                setGraphOffset(offset)
                setJSONLocalStorage({ k: graphKey, v: { graphOffset, zoom } })
              }}
            />
          </li>
          <li>
            <Button
              {...movementButtonCommonProps}
              label='↓ South'
              onClick={() => {
                let m = y
                if (m > vert_bound) {
                  m = y - VERT_MOVE
                } else {
                  m = vert_bound
                }
              const offset = [x, m]
                setGraphOffset(offset)
                setJSONLocalStorage({ k: graphKey, v: { graphOffset, zoom } })
              }}
            />
          </li>
        </ol>
      </li>
      <li>
        <ol
          className='map-svg-control-list__zoom'
        >
          <li className='map-svg-control-list__zoom-label'>
            <span>Zoom:</span>
          </li>

          <li className='map-svg-control-list__zoom-buttons row-layout space-children'>
            { WORLD_MAP_ZOOM_LIST.map(z => {
              const newGraphOffset = calcNewGraphOffset({
                x,
                y,
                zoomTo: z,
                zoomFrom: zoom
              })

              return (
                <ZoomButton
                  graphKey={graphKey}
                  isSelected={zoom === z}
                  k={z}
                  key={`${z}-zoom`}
                  newValue={z}
                  stateFn={(newVal) => {
                    setGraphOffset(newGraphOffset)
                    setZoom(newVal)
                    setJSONLocalStorage({ k: graphKey, v: { graphOffset: newGraphOffset, zoom: newVal } })
                  }}
                />
              )
            }) }
            <ResetZoomButton
              graphKey={graphKey}
              graphOffset={graphOffset}
              setGraphOffset={setGraphOffset}
              setZoom={setZoom}
              zoom={zoom}
              zDefault={1}
            />
          </li>
        </ol>
      </li>
    </ul>
  )
}

export default MapSvgControlList
