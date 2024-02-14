import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'

import Button from 'components/Button/Button'

const i18nBase = 'ResetGraphButton'

function ResetGraphButton({
  extraStateFn,
  graphOffset,
  setGraphOffset,
  setZoom,
  zoom,
}) {
  return (
    <Button
      isDisabled={graphOffset === '0 0' && zoom === 1}
      k='resetGraphCenter'
      label={i18next.t(`${i18nBase}.resetGraphCenter`)}
      onClick={() => {
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
