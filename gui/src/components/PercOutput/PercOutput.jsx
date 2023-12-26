import React from 'react'

import './PercOutput.scss'

function PercOutput({
  totalOnFigure,
  totalAvailableDataPoints,
  unknownCount,
}) {
  const widthOfCurrent = totalOnFigure
    /
    totalAvailableDataPoints
    *
    100

  const widthOfUnknown = unknownCount
    /
    totalAvailableDataPoints
    *
    100

  return (
    <div className='row-layout perc-output'>
      <div
        className='perc-output__current'
        style={{ width: `${(widthOfCurrent).toFixed(0)}px` }}
      />
      <div
        className='perc-output__unknown'
        style={{ width: `${(widthOfUnknown).toFixed(0)}px` }}
      />
    </div>
  )
}

export default PercOutput
