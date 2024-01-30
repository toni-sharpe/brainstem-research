import PropTypes from 'prop-types'
import React from 'react'

import { BASE_SVG_OFFSET, BASE_SVG_SCALE } from 'util/Constant/BaseConstantList'
import SvgScalePropType from 'prop-types/SvgScale.prop-type'

function SvgWrapper({
  children,
  offsetPair,
  offset,
  svgScale,
}) {
  const viewBox = offsetPair
    ? `${offsetPair} ${svgScale} ${svgScale}`
    : `${offset ? `-${offset}` : 0} ${offset} ${svgScale} ${svgScale}`
  return (
    <svg
      key='svg'
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}

SvgWrapper.defaultProps = {
  offset: BASE_SVG_OFFSET,
  svgScale: BASE_SVG_SCALE,
}

SvgWrapper.propTypes = {
  offset: PropTypes.number,
  svgScale: SvgScalePropType,
}

export default SvgWrapper
