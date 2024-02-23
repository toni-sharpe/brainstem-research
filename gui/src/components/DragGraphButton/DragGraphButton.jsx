import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'

import Button from 'components/Button/Button'
import { setJSONLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

const i18nBase = 'DragGraphButton'

function DragGraphButton({
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
          localStorageValList && setJSONLocalStorage({ k: graphKey, v: {
            ...localStorageValList,
          [k]: newValue,
        } })
        stateFn(newValue)
      }}
    />
  )
}

DragGraphButton.defaultProps = {
  buttonSize: 'medium',
}

DragGraphButton.propTypes = {
  heading: PropTypes.string,
  scaleDetail: PropTypes.string,
}

export default DragGraphButton
