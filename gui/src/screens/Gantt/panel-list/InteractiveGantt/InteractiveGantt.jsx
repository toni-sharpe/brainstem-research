import React, { useState } from 'react'

import AxisSelector from 'sections/AxisSelector/AxisSelector'
import GanttChart from 'sections/GanttChart/GanttChart'
import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'
import { CURRENT_FILTER_LIST } from 'util/Constant/FilterConstantList'
import { calcScale } from 'util/UtilGanttBarList/UtilGanttBarList'
import { calcInteractiveGantt } from 'util/UtilGanttScreen/UtilInteractiveGantt'

import './InteractiveGantt.scss'

function InteractiveGantt({
  currentFilterList,
  data,
}) {
  const [currentResponse, setCurrentResponse] = useState('prime_symptom_1')
  const [currentGroupBy, setCurrentGroupBy] = useState('mild_symptom_1')

  const statDataList = calcInteractiveGantt({ currentGroupBy, currentResponse, data })

  const { maxOfAll, scale } = calcScale({ statDataList })

  return (
    <SubPageWrapper>
      <div className='interactive-gantt__wrapper row-layout space-children--wide'>
        <div className='interactive-gantt__bar-selector'>
          <AxisSelector
            axis='stats'
            currentAxisSelection={currentResponse}
            disabledSelection={currentGroupBy}
            setCurrentAxisSelection={setCurrentResponse}
          />
        </div>
        <div className='interactive-gantt column-layout space-children--column-with-border'>
          <GanttChart
            currentFilterList={currentFilterList}
            maxOfAll={maxOfAll}
            scale={scale}
            statDataList={statDataList}
          />
        </div>
        <AxisSelector
          align='right'
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
