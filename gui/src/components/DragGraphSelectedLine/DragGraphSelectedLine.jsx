import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { calcRadiusOfSelectedPoint } from 'util/UtilDragGraph/UtilDragGraph'
import SvgCircle from 'components/SvgCircle/SvgCircle'
import SvgLine from 'components/SvgLine/SvgLine'

function DragGraphSelectedLine({
  c,
  isSelected,
  labelX,
  labelY,
  r,
  zoom,
}) {
  const isSelectedColor = '#13a'

  const baseSvgLineProps = {
    stroke: isSelectedColor,
    strokeOpacity: 0.0,
    x: [r, r],
    y: [labelX, labelY],
    strokeWidth: 1.0,
  }

  let isSelelectedRadius = 0
  let svgLineProps = baseSvgLineProps

  if (isSelected) {
    isSelelectedRadius = calcRadiusOfSelectedPoint({ zoom })
    svgLineProps = {
      ...baseSvgLineProps,
      strokeOpacity: 1.0,
      strokeWidth: 2.0,
    }
  }

  return (
    <>
      <SvgLine {...svgLineProps} />
      { isSelected && (
        <SvgCircle
          r={isSelelectedRadius}
          c={c}
          fill={isSelectedColor}
          stroke={isSelectedColor}
        />
      ) }
    </>
  )
}

export default DragGraphSelectedLine
