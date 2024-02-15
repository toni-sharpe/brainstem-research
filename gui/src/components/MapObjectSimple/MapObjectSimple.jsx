import React from 'react'

import './MapObjectSimple.scss'

function MapObjectSimple({
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
      <article className={`map-object-simple map-object-simple__${size}`}>
        <section
          className='map-object-simple__label'
        >
          <span>{countryName}</span>
        </section>
      </article>
    </foreignObject>
  )
}

export default MapObjectSimple
