import i18next from 'util/i18next/i18next'
import React from 'react'

import Button from 'components/Button/Button'

import './MapObjectDetailed.scss'

const i18nBase = 'MapObjectDetailed'

function MapObjectDetailed({
  children,
  closeOnClick,
  countryName,
  size,
  h,
  w,
  x,
  y,
}) {
  return (
    <foreignObject
      key={'test'}
      x={x - (w / 2)}
      y={y - (h / 2)}
      width={w}
      height={h}
    >
      <article
        className='map-object-detailed'
        style={{ height: `${h}px`, width: `${w}px` }}
      >
        <Button
          extraClass='map-object-detailed__close-button'
          label='X'
          onClick={closeOnClick}
          size='small'
          title={i18next.t(`${i18nBase}.close`, { countryName })}
        />
        <section className='map-object-detailed__details'>
          { children
              ? children
              : 'Lorem ipsum some detail'
          }
        </section>
      </article>
    </foreignObject>
  )
}

export default MapObjectDetailed
