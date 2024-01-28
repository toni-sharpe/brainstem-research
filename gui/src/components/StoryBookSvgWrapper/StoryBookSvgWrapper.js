import React from 'react'
import PropTypes from 'prop-types'

import SvgWrapper from 'components/SvgWrapper/SvgWrapper'

import './StoryBookSvgWrapper.scss'

function StoryBookSvgWrapper({ children }) {
  return (
    <div style={{
      border: '1px solid #000',
      height: '400px',
      margin: '100px',
      width: '400px',
    }}>
      <SvgWrapper
        className='story-book-svg-wrapper'
        svgScale={100}
      >
        {children}
      </SvgWrapper>
    </div>
  )
}

export default StoryBookSvgWrapper
