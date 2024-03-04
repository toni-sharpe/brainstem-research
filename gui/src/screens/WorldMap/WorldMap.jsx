import React from 'react'

// import mapDetailData from 'example-data/WorldMap.example-data'
import mapDetailData from 'example-data/WorldMapBasicNumbers.example-data'
import MapSvg from 'sections/MapSvg/MapSvg'
import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'

import './WorldMap.scss'

const i18nBase = 'WorldMap'

function WorldMap({ data }) {
  if (!data || data.length === 0) { return null; }

  return (
    <PageDetailWrapper
      i18nBase={i18nBase}
    >
      <div className='world-map'>
        <MapSvg
          mapDetailData={mapDetailData}
        />
      </div>
    </PageDetailWrapper>
  );
}

export default WorldMap;
