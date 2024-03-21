import PropTypes from 'prop-types'
import React from 'react'

import Button from 'components/Button/Button'
import { WORLD_MAP_SVG_ZOOM_DEFAULT } from 'util/Constant/BaseConstantList'
import { setJsonLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import './ResetZoomButton.scss'

function ResetZoomButton({
  buttonSize,
  extraStateFn,
  graphKey,
  graphOffset: [ox, oy],
  persisted,
  setGraphOffset,
  setZoom,
  zDefault,
  zoom,
}) {
  const isDisabled = ox === 0 && oy === 0 && zoom === zDefault

  return (
    <Button
      extraClass={!isDisabled ? 'reset-zoom-button__active' : ''}
      isDisabled={isDisabled}
      k='resetZoomButton'
      label={isDisabled ? '-' : 'X'}
      onClick={() => {
        setJsonLocalStorage({
          k: graphKey,
          v: {
            ...persisted,
            graphOffset: [0, 0],
            zoom: zDefault
          }
        })
        extraStateFn && extraStateFn()
      }}
      size={buttonSize}
    />
  )
}

ResetZoomButton.defaultProps = {
  buttonSize: 'medium',
  zDefault: WORLD_MAP_SVG_ZOOM_DEFAULT,
}

ResetZoomButton.propTypes = {
  extraStateFn: PropTypes.func,
  graphOffset: PropTypes.array,
  setGraphOffset: PropTypes.func,
  setZoom: PropTypes.func,
  buttonSize: PropTypes.string,
  zDefault: PropTypes.number,
  zoom: PropTypes.number,
}

export default ResetZoomButton
