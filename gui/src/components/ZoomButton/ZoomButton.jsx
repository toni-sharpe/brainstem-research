import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'

import Button from 'components/Button/Button'
import { setJsonLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

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
  zoom,
}) {
  return (
    <Button
      extraClass={`js-zoom-${k}`}
      isSelected={isSelected}
      isDisabled={isDisabled}
      size={buttonSize}
      label={i18next.t(`${i18nBase}.${k}`)}
      onClick={() => {
        setJsonLocalStorage({ k: graphKey, v: { zoom: newValue } })
        stateFn(newValue)
      }}
    />
  )
}

ZoomButton.defaultProps = {
  buttonSize: 'medium',
  isDisabled: false,
  isSelected: false,
}

ZoomButton.propTypes = {
  buttonSize: PropTypes.string,
  graphKey: PropTypes.string,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  localStorageValList: PropTypes.array,
  newValue: PropTypes.number,
  stateFn: PropTypes.func,
  zoom: PropTypes.number,
}

export default ZoomButton
