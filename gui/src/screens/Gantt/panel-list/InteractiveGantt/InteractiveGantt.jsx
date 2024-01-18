import React, { useState } from 'react'

import AxisSelector from 'sections/AxisSelector/AxisSelector'
import GanttScale from 'sections/GanttScale/GanttScale'
import GanttBarList from 'sections/GanttBarList/GanttBarList'
import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'
import { CURRENT_FILTER_LIST } from 'util/Constant/FilterConstantList'
import { calcGanttListHeight, calcScale } from 'util/UtilGanttBarList/UtilGanttBarList'
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

  const ganttHeight = calcGanttListHeight({ statDataList })

  const { maxOfAll, scale } = calcScale({ statDataList })

  return (
    <SubPageWrapper>
      <div className='interactive-gantt row-layout space-children--wide'>
        <AxisSelector
          align='right'
          axis='stats'
          currentAxisSelection={currentResponse}
          disabledSelection={currentGroupBy}
          setCurrentAxisSelection={setCurrentResponse}
        />
        <figure className='interactive-gantt__data'>
          <div className='interactive-gantt__scale'>
            <GanttScale
              ariaLabel='interactive statistics list'
              ganttHeight={ganttHeight}
              ganttToggleList={ganttToggleList}
              ganttToggleListIsActive
              scale={scale}
              setGanttTogglelList={setGanttTogglelList}
            />
          </div>
          <GanttBarList
            currentFilterList={currentFilterList}
            maxOfAll={maxOfAll}
            scale={scale}
            statDataList={statDataList}
            ganttToggleList={ganttToggleList}
          />
        </figure>
        <AxisSelector
          axis='groupBy'
          currentAxisSelection={currentGroupBy}
          disabledSelection={currentResponse}
          setCurrentAxisSelection={setCurrentGroupBy}
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
