import PropTypes from 'prop-types'
import React from 'react'

import Button from 'components/Button/Button'
import { setJSONLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import './ResetGraphButton.scss'

function ResetGraphButton({
  extraStateFn,
  graphKey,
  graphOffset,
  persisted,
  setGraphOffset,
  setZoom,
  zoom,
}) {
  const currentlyReset = graphOffset === '0 0' && zoom === 1

  return (
    <Button
      extraClass={currentlyReset ? '' : 'reset-graph-button__unset'}
      isDisabled={currentlyReset}
      k='resetGraphCenter'
      label={currentlyReset ? '.' : '!'}
      onClick={() => {
        setJSONLocalStorage({ k: graphKey,  v: { zoom: 1 } })
        setGraphOffset('0 0')
        setZoom(1)
        extraStateFn && extraStateFn()
      }}
      size='medium'
    />
  )
}

ResetGraphButton.propTypes = {
  extraStateFn: PropTypes.func,
  graphOffset: PropTypes.string,
  setGraphOffset: PropTypes.func,
  setZoom: PropTypes.func,
  zoom: PropTypes.number,
}

export default ResetGraphButton
