import PropTypes from 'prop-types'
import React from 'react'

import { BASE_SVG_OFFSET, BASE_SVG_SCALE } from 'util/Constant/BaseConstantList'
import SvgScalePropType from 'prop-types/SvgScale.prop-type'

function SvgWrapper({
  children,
  offset,
  svgScale,
}) {
  return (
    <svg
      key='svg'
      viewBox={`${offset ? `-${offset}` : 0} ${offset} ${svgScale} ${svgScale}`}
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
