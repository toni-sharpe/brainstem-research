import React from 'react'

import SvgCircle from 'components/SvgCircle/SvgCircle'

function MapAreaCenterPoint({ c, r }) {
  return (
    <SvgCircle
      c={c}
      fill='#44f'
      fillOpacity={0.6}
      r={r}
      stroke='#44f'
      strokeOpacity={1}
    />
  )
}

export default MapAreaCenterPoint
