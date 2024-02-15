import React from 'react'

import './MapObjectSimple.scss'

function MapObjectSimple({
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
      <article className={`map-object-simple`}>
        <section
          className='map-object-simple__label'
        >
          <span>70 yrs</span>
        </section>
      </article>
    </foreignObject>
  )
}

export default MapObjectSimple
