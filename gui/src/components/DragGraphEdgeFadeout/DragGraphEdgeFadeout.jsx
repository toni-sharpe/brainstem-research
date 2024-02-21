import PropTypes from 'prop-types'
import React, { useState } from 'react'

import SvgCircle from 'components/SvgCircle/SvgCircle'
import SvgXyPropType from 'prop-types/SvgXy.prop-type'

function DragGraphEdgeFadeout({
  c,
}) {
  return (
    <>
      <SvgCircle
        r={475}
        c={c}
        fillOpacity={0.0}
        stroke='#777'
        strokeOpacity={0.075}
        strokeWidth={200}
      />
      <SvgCircle
        r={525}
        c={c}
        fillOpacity={0.0}
        stroke='#777'
        strokeOpacity={0.075}
        strokeWidth={200}
      />
    </>
  )
}

DragGraphEdgeFadeout.propTypes = {
  c: SvgXyPropType
}

export default DragGraphEdgeFadeout
