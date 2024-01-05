import React from 'react'

import './HeadingAndTextPanel.scss'

function HeadingAndTextPanel({ text }) {
  return (
    <section className='heading-and-text-panel column-layout space-children--wide-column'>
      {text}
    </section>
  )
}

export default HeadingAndTextPanel
