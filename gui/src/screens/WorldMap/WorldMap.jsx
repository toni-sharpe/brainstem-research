import React from 'react'

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
        <MapSvg />
      </div>
    </PageDetailWrapper>
  );
}

export default WorldMap;
