import PropTypes from 'prop-types'
import React from 'react'

import { WORLD_MAP_ZOOM_LIST } from 'util/Constant/BaseConstantList'
import Button from 'components/Button/Button'
import GraphOffsetPropType from 'prop-types/GraphOffset.prop-type'
import ResetZoomButton from 'components/ResetZoomButton/ResetZoomButton'
import ZoomButton from 'components/ZoomButton/ZoomButton'
import { setJsonLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'
import {
  calcNewGraphOffset,
  onWestEventHandler,
  onEastEventHandler,
  onNorthEventHandler,
  onSouthEventHandler,
} from 'util/UtilMapControlList/UtilMapControlList'

import './MapSvgControlList.scss'

function MapSvgControlList({
  graphKey,
  graphOffset,
  persisted,
  setGraphOffset,
  setZoom,
  zoom,
}) {
  const [x, y] = graphOffset

  const movementButtonCommonProps = {
    isDisabled: zoom === 1 && x === 0 && y === 0,
    size: 'medium',
  }

  const eventHandlerProps = {
    graphKey,
    graphOffset,
    persisted,
    setGraphOffset,
    setZoom,
    zoom,
  }

  return (
    <div
      aria-label='world map move and zoom'
      role='region'
    >
      <ul
        className='map-svg-control-list'
      >
        <li>
          <ol className='row-layout space-children'>
            <li>
              <Button
                {...movementButtonCommonProps}
                label=' ← West'
                onClick={() => onWestEventHandler(eventHandlerProps)}
              />
            </li>
            <li>
              <Button
                {...movementButtonCommonProps}
                label='↑ North'
                onClick={() => onNorthEventHandler(eventHandlerProps)}
              />
            </li>
            <li>
              <Button
                {...movementButtonCommonProps}
                label='East →'
                onClick={() => onEastEventHandler(eventHandlerProps)}
              />
            </li>
            <li>
              <Button
                {...movementButtonCommonProps}
                label='↓ South'
                onClick={() => onSouthEventHandler(eventHandlerProps)}
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
                const newGraphOffset = z === 1
                  ? [0, 0]
                  : calcNewGraphOffset({
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
                      setJsonLocalStorage({ k: graphKey, v: { ...persisted, graphOffset: newGraphOffset, zoom: newVal } })
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
    </div>
  )
}

MapSvgControlList.defaultProps = {
  graphKey: 'blankMap',
  graphOffset: [0,0],
  zoom: 1,
}

MapSvgControlList.propTypes = {
  graphKey: PropTypes.string,
  graphOffset: GraphOffsetPropType,
  persisted: PropTypes.object,
  setGraphOffset: PropTypes.func,
  setZoom: PropTypes.func,
  zoom: PropTypes.number,
}

export default MapSvgControlList
