import React from 'react'

import GanttChart from 'sections/GanttChart/GanttChart'
import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'
import GanttToggleList from 'sections/GanttToggleList/GanttToggleList'
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

  return (
    <SubPageWrapper>
      <div style={{ width: '100%' }}>
        <GanttChart
          currentFilterList={currentFilterList}
          statDataList={statDataList}
          ganttToggleList={ganttToggleList}
        />
        <GanttToggleList
          setGanttTogglelList={setGanttTogglelList}
          ganttToggleList={ganttToggleList}
        />
      </div>
    </SubPageWrapper>
  );
}

PathogenesisGantt.defaultProps = {
  currentFilterList: CURRENT_FILTER_LIST,
  data: [],
}

export default PathogenesisGantt;
