import PropTypes from 'prop-types'
import React from 'react'

import { SVG_OFFSET, SVG_SCALE } from 'util/Constant/BaseConstantList'
import SvgScalePropType from 'prop-types/SvgScale.prop-type'

function SvgWrapper({
  ariaLabel,
  children,
  k,
  extraClass,
  offsetPair,
  offset,
  region,
  style,
  svgScale,
}) {
  const viewBox = offset
    ? `${offset ? `-${offset}` : 0} ${offset} ${svgScale}`
    : svgScale
  return (
    <svg
      aria-label={ariaLabel || null}
      className={extraClass}
      key={k}
      role={region ? 'region' : undefined}
      style={style}
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
  offset: SVG_OFFSET,
  region: false,
  svgScale: SVG_SCALE,
}

SvgWrapper.propTypes = {
  extraClass: PropTypes.string,
  offset: PropTypes.number,
  region: PropTypes.bool,
  style: PropTypes.object,
  svgScale: SvgScalePropType,
}

export default SvgWrapper
