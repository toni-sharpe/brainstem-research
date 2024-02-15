import React from 'react'

import SvgCircle from 'components/SvgCircle/SvgCircle'

function MapAreaCenterPoint({ c }) {
  return (
    <SvgCircle
      fill='#44f'
      fillOpacity={0.7}
      r={2}
      stroke='#44f'
      strokeOpacity={0.7}
      c={c}
    />
  )
}

export default MapAreaCenterPoint
