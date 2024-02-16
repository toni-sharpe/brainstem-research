import { pipe, split } from 'ramda'
import React from 'react'

import {
  WORLD_MAP_SVG_CENTER_X,
  WORLD_MAP_SVG_CENTER_Y,
  WORLD_MAP_ZOOM_LIST,
  WORLD_MAP_SVG_SCALE_WIDTH,
  WORLD_MAP_SVG_SCALE_HEIGHT,
} from 'util/Constant/BaseConstantList'
import Button from 'components/Button/Button'
import ResetGraphButton from 'components/ResetGraphButton/ResetGraphButton'
import ZoomButton from 'components/ZoomButton/ZoomButton'
import { setJSONLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

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
  const STEP_BREAKDOWN = 4
  const MAP_WIDTH = WORLD_MAP_SVG_SCALE_WIDTH / STEP_BREAKDOWN
  const MAP_HEIGHT = WORLD_MAP_SVG_SCALE_HEIGHT / STEP_BREAKDOWN

  const xy = split(' ')(graphOffset)

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
          <Button
            {...movementButtonCommonProps}
            label='← East'
            onClick={() => {
              let newX = Number(xy[0]) + MAP_WIDTH
              if (newX >= 0) { newX = 0 }
              setGraphOffset(`${newX} ${xy[1]}`)
            }}
          />
          <Button
            {...movementButtonCommonProps}
            label='↑ North'
            onClick={() => {
              let newY = Number(xy[1]) + MAP_HEIGHT
              if (newY >= 0) { newY = 0 }
              setGraphOffset(`${xy[0]} ${newY}`)
            }}
          />
          <Button
            {...movementButtonCommonProps}
            label='→ West'
            onClick={() => {
              let newX = Number(xy[0]) - MAP_WIDTH
              if (newX <= (0 - (MAP_WIDTH * STEP_BREAKDOWN * zoom))) { newX = (0 - MAP_WIDTH * (zoom - 1)) }
              setGraphOffset(`${newX} ${xy[1]}`)
            }}
          />
          <Button
            {...movementButtonCommonProps}
            label='↓ South'
            onClick={() => {
              let newY = Number(xy[1]) - MAP_HEIGHT
              if (newY <= (0 - (MAP_HEIGHT * STEP_BREAKDOWN * zoom))) { newY = (0 - MAP_HEIGHT * (zoom - 1)) }
              setGraphOffset(`${xy[0]} ${newY}`)
            }}
          />
        </ol>
      </li>
      <li>
        <ol
          className='map-svg-control-list__zoom-list row-layout space-children'
        >
          <li>
            <span>Zoom:</span>
          </li>
          { WORLD_MAP_ZOOM_LIST.map(z => {
            const factor = z / zoom
            const offsetFactor = factor - 1
            const xFactor = WORLD_MAP_SVG_CENTER_X * offsetFactor
            const yFactor = WORLD_MAP_SVG_CENTER_Y * offsetFactor
            return (
              <ZoomButton
                graphKey={graphKey}
                isSelected={zoom === z}
                k={z}
                key={`${z}-zoom`}
                newValue={z}
                stateFn={(newVal) => {
                  const newGraphOffset = pipe(
                    split(' '),
                    ([x, y]) => `${x * factor - xFactor} ${y * factor - yFactor}`,
                  )(graphOffset)
                  setGraphOffset(newGraphOffset)
                  setZoom(newVal)
                  setJSONLocalStorage({ [graphKey]: newVal })
                }}
              />
            )
          }) }
          <ResetGraphButton
            graphKey={graphKey}
            graphOffset={graphOffset}
            setGraphOffset={setGraphOffset}
            setZoom={setZoom}
            zoom={zoom}
          />
        </ol>
      </li>
    </ul>
  )
}

export default MapSvgControlList
