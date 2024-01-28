import React from 'react'

import { BASE_SVG_SCALE } from 'util/Constant/BaseConstantList'
import SvgScalePropType from 'prop-types/SvgScale.prop-type'

function SvgWrapper({
  children,
  svgScale,
}) {
  return (
    <svg
      key='svg'
      viewBox={`0 0 ${svgScale} ${svgScale}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  )
}

SvgWrapper.defaultProps = {
  svgScale: BASE_SVG_SCALE,
}

SvgWrapper.propTypes = {
  svgScale: SvgScalePropType,
}

export default SvgWrapper
