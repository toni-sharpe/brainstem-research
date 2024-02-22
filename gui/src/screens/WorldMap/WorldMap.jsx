import React from 'react'

import mapDetailData from 'example-data/WorldMap.example-data'
import Histogram from 'sections/Histogram/Histogram'
import MapSvg from 'sections/MapSvg/MapSvg'
import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import { calcAccessibleHue } from 'util/UtilHue/UtilHue'

import './WorldMap.scss'

const i18nBase = 'WorldMap'

function WorldMap({ data }) {
  if (!data || data.length === 0) { return null; }

  const mapDetailProps = {
    hueFn: calcAccessibleHue(),
    translationSet: { barList: [], groupBy: 'ty' }
  }

  return (
    <PageDetailWrapper
      i18nBase={i18nBase}
    >
      <div className='world-map'>
        <MapSvg
          mapDetailData={mapDetailData}
          mapDetailElement={Histogram}
          mapDetailProps={mapDetailProps}
        />
      </div>
    </PageDetailWrapper>
  );
}

export default WorldMap;
