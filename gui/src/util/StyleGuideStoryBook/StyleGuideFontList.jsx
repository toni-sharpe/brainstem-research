import React from 'react'

function StyleGuideColorList() {
  const fontExample = [
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    'abcdefghijklmnopqrstuvwxyz',
    '0123456789',
    '!@£$%^&*(){}[]',
  ]
  const fontWeightList = [
    'light',
    'regular',
    'bold',
    'black',
  ]
  return (
    <section className='style-guide style-guide__font-list column-layout space-children--column'>
      <h3>Fonts</h3>
      <div className='style-guide__font row-layout space-children'>
        {fontWeightList.map(weight => {
          return (
            <ol className='column-layout space-children--column'>
              <li><h4>{weight}</h4></li>
              <li>
                <ol className='column-layout space-children--column'>
                  <li><h5>Small</h5></li>
                  <li className={`column-layout font--small-${weight}`}>
                    {fontExample.map(fontEg => (<span>{fontEg}</span>))}
                  </li>
                  <li><h5>Medium small</h5></li>
                  <li className={`column-layout font--medium-small-${weight}`}>
                    {fontExample.map(fontEg => (<span>{fontEg}</span>))}
                  </li>
                  <li><h5>Medium</h5></li>
                  <li className={`column-layout font--medium-${weight}`}>
                    {fontExample.map(fontEg => (<span>{fontEg}</span>))}
                  </li>
                  <li><h5>Medium large</h5></li>
                  <li className={`column-layout font--medium-large-${weight}`}>
                    {fontExample.map(fontEg => (<span>{fontEg}</span>))}
                  </li>
                  <li><h5>Large</h5></li>
                  <li className={`column-layout font--large-${weight}`}>
                    {fontExample.map(fontEg => (<span>{fontEg}</span>))}
                  </li>
                </ol>
              </li>
            </ol>
          )
        })}
      </div>
    </section>
  )
}

export default StyleGuideColorList
