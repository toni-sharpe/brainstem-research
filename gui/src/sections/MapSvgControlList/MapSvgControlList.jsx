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
import {
  calcBound,
  calcMove,
  calcNewGraphOffset,
} from 'util/UtilMapSvg/UtilMapSvg'

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
    isDisabled: zoom === 1,
    size: 'medium',
  }

  return (
    <ul
      className='map-svg-control-list row-layout space-children--wide-with-border'
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
                setGraphOffset([newX, y])
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
                setGraphOffset([x, newY])
              }}
            />
          </li>
          <li>
            <Button
              {...movementButtonCommonProps}
              label='→ West'
              onClick={() => {
                let m = HORZ_MOVE
                let newX = x - m
                if (newX <= calcBound({ m, step: STEP, zoom })) { newX = calcMove({ m }) }
                setGraphOffset([newX, y])
              }}
            />
          </li>
          <li>
            <Button
              {...movementButtonCommonProps}
              label='↓ South'
              onClick={() => {
                let m = VERT_MOVE
                let newY = y - m
                if (newY <= calcBound({ m, step: STEP, zoom })) { newY = calcMove({ m }) }
                setGraphOffset([x, newY])
              }}
            />
          </li>
        </ol>
      </li>
      <li>
        <ol
          className='map-svg-control-list__zoom row-layout space-children'
        >
          <li>
            <span>Zoom:</span>
          </li>
          <li className='row-layout space-children'>
            { WORLD_MAP_ZOOM_LIST.map(z => {
              const newGraphOffset = calcNewGraphOffset({ x, y, z, zoom })

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
                    setJSONLocalStorage({ [graphKey]: newVal })
                  }}
                />
              )
            }) }
          </li>
          <li>
            <ResetZoomButton
              graphKey={graphKey}
              graphOffset={graphOffset}
              setGraphOffset={setGraphOffset}
              setZoom={setZoom}
              zoom={zoom}
            />
          </li>
        </ol>
      </li>
    </ul>
  )
}

export default MapSvgControlList
