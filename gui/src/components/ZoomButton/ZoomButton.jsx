import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'

import Button from 'components/Button/Button'
import {
  setJSONLocalStorage,
} from 'util/UtilLocalStorage/UtilLocalStorage'

import './ZoomButton.scss'

const i18nBase = 'ZoomButton'

function ZoomButton({
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
      size='medium'
      label={i18next.t(`${i18nBase}.${k}`)}
      onClick={() => {
        localStorageValList && setJSONLocalStorage({ k: graphKey, v: {
          ...localStorageValList,
          [k]: newValue,
        } })
        stateFn(newValue)
      }}
    />
  )
}

ZoomButton.propTypes = {
  heading: PropTypes.string,
  scaleDetail: PropTypes.string,
}

export default ZoomButton
