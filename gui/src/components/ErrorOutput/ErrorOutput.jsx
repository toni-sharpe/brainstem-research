import PropTypes from 'prop-types'
import React from 'react'

import AriaLevelPropType from 'prop-types/AriaLive.prop-type'

import './ErrorOutput.scss'

function ErrorOutput({ ariaLive, message }) {
  return (
    <div
      aria-live={ariaLive}
      className='error-output'
    >
      <span className='error-output__text'>{message}</span>
    </div>
  )
}

ErrorOutput.defaultProps = {
  ariaLive: 'polite',
  message: 'An error has occured',
}

ErrorOutput.propTypes = {
  ariaLive: AriaLevelPropType,
  message: PropTypes.string,
}

export default ErrorOutput
