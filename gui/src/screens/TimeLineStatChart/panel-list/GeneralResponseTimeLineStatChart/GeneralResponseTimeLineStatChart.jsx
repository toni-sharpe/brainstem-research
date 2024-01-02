import React from 'react'

import TimeLineBarListScale from 'sections/TimeLineBarListScale/TimeLineBarListScale'
import TimeLineStatChart from 'sections/TimeLineBarList/TimeLineBarList'
import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'
import { CURRENT_FILTER_LIST } from 'util/Constant/FilterConstantList'
import { calcGeneralResponseTimeLineBarStatList } from 'util/UtilTimeLineBarList/UtilGeneralResponseTimeLineBarList'

import './GeneralResponseTimeLineStatChart.scss'

function GeneralResponseTimeLineStatChart({
  currentFilterList,
  data,
  setTimeLineBarDetailList,
  timeLineBarDetailList,
}) {
  const statDataList = calcGeneralResponseTimeLineBarStatList({ currentFilterList, data })

  const scale = { totalSteps: 5, stepDivision: 60 }

  return (
    <SubPageWrapper>
      <figure className='general-response-time-list column-layout space-children--wide-column'>
        <div className='general-response-time-list__scale'>
          <TimeLineBarListScale
            ariaLabel='clinical response timings'
            scale={scale}
            setTimeLineBarDetailList={setTimeLineBarDetailList}
            timeLineBarDetailList={timeLineBarDetailList}
            timeLineBarDetailListIsActive
          />
        </div>
        <TimeLineStatChart
          currentFilterList={currentFilterList}
          scale={scale}
          timeLineBarDetailList={timeLineBarDetailList}
          statDataList={statDataList}
        />
      </figure>
    </SubPageWrapper>
  );
}

GeneralResponseTimeLineStatChart.defaultProps = {
  currentFilterList: CURRENT_FILTER_LIST,
  data: [],
}

export default GeneralResponseTimeLineStatChart;
