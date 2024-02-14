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
import Gantt from 'screens/Gantt/Gantt';
import TimeLine from 'screens/TimeLine/TimeLine';
import HistogramMaker from 'screens/HistogramMaker/HistogramMaker';
import SVG from 'screens/SVG/SVG';
import WorldMap from 'screens/WorldMap/WorldMap';
import { ORDERED_FILTERS } from 'util/Constant/BaseConstantList'
import { calcFilterList, isAnyFilterSet } from 'util/UtilFilter/UtilFilter'
import { getCurrentUrl } from 'util/Util/Util'

import './responsive.scss'
import './theme.scss'

function App() {
  const currentUrl = getCurrentUrl() || ''

  const [data, setData] = useState([])

  ORDERED_FILTERS.rmDubious = !['AntiBiasToolKit', 'Home', ''].includes(currentUrl)
  ORDERED_FILTERS.nonSevere = ['TimeLine'].includes(currentUrl)
  const [currentFilterList, setCurrentFilterList] = useState(ORDERED_FILTERS)

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
          element={<Home data={filteredData} />}
        />
        { (
          currentUrl === ''
          ||
          currentUrl === 'Home'
        ) && (
          <Route
            path="/Home"
            element={<Home data={filteredData} />}
          />
        ) }
        { currentUrl === 'AntiBiasToolKit' && (
          <Route
            path="AntiBiasToolKit"
            element={<AntiBiasToolKit data={filteredData} />}
          />
        )}
        { currentUrl === 'PrimeSymptomList' && (
          <Route
            path="PrimeSymptomList"
            element={<PrimeSymptomList data={filteredData} />}
          />
        )}
        { currentUrl === 'Scatter' && (
          <Route
            path="Scatter"
            element={<Scatter data={filteredData} />}
          />
        )}
        { currentUrl === 'Gantt' && (
          <Route
            path="Gantt"
            element={<Gantt data={filteredData} />}
          />
        )}
        { currentUrl === 'TimeLine' && (
          <Route
            path="TimeLine"
            element={<TimeLine data={filteredData} />}
          />
        )}
        { currentUrl === 'HistogramMaker' && (
          <Route
            path="HistogramMaker"
            element={<HistogramMaker data={filteredData} />}
          />
        )}
        { currentUrl === 'SVG' && (
          <Route
            path="SVG"
            element={<SVG data={filteredData} />}
          />
        )}
        { currentUrl === 'WorldMap' && (
          <Route
            path="WorldMap"
            element={<WorldMap data={filteredData} />}
          />
        )}
      </Routes>
    </article>
  );
}

export default withTranslation()(App);
