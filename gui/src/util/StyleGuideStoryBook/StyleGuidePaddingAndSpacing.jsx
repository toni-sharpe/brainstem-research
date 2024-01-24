import React from 'react'

function StyleGuidePaddingAndSpacing() {
  const spacingList = [
    'narrowest',
    'narrow',
    'wide',
  ]
  const paddingList = [
    'tiniest',
    'small-tiny',
    'small',
    'medium',
    'medium-large',
    'large',
    'very-large',
  ]
  return (
    <section className='style-guide style-guide__padding-and-spacing column-layout space-children--column'>
      <h3>Padding and spacing</h3>
      <div className='column-layout space-children--wide-column'>
        {spacingList.map(spacing => {
          return (
            <div className='column-layout space-children--column'>
              <h4 className='row-layout space-children--wide-with-border'>
                <span className='main'>{spacing}</span>
                <span className='row-layout space-children--with-border details'>
                  {paddingList.map(padding => {
                    return (
                      <span>{padding}</span>
                    )
                  })}
                </span>
              </h4>
              <div className='row-layout'>
                {
                  paddingList.map(padding => {
                    return (
                      <div className={`style-guide__padding-and-spacing--outer spacing--${spacing} padding--${padding}`}>
                        <div className='style-guide__padding-and-spacing--inner' />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default StyleGuidePaddingAndSpacing
