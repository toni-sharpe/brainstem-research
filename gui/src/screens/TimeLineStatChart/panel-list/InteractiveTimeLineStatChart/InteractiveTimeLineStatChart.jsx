import React, { useState } from 'react'

import AxisSelector from 'sections/AxisSelector/AxisSelector'
import TimeLineBarListScale from 'sections/TimeLineBarListScale/TimeLineBarListScale'
import TimeLineBarList from 'sections/TimeLineBarList/TimeLineBarList'
import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'
import { CURRENT_FILTER_LIST } from 'util/Constant/FilterConstantList'
import { calcScale } from 'util/UtilTimeLineBarList/UtilTimeLineBarList'
import { calcInteractiveTimeLineBarStatList } from 'util/UtilTimeLineBarList/UtilInteractiveTimeLineBarStatList'

import './InteractiveTimeLineStatChart.scss'

function InteractiveTimeLineStatChart({
  currentFilterList,
  data,
  setTimeLineBarDetailList,
  timeLineBarDetailList,
}) {
  const [currentResponse, setCurrentResponse] = useState('prime_symptom_1')
  const [currentGroupBy, setCurrentGroupBy] = useState('mild_symptom_1')

  const statDataList = calcInteractiveTimeLineBarStatList({ currentGroupBy, currentResponse, data })

  const { maxOfAll, scale } = calcScale({ statDataList })

  return (
    <SubPageWrapper>
      <div className='interactive-statitsic-list row-layout space-children--wide'>
        <AxisSelector
          align='right'
          axis='stats'
          currentAxisSelection={currentResponse}
          disabledSelection={currentGroupBy}
          setCurrentAxisSelection={setCurrentResponse}
        />
        <figure className='interactive-statitsic-list__data'>
          <div className='interactive-statitsic-list__scale'>
            <TimeLineBarListScale
              ariaLabel='interactive statistics list'
              scale={scale}
              setTimeLineBarDetailList={setTimeLineBarDetailList}
              timeLineBarDetailList={timeLineBarDetailList}
              timeLineBarDetailListIsActive
            />
          </div>
          <TimeLineBarList
            currentFilterList={currentFilterList}
            maxOfAll={maxOfAll}
            scale={scale}
            statDataList={statDataList}
            timeLineBarDetailList={timeLineBarDetailList}
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

InteractiveTimeLineStatChart.defaultProps = {
  currentFilterList: CURRENT_FILTER_LIST,
  data: [],
}

export default InteractiveTimeLineStatChart;
