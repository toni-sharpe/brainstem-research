import React from 'react'

import GanttScale from 'sections/GanttScale/GanttScale'
import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'
import TimeLineStatChart from 'sections/GanttBarList/GanttBarList'
import { calcPathogenesisGantt } from 'util/UtilGanttBarList/UtilPathogenesisGantt'
import { calcGanttListHeight } from 'util/UtilGanttBarList/UtilGanttBarList'
import { CURRENT_FILTER_LIST } from 'util/Constant/FilterConstantList'

import './PathogenesisGantt.scss'

function PathogenesisGantt({
  currentFilterList,
  data,
  setGanttTogglelList,
  ganttToggleList,
}) {
  const statDataList = calcPathogenesisGantt({ currentFilterList, data })

  const scale = { totalSteps: 5, stepDivision: 60 }

  const ganttHeight = calcGanttListHeight({ statDataList })

  return (
    <SubPageWrapper>
      <figure className='pathogenesis-gantt column-layout space-children--wide-column'>
        <div className='pathogenesis-gantt__scale'>
          <GanttScale
            ariaLabel='clinical response timings'
            ganttHeight={ganttHeight}
            ganttToggleList={ganttToggleList}
            ganttToggleListIsActive
            scale={scale}
            setGanttTogglelList={setGanttTogglelList}
          />
        </div>
        <TimeLineStatChart
          currentFilterList={currentFilterList}
          scale={scale}
          ganttToggleList={ganttToggleList}
          statDataList={statDataList}
        />
      </figure>
    </SubPageWrapper>
  );
}

PathogenesisGantt.defaultProps = {
  currentFilterList: CURRENT_FILTER_LIST,
  data: [],
}

export default PathogenesisGantt;
