import React from 'react'
import PropTypes from 'prop-types'

import SvgWrapper from 'components/SvgWrapper/SvgWrapper'

import './StoryBookSvgWrapper.scss'

function StoryBookSvgWrapper({
  children,
  offset,
  scale,
  svgScale,
}) {
  return (
    <div style={{
      border: '1px solid #000',
      height: '400px',
      margin: '100px',
      width: '400px',
    }}>
      <SvgWrapper
        className='story-book-svg-wrapper'
        svgScale={svgScale
          ? svgScale
          : `${offset.join(' ')} ${scale} ${scale}`
        }
      >
        {children}
      </SvgWrapper>
    </div>
  )
}

StoryBookSvgWrapper.defaultProps = {
  offset: [0, 0],
  scale: 100,
}

export default StoryBookSvgWrapper
