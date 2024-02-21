import PropTypes from 'prop-types'
import React, { useState } from 'react'

import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'

import './DragGraphPointLabel.scss'

function DragGraphPointLabel({
  isSelected,
  label,
  onFocus,
  size,
  title,
  value,
  x,
  y,
}) {
  const forObjStyle = {
    borderRadius: '3px',
    boxShadow: isSelected
      ? ''
      : '0 0 20px 0 #555',
  }

  const contentStyle = {
    height: `${size}px`,
    width: `${size}px`,
  }

  return(
    <foreignObject
      height={size}
      key={label}
      onFocus={onFocus}
      style={forObjStyle}
      tabIndex={0}
      width={size}
      x={x - size / 2}
      y={y - size / 2}
    >
      <article
        className={
          `drag-graph-point-label ${
            isSelected
              ? 'is-selected'
              : ''
            }`
        }
        style={contentStyle}
      >
        <header className='drag-graph-point-label__text'>{label}</header>
        <section
          className='drag-graph-point-label__num'
          title={title}
        >
          <span>{value}</span>
        </section>
      </article>
    </foreignObject>
  )
}

DragGraphPointLabel.propTypes = {
  isSelected: PropTypes.bool,
  label: PropTypes.string,
  onFocus: PropTypes.func,
  size: PropTypes.number,
  title: PropTypes.string,
  value: NumberOrStringPropType,
  x: PropTypes.number,
  y: PropTypes.number,
}

export default DragGraphPointLabel
