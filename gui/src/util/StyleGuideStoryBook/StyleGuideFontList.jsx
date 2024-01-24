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
                <ol className='column-layout space-children--column-with-border'>
                  <li className='column-layout space-children--column'>
                    <h5>Small | {weight}</h5>
                    <span className={`column-layout font--small-${weight}`}>
                      {fontExample.map(fontEg => (<span>{fontEg}</span>))}
                    </span>
                  </li>
                  <li className='column-layout space-children--column'>
                    <h5>Medium small | {weight}</h5>
                    <span className={`column-layout font--medium-small-${weight}`}>
                      {fontExample.map(fontEg => (<span>{fontEg}</span>))}
                    </span>
                  </li>
                  <li className='column-layout space-children--column'>
                    <h5>Medium | {weight}</h5>
                    <span className={`column-layout font--medium-${weight}`}>
                      {fontExample.map(fontEg => (<span>{fontEg}</span>))}
                    </span>
                  </li>
                  <li className='column-layout space-children--column'>
                    <h5>Medium large | {weight}</h5>
                    <span className={`column-layout font--medium-large-${weight}`}>
                      {fontExample.map(fontEg => (<span>{fontEg}</span>))}
                    </span>
                  </li>
                  <li className='column-layout space-children--column'>
                    <h5>Large | {weight}</h5>
                    <span className={`column-layout font--large-${weight}`}>
                      {fontExample.map(fontEg => (<span>{fontEg}</span>))}
                    </span>
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
