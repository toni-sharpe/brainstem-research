import React from 'react'
import PropTypes from 'prop-types'

import './SingleLabelButtonGroup.scss'

export function SingleLabelButtonGroup({
  children,
  label,
}) {
  return (
    <div className='single-label-button-group column-layout space-children--column'>
      <div>{label}</div>
      <div>
        {children}
      </div>
    </div>
  )
}

SingleLabelButtonGroup.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node,
}

export default SingleLabelButtonGroup
