import i18next from 'util/i18next/i18next'
import React, { useState } from 'react'

import blankMapData from 'example-data/WorldMap.example-data'
import centuryPlusPerfTestMapData from 'example-data/WorldMapBasicNumbers.example-data'
import InternetUsageData from 'example-data/InternetUsageData.super-min'
import MapSvg from 'sections/MapSvg/MapSvg'
import YearSlider from 'components/YearSlider/YearSlider'
import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import SecondaryNav from 'sections/SecondaryNav/SecondaryNav'
import SecondaryNavButtonList from 'components/SecondaryNavButtonList/SecondaryNavButtonList'
import { secondaryNavLocalStorage } from 'util/UtilLocalStorage/UtilSecondaryNav'
import {
  calcFirstScreenLoadYear,
  calcMapStyle,
} from 'util/UtilWorldMap/UtilWorldMap'

import './WorldMap.scss'

const i18nBase = 'WorldMap'

function WorldMap({ data }) {
  const currentPanel = secondaryNavLocalStorage({ def: 'blank', k: i18nBase })
  const [currentWorldMapPanel, setCurrentPanel] = useState(currentPanel)
  const [currentYear, setCurrentYear] = useState(undefined)

  if (!data || data.length === 0) { return null; }

  const commonNavProps = {
    currentPanel: currentWorldMapPanel,
    i18nBase,
    panelList: ['blank', 'centuryPlusPerfTest', 'internetUse'],
    setCurrentPanel,
  }

  let buttonStep
  let endYear
  let firstLoadYear
  let mapData
  let startYear
  let useYearSlider = false

  switch (commonNavProps.currentPanel) {
    case 'blank':
      mapData = blankMapData
      break;
    case 'centuryPlusPerfTest':
      startYear = 1900
      endYear = 2024
      buttonStep = 10
      firstLoadYear = calcFirstScreenLoadYear({
        currentYear,
        startYear,
        endYear,
      })
      mapData = centuryPlusPerfTestMapData[firstLoadYear]
      useYearSlider = true
      break;
    case 'internetUse':
      startYear = 1988
      endYear = 2021
      buttonStep = 3
      firstLoadYear = calcFirstScreenLoadYear({
        currentYear,
        startYear,
        endYear,
      })
      const internetMapData = calcMapStyle({
        data: InternetUsageData,
        dataStart: 1960,
        dataEnd: 2022,
        step: 'year',
        start: startYear,
        end: endYear,
      })
      mapData = internetMapData[firstLoadYear]
      useYearSlider = true
      break;
    default:
      mapData = blankMapData
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
          buttonStep={buttonStep}
          currentYear={firstLoadYear}
          endYear={endYear}
          setCurrentYear={setCurrentYear}
          startYear={startYear}
          yearStep={1}
        />
      ) }
      <div className='world-map'>
        <MapSvg
          currentYear={firstLoadYear}
          mapDetailData={mapData}
        />
      </div>
    </PageDetailWrapper>
  );
}

export default WorldMap;
