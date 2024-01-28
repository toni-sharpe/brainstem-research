import PropTypes from 'prop-types'
import React from 'react'

import './DragGraphHeader.scss'

function DragGraphHeader({
  heading,
  scaleDetail,
}) {
  return (
    <header className='column-layout space-children--column'>
      <h2
        className='drag-graph-header__heading'
        key='heading'
      >
        {heading}
      </h2>
      <span
        className='drag-graph-header__scale-detail'
        key='scale'
      >
        {scaleDetail}
      </span>
    </header>
  )
}

export default DragGraphHeader
