import React from 'react'

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

  const mapDetailData = {
    Ethiopia: {
      barCountPerBlock: 2,
      barMargin: 2,
      blockSize: 92 / 10,
      histogramBarGroupList: [
        ['0-10', { symp_1: [1,  5], test_1: [1, 15] }],
        ['10-20',{ symp_1: [1, 15], test_1: [1, 34] }],
        ['20-30',{ symp_1: [1,  2], test_1: [1, 45] }],
        ['30-40',{ symp_1: [1, 56], test_1: [1, 41] }],
        ['40-50',{ symp_1: [1, 45], test_1: [1, 28] }],
      ],
    },
    Eritrea: {
      barCountPerBlock: 2,
      barMargin: 2,
      blockSize: 98 / 4,
      histogramBarGroupList: [
        ['0-10', { symp_1: [1,  5], test_1: [1,115] }],
        ['10-20',{ symp_1: [1, 15], test_1: [1,  5] }],
        ['10-20',{ symp_1: [1, 15], test_1: [1,  5] }],
      ],
    },
    Djibouti: {
      barCountPerBlock: 2,
      barMargin: 2,
      blockSize: 100 / 2,
      histogramBarGroupList: [
        ['0-10', { symp_1: [1,  5], test_1: [1,115] }],
      ],
    },
    Niger: {
      barCountPerBlock: 2,
      barMargin: 2,
      blockSize: 98 / 4,
      histogramBarGroupList: [
        ['0-10', { symp_1: [1,  5], test_1: [1,115] }],
        ['10-20',{ symp_1: [1, 15], test_1: [1,  5] }],
      ],
    },
    Nigeria: {
      barCountPerBlock: 2,
      barMargin: 2,
      blockSize: 98 / 4,
      histogramBarGroupList: [
        ['0-10', { symp_1: [1,  7], test_1: [2,  9] }],
        ['10-20',{ symp_1: [1,  2], test_1: [3, 18] }],
      ],
    },
    Sudan: {
      barCountPerBlock: 2,
      barMargin: 2,
      blockSize: 96 / 6,
      histogramBarGroupList: [
        ['0-10', { symp_1: [1,  9], test_1: [4, 19] }],
        ['10-20',{ symp_1: [4, 16], test_1: [2, 17] }],
        ['20-30',{ symp_1: [4, 14], test_1: [1,  7] }],
      ],
    },
    "S. Sudan": {
      barCountPerBlock: 2,
      barMargin: 2,
      blockSize: 94 / 8,
      histogramBarGroupList: [
        ['0-10', { symp_1: [1,  9], test_1: [1, 19] }],
        ['10-20',{ symp_1: [2, 16], test_1: [2, 17] }],
        ['20-30',{ symp_1: [2, 14], test_1: [1,  7] }],
        ['40-50',{ symp_1: [3,  2], test_1: [4,  8] }],
      ],
    },
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
