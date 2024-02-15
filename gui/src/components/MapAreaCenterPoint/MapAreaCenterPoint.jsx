import React from 'react'

import SvgCircle from 'components/SvgCircle/SvgCircle'

function MapAreaCenterPoint({ c, r }) {
  return (
    <SvgCircle
      fill='#44f'
      fillOpacity={0.7}
      r={r}
      stroke='#44f'
      strokeOpacity={0.7}
      c={c}
    />
  )
}

export default MapAreaCenterPoint
