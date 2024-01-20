import React, { useState } from 'react'

import Button from 'components/Button/Button'
import GanttBarList from 'sections/GanttBarList/GanttBarList'
import GanttScale from 'sections/GanttScale/GanttScale'
import { GANTT_SCALE_DEFAULT } from 'util/Constant/BaseConstantList'
import { calcGanttListHeight } from 'util/UtilGanttBarList/UtilGanttBarList'

import './GanttChart.scss'

function GanttChart({
  currentFilterList,
  ganttToggleList,
  maxOfAll,
  scale,
  statDataList,
}) {
  const [firstStep, setFirstStep] = useState(0)
  const [lastStep, setLastStep] = useState(scale.totalSteps)

  const zoomLevel = lastStep - firstStep

  const ganttHeight = calcGanttListHeight({ statDataList })

  return (
    <figure
      className='gantt-chart column-layout space-children--wide-column'
    >
      <div className='gantt-chart__zoom-buttons row-layout'>
        <ol className='row-layout space-children'>
          <li><Button label='1' onClick={() => { setFirstStep(0); setLastStep(1) }}/></li>
          <li><Button label='2' onClick={() => { setFirstStep(1); setLastStep(2) }}/></li>
          <li><Button label='3' onClick={() => { setFirstStep(2); setLastStep(3) }}/></li>
          <li><Button label='4' onClick={() => { setFirstStep(3); setLastStep(4) }}/></li>
        </ol>
        <ol className='row-layout space-children'>
          <li><Button label='1-2' onClick={() => { setFirstStep(0); setLastStep(2) }}/></li>
          <li><Button label='2-3' onClick={() => { setFirstStep(1); setLastStep(3) }}/></li>
          <li><Button label='3-4' onClick={() => { setFirstStep(2); setLastStep(4) }}/></li>
        </ol>
        <ol className='row-layout space-children'>
          <li><Button label='1-3' onClick={() => { setFirstStep(0); setLastStep(3) }}/></li>
          <li><Button label='2-4' onClick={() => { setFirstStep(1); setLastStep(4) }}/></li>
        </ol>
        <ol className='row-layout space-children'>
          <li><Button label='All' onClick={() => { setFirstStep(0); setLastStep(4) }}/></li>
        </ol>
      </div>
      <GanttScale
        ariaLabel='clinical response timings'
        ganttHeight={ganttHeight}
        scale={{ ...scale, firstStep, lastStep }}
      />
      <GanttBarList
        currentFilterList={currentFilterList}
        maxOfAll={maxOfAll}
        scale={{ ...scale, firstStep, lastStep }}
        ganttToggleList={ganttToggleList}
        statDataList={statDataList}
      />
    </figure>
  )
}

GanttChart.defaultProps = {
  scale: GANTT_SCALE_DEFAULT,
}

export default GanttChart
