import i18next from 'util/i18next/i18next'
import React, { useState } from 'react'

import blankMapData from 'example-data/WorldMap.example-data'
import fillTestMapData from 'example-data/WorldMapBasicNumbers.example-data'
import MapSvg from 'sections/MapSvg/MapSvg'
import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import SecondaryNav from 'sections/SecondaryNav/SecondaryNav'
import SecondaryNavButtonList from 'components/SecondaryNavButtonList/SecondaryNavButtonList'
import { secondaryNavLocalStorage } from 'util/UtilLocalStorage/UtilSecondaryNav'

import './WorldMap.scss'

const i18nBase = 'WorldMap'

function WorldMap({ data }) {
  const currentPanel = secondaryNavLocalStorage({ def: 'blank', k: i18nBase })
  const [currentWorldMapPanel, setCurrentPanel] = useState(currentPanel)

  if (!data || data.length === 0) { return null; }

  const commonNavProps = {
    currentPanel: currentWorldMapPanel,
    i18nBase,
    panelList: ['blank', 'fillTest'],
    setCurrentPanel,
  }

  let mapData
  switch (commonNavProps.currentPanel) {
    case 'blank':
      mapData = blankMapData
      break;
    case 'fillTest':
      mapData = fillTestMapData
      break;
    default:
      mapData = blankMapData
      break;
  }

  return (
    <PageDetailWrapper
      i18nBase={i18nBase}
      secondaryNav={(
        <SecondaryNav
          ariaLabel={i18next.t(`${i18nBase}.secondaryNav`)}
          extraClass='research'
        >
          <SecondaryNavButtonList {...commonNavProps} />
        </SecondaryNav>
      )}
    >
      <div className='world-map'>
        <MapSvg
          mapDetailData={mapData}
        />
      </div>
    </PageDetailWrapper>
  );
}

export default WorldMap;
