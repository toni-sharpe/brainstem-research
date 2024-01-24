import React from 'react'

import StyleGuideColorList from './StyleGuideColorList'
import StyleGuideFontList from './StyleGuideFontList'
import StyleGuidePaddingAndSpacing from './StyleGuidePaddingAndSpacing'

import './StyleGuideStoryBook.scss'
import './StyleGuideStyleList.scss'

function StyleGuideStoryBook() {
  return (
    <div className='column-layout space-children--wide-column-with-border'>
      <StyleGuideColorList />
      <StyleGuideFontList />
      <StyleGuidePaddingAndSpacing />
    </div>
  )
}

export default StyleGuideStoryBook
