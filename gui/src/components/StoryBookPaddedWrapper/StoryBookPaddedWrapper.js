import React from 'react'
import PropTypes from 'prop-types'

import './StoryBookPaddedWrapper.scss'

function StoryBookPaddedWrapper({ children, heading }) {
  return (
    <article className='column-layout space-children--column-wide story-book-padded-wrapper'>
      { heading && (<h2>{heading}</h2>)}
      <section className='story-book-padded-wrapper__main'>{children}</section>
    </article>
  )
}

StoryBookPaddedWrapper.propTypes = {
  children: PropTypes.node
}

export default StoryBookPaddedWrapper
