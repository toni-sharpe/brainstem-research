import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'

import Button from 'components/Button/Button'
import { setJSONLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

const i18nBase = 'ZoomButton'

function ZoomButton({
  buttonSize,
  graphKey,
  isDisabled,
  isSelected,
  k,
  localStorageValList,
  newValue,
  stateFn,
}) {
  return (
    <Button
      isSelected={isSelected}
      isDisabled={isDisabled}
      size={buttonSize}
      label={i18next.t(`${i18nBase}.${k}`)}
      onClick={() => {
        setJSONLocalStorage({ k: graphKey, v: { zoom: newValue } })
        stateFn(newValue)
      }}
    />
  )
}

ZoomButton.defaultProps = {
  buttonSize: 'medium',
}

ZoomButton.propTypes = {
  heading: PropTypes.string,
  scaleDetail: PropTypes.string,
}

export default ZoomButton
