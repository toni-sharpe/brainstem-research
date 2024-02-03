import React from 'react'

import GanttChart from 'sections/GanttChart/GanttChart'
import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'
import { ORDERED_FILTERS } from 'util/Constant/BaseConstantList'
import { calcPathogenesisGantt } from 'util/UtilGanttScreen/UtilPathogenesisGantt'

import './PathogenesisGantt.scss'

function PathogenesisGantt({
  currentFilterList,
  data,
}) {
  const statDataList = calcPathogenesisGantt({ currentFilterList, data })

  return (
    <SubPageWrapper>
      <div className='pathogenesis-gantt__wrapper column-layout space-children--column-with-border'>
        <GanttChart
          currentFilterList={currentFilterList}
          statDataList={statDataList}
        />
      </div>
    </SubPageWrapper>
  );
}

PathogenesisGantt.defaultProps = {
  currentFilterList: ORDERED_FILTERS,
  data: [],
}

export default PathogenesisGantt;
