import React from 'react'

import './MapObjectDetailed.scss'

function MapObjectDetailed({
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
      <div
        className='map-object-detailed'
        style={{ height: `${h}px`, width: `${w}` }}
      >
        <article className='map-object-detailed__content'>
          <header>
            <h3>{countryName}</h3>
          </header>
          <section
            className='map-object-detailed__label'
          >
            <ul>
              <li>Data 1: 1</li>
              <li>Data 2: 7</li>
              <li>Data 3: 4</li>
            </ul>
          </section>
        </article>
      </div>
    </foreignObject>
  )
}

export default MapObjectDetailed
