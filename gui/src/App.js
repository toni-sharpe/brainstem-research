import * as ramda from 'ramda'
import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { withTranslation } from 'react-i18next';

import baseApiCall from 'api-calls/BaseApiCall'
import AntiBiasToolKit from 'screens/AntiBiasToolKit/AntiBiasToolKit';
import Header from 'sections/Header/Header'
import Home from 'screens/Home/Home';
import PrimeSymptomList from 'screens/PrimeSymptomList/PrimeSymptomList';
import Scatter from 'screens/Scatter/Scatter';
import TimeLineStatChart from 'screens/TimeLineStatChart/TimeLineStatChart';
import TimeLine from 'screens/TimeLine/TimeLine';
import HistogramMaker from 'screens/HistogramMaker/HistogramMaker';
import CorrelationHeatmap from 'screens/CorrelationHeatmap/CorrelationHeatmap';
import { STAT_BAR_DETAIL_LIST } from 'util/Constant/BaseConstantList'
import { CURRENT_FILTER_LIST } from 'util/Constant/FilterConstantList'
import { calcFilterList, isAnyFilterSet } from 'util/UtilFilter/UtilFilter'
import { getCurrentUrl } from 'util/Util/Util'

function App() {
  const currentUrl = getCurrentUrl() || ''

  const [data, setData] = useState([])

  CURRENT_FILTER_LIST.primeSymptomType = ['anti-bias-tool-kit', 'prime-symptom-list'].includes(currentUrl)
  CURRENT_FILTER_LIST.rmDubious = !['AntiBiasToolKit'].includes(currentUrl)
  CURRENT_FILTER_LIST.nonFatal = ['TimeLine'].includes(currentUrl)
  const [currentFilterList, setCurrentFilterList] = useState(CURRENT_FILTER_LIST)

  const [timeLineBarDetailList, setTimeLineBarDetailList] = useState(STAT_BAR_DETAIL_LIST)

  useEffect(baseApiCall({ // eslint-disable-line react-hooks/exhaustive-deps
    endPoint: currentUrl,
    setData
  }), [currentUrl, setData])

  const filteredData = isAnyFilterSet({ currentFilterList })
    ? ramda.pipe(...calcFilterList({ currentFilterList }))(data)
    : data

  return (
    <article className='app-wrapper'>
      <Header 
        currentFilterList={currentFilterList}
        currentUrl={currentUrl}
        setCurrentFilterList={setCurrentFilterList}
      />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/Home"
          element={<Home />}
        />
        <Route
          path="AntiBiasToolKit"
          element={<AntiBiasToolKit data={filteredData} />}
        />
        <Route
          path="PrimeSymptomList"
          element={<PrimeSymptomList data={filteredData} />}
        />
        <Route
          path="Scatter"
          element={
            <Scatter
              data={filteredData}
              setTimeLineBarDetailList={setTimeLineBarDetailList}
              timeLineBarDetailList={timeLineBarDetailList}
            />
          }
        />
        <Route
          path="TimeLineStatChart"
          element={
            <TimeLineStatChart
              data={filteredData}
              setTimeLineBarDetailList={setTimeLineBarDetailList}
              timeLineBarDetailList={timeLineBarDetailList}
            />
          }
        />
        <Route
          path="TimeLine"
          element={<TimeLine data={filteredData} />}
        />
        <Route
          path="HistogramMaker"
          element={<HistogramMaker data={filteredData} />}
        />
        <Route
          path="CorrelationHeatmap"
          element={<CorrelationHeatmap data={filteredData} />}
        />
      </Routes>
    </article>
  );
}

export default withTranslation()(App);
