import React from 'react'
import PropTypes from 'prop-types'

import './StoryBookExampleBlock.scss'

function StoryBookExampleBlock({ children }) {
  return (
    <div className='story-book-example-block'>
      {children || 'some thing'}
    </div>
  )
}

StoryBookExampleBlock.propTypes = {
  children: PropTypes.node
}

export default StoryBookExampleBlock
