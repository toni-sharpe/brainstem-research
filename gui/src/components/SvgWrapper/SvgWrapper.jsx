import PropTypes from 'prop-types'
import React from 'react'

import { BASE_SVG_OFFSET, BASE_SVG_SCALE } from 'util/Constant/BaseConstantList'
import SvgScalePropType from 'prop-types/SvgScale.prop-type'

function SvgWrapper({
  children,
  k,
  extraClass,
  offsetPair,
  offset,
  svgScale,
}) {
  const viewBox = offset
    ? `${offset ? `-${offset}` : 0} ${offset} ${svgScale}`
    : svgScale
  return (
    <svg
      className={extraClass}
      key={k}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}

SvgWrapper.defaultProps = {
  extraClass: '',
  k: 'svg',
  offset: BASE_SVG_OFFSET,
  svgScale: BASE_SVG_SCALE,
}

SvgWrapper.propTypes = {
  extraClass: PropTypes.string,
  offset: PropTypes.number,
  svgScale: SvgScalePropType,
}

export default SvgWrapper
