import i18next from 'util/i18next/i18next'
import React from 'react'

import Button from 'components/Button/Button'

import './MapObjectDetailed.scss'

const i18nBase = 'MapObjectDetailed'

function MapObjectDetailed({
  children,
  closeOnClick,
  countryName,
  isPopulated,
  h,
  w,
  x,
  y,
}) {
  const internalW = isPopulated ? w : 75
  const internalH = isPopulated ? h : 75
  return (
    <foreignObject
      key={'test'}
      x={x - (internalW / 2)}
      y={y - (internalH / 2)}
      width={internalW}
      height={internalH}
    >
      <article
        className='map-object-detailed'
        style={{ height: `${internalH}px`, width: `${internalW}px` }}
      >
        <Button
          extraClass={`map-object-detailed__close-button${isPopulated ? '' : ' no-data'}`}
          label={`${isPopulated ? 'X' : 'NO DATA [X]'}`}
          onClick={closeOnClick}
          size='small'
          style={{
            fontSize: `${isPopulated ? 'var(--font-size--small)' : 'var(--font-size--large)'}`,
            height: `${isPopulated ? '25' : '75'}px`,
            width: `${isPopulated ? '25' : '75'}px`,
          }}
          title={i18next.t(`${i18nBase}.close`, { countryName })}
        />
        { isPopulated && (
          <section className='map-object-detailed__details'>
            { children
                ? children
                : 'Lorem ipsum some detail'
            }
          </section>
        ) }
      </article>
    </foreignObject>
  )
}

MapObjectDetailed.defaultProps = {

}


MapObjectDetailed.propTypes = {

}

export default MapObjectDetailed
