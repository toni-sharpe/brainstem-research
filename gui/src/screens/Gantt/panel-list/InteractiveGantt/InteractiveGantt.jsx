import React, { useState } from 'react'

import AxisSelector from 'sections/AxisSelector/AxisSelector'
import GanttChart from 'sections/GanttChart/GanttChart'
import GanttToggleList from 'sections/GanttToggleList/GanttToggleList'
import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'
import { CURRENT_FILTER_LIST } from 'util/Constant/FilterConstantList'
import { calcScale } from 'util/UtilGanttBarList/UtilGanttBarList'
import { calcInteractiveGantt } from 'util/UtilGanttBarList/UtilInteractiveGantt'

import './InteractiveGantt.scss'

function InteractiveGantt({
  currentFilterList,
  data,
  setGanttTogglelList,
  ganttToggleList,
}) {
  const [currentResponse, setCurrentResponse] = useState('prime_symptom_1')
  const [currentGroupBy, setCurrentGroupBy] = useState('mild_symptom_1')

  const statDataList = calcInteractiveGantt({ currentGroupBy, currentResponse, data })

  const { maxOfAll, scale } = calcScale({ statDataList })

  return (
    <SubPageWrapper>
      <div style={{ width: '100%' }}>
        <div className='interactive-gantt row-layout space-children--wide'>
          <div className='interactive-gantt__bar-selector'>
            <AxisSelector
              align='right'
              axis='stats'
              currentAxisSelection={currentResponse}
              disabledSelection={currentGroupBy}
              setCurrentAxisSelection={setCurrentResponse}
            />
          </div>
          <GanttChart
            currentFilterList={currentFilterList}
            ganttToggleList={ganttToggleList}
            maxOfAll={maxOfAll}
            scale={scale}
            statDataList={statDataList}
          />
          <AxisSelector
            axis='groupBy'
            currentAxisSelection={currentGroupBy}
            disabledSelection={currentResponse}
            setCurrentAxisSelection={setCurrentGroupBy}
          />
        </div>
        <GanttToggleList
          setGanttTogglelList={setGanttTogglelList}
          ganttToggleList={ganttToggleList}
        />
      </div>
    </SubPageWrapper>
  );
}

InteractiveGantt.defaultProps = {
  currentFilterList: CURRENT_FILTER_LIST,
  data: [],
}

export default InteractiveGantt;
