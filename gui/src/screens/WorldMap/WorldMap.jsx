import i18next from 'util/i18next/i18next'
import React from 'react'

import MapSvg from 'sections/MapSvg/MapSvg'
import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import { groupByAndCountPipe } from 'util/UtilDragGraph/UtilDragGraphGrouping'

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
