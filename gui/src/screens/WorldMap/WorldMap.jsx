import i18next from 'util/i18next/i18next'
import React, { useState } from 'react'

import blankMapData from 'example-data/WorldMap.example-data'
import graphMapData from 'example-data/WorldMap--with-graphs.example-data'
import centuryPlusPerfTestMapData from 'example-data/WorldMapBasicNumbers.example-data'
import MapSvg from 'sections/MapSvg/MapSvg'
import YearSlider from 'components/YearSlider/YearSlider'
import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import SecondaryNav from 'sections/SecondaryNav/SecondaryNav'
import SecondaryNavButtonList from 'components/SecondaryNavButtonList/SecondaryNavButtonList'
import { secondaryNavLocalStorage } from 'util/UtilLocalStorage/UtilSecondaryNav'

import './WorldMap.scss'

const i18nBase = 'WorldMap'

function WorldMap({ data }) {
  const currentPanel = secondaryNavLocalStorage({ def: 'blank', k: i18nBase })
  const [currentWorldMapPanel, setCurrentPanel] = useState(currentPanel)
  const [currentYear, setCurrentYear] = useState(2024)

  if (!data || data.length === 0) { return null; }

  const commonNavProps = {
    currentPanel: currentWorldMapPanel,
    i18nBase,
    panelList: ['blank', 'graphData', 'centuryPlusPerfTest'],
    setCurrentPanel,
  }

  let mapData
  let startYear = currentYear
  let useYearSlider = false
  switch (commonNavProps.currentPanel) {
    case 'blank':
      mapData = blankMapData[currentYear]
      break;
    case 'graphData':
      mapData = graphMapData
      break;
    case 'centuryPlusPerfTest':
      mapData = centuryPlusPerfTestMapData[currentYear]
      startYear = 1900
      useYearSlider = true
      break;
    default:
      mapData = blankMapData[currentYear]
      break;
  }

  return (
    <PageDetailWrapper
      extraClass='world-map__wrapper'
      i18nBase={i18nBase}
      secondaryNav={(
        <SecondaryNav
          ariaLabel={i18next.t(`${i18nBase}.secondaryNav`)}
        >
          <SecondaryNavButtonList {...commonNavProps} />
        </SecondaryNav>
      )}
    >
      { useYearSlider && (
        <YearSlider
          currentYear={currentYear}
          endYear={2024}
          setCurrentYear={setCurrentYear}
          startYear={startYear}
          yearStep={1}
        />
      ) }
      <div className='world-map'>
        <MapSvg
          mapDetailData={mapData}
        />
      </div>
    </PageDetailWrapper>
  );
}

export default WorldMap;
