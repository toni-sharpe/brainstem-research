import React from 'react'

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
  // const [ganttBarZoom, setGanttBarZoom] = useState(100)
  // const [ganttBarScroll, setGanttBarScroll] = useState(0)

  const ganttHeight = calcGanttListHeight({ statDataList })

  return (
    <figure
      className='gantt-chart column-layout space-children--wide-column'
    >
      <div className='gantt-chart__scale'>
        <GanttScale
          ariaLabel='clinical response timings'
          ganttHeight={ganttHeight}
          scale={scale}
        />
      </div>
      <GanttBarList
        currentFilterList={currentFilterList}
        maxOfAll={maxOfAll}
        scale={scale}
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
