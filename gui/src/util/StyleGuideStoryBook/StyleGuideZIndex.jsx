import React from 'react'

import { calcHue } from 'util/UtilHue/UtilHue'

function StyleGuideZIndex() {
  const zIndexList = [
    'background-guaranteed',
    'step-right-back',
    'step-back',
    'neutral',
    'step-forward',
    'step-right-forward',
    'front-guaranteed',
    'menu-guaranteed',
  ]

  const zIndexCount = zIndexList.length

  return (
    <section className='style-guide style-guide__z-index column-layout space-children--column'>
      <h3>Z-Index</h3>
      <div className='row-layout space-children--with-border'>
        <div>
          <ol className='z-index--outer'>
            {zIndexList.map((zIndex, i) => {
              const innerOffset =
                (i + 1)
                *
                24

              const hue = calcHue({ i, total: zIndexCount })

              return (
                <li
                  class={`z-index--inner ${zIndex}`}
                  style={{
                    backgroundColor: `hsl(${hue} 80% 70%)`,
                    top: `${innerOffset}px`,
                    left: `${innerOffset}px`,
                  }}
                />
              )
            })}
          </ol>
        </div>
        <div>
          <ol className='column-layout space-children--column'>
            {zIndexList.map((zIndex, i) => {
              const hue = calcHue({ i, total: zIndexCount })

              return (
                <li
                  className='z-index__label'
                  style={{ backgroundColor: `hsl(${hue} 80% 70%)` }}
                >
                  {zIndex}
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default StyleGuideZIndex
