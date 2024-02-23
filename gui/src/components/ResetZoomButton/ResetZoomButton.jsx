import PropTypes from 'prop-types'
import React from 'react'

import Button from 'components/Button/Button'
import { setJSONLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import './ResetZoomButton.scss'

function ResetZoomButton({
  buttonSize,
  extraStateFn,
  graphKey,
  graphOffset: [ox, oy],
  persisted,
  setGraphOffset,
  setZoom,
  zoom,
}) {
  const isDisabled = ox === 0 && oy === 0 && zoom === 1

  return (
    <Button
      extraClass={!isDisabled ? 'reset-zoom-button__active' : ''}
      isDisabled={isDisabled}
      k='resetZoomButton'
      label={isDisabled ? '-' : 'X'}
      onClick={() => {
        setJSONLocalStorage({ k: graphKey,  v: { zoom: 1 } })
        setGraphOffset([0, 0])
        setZoom(1)
        extraStateFn && extraStateFn()
      }}
      size={buttonSize}
    />
  )
}

ResetZoomButton.defaultProps = {
  buttonSize: 'medium',
}

ResetZoomButton.propTypes = {
  extraStateFn: PropTypes.func,
  graphOffset: PropTypes.array,
  setGraphOffset: PropTypes.func,
  setZoom: PropTypes.func,
  buttonSize: PropTypes.string,
  zoom: PropTypes.number,
}

export default ResetZoomButton
