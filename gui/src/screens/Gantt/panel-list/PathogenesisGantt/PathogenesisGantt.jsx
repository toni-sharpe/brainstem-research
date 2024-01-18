import React from 'react'

import GanttScale from 'sections/GanttScale/GanttScale'
import TimeLineStatChart from 'sections/GanttBarList/GanttBarList'
import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'
import { CURRENT_FILTER_LIST } from 'util/Constant/FilterConstantList'
import { calcPathogenesisGantt } from 'util/UtilGanttBarList/UtilPathogenesisGantt'

import './PathogenesisGantt.scss'

function PathogenesisGantt({
  currentFilterList,
  data,
  setGanttTogglelList,
  ganttToggleList,
}) {
  const statDataList = calcPathogenesisGantt({ currentFilterList, data })

  const scale = { totalSteps: 5, stepDivision: 60 }

  return (
    <SubPageWrapper>
      <figure className='pathogenesis-gantt column-layout space-children--wide-column'>
        <div className='pathogenesis-gantt__scale'>
          <GanttScale
            ariaLabel='clinical response timings'
            scale={scale}
            setGanttTogglelList={setGanttTogglelList}
            ganttToggleList={ganttToggleList}
            ganttToggleListIsActive
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
