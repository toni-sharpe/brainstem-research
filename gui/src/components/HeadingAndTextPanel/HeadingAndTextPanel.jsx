import React from 'react'

import './HeadingAndTextPanel.scss'

function HeadingAndTextPanel({ heading, text }) {
  return (
    <section className='heading-and-text-panel column-layout space-children--wide-column'>
      { heading && <h2>{heading}</h2> }
      {text}
    </section>
  )
}

export default HeadingAndTextPanel
