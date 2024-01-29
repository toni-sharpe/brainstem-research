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
    </header>
  )
}

DragGraphHeader.propTypes = {
  heading: PropTypes.string,
  scaleDetail: PropTypes.string,
}

export default DragGraphHeader
