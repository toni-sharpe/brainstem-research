import React from 'react'
import PropTypes from 'prop-types'

import './SingleLabelButtonList.scss'

export function SingleLabelButtonList({
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

SingleLabelButtonList.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node,
}

export default SingleLabelButtonList
