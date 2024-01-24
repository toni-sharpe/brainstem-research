import React from 'react'

import StyleGuideColorList from './StyleGuideColorList'
import StyleGuideFontList from './StyleGuideFontList'

import './StyleGuideStoryBook.scss'

function StyleGuideStoryBook() {
  return (
    <div className='column-layout space-children--wide-column-with-border'>
      <StyleGuideColorList />
      <StyleGuideFontList />
    </div>
  )
}

export default StyleGuideStoryBook
