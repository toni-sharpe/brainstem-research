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
    translationSet: { barList: [], groupBy: 'tn/y' }
  }

  const mapDetailData = {
    Ethiopia: {
      barCountPerBlock: 3,
      barMargin: 2,
      blockSize: 92 / 15,
      histogramBarGroupList: [
        ['0-10', { symp_1: [1,  5], test_1: [1, 15], test_3: [1, 35] }],
        ['10-20',{ symp_1: [1, 15], test_1: [1, 34], test_3: [1, 33] }],
        ['20-30',{ symp_1: [1,  2], test_1: [1, 45], test_3: [1, 33] }],
        ['30-40',{ symp_1: [1, 56], test_1: [1, 41], test_3: [1, 23] }],
        ['40-50',{ symp_1: [1, 45], test_1: [1, 28], test_3: [1, 53] }],
      ],
    },
    Eritrea: {
      barCountPerBlock: 3,
      barMargin: 2,
      blockSize: 98 / 6,
      histogramBarGroupList: [
        ['0-10', { symp_1: [1,  5], test_1: [1,115], test_3: [1, 35] }],
        ['10-20',{ symp_1: [1, 15], test_1: [1,  5], test_3: [1,  3] }],
        ['10-20',{ symp_1: [1, 15], test_1: [1,  5], test_3: [1,  3] }],
      ],
    },
    Djibouti: {
      barCountPerBlock: 3,
      barMargin: 2,
      blockSize: 100 / 3,
      histogramBarGroupList: [
        ['0-10', { symp_1: [1,  5], test_1: [1,115], test_3: [1, 35] }],
      ],
    },
    Niger: {
      barCountPerBlock: 3,
      barMargin: 2,
      blockSize: 98 / 6,
      histogramBarGroupList: [
        ['0-10', { symp_1: [1,  5], test_1: [1,115], test_3: [1, 35] }],
        ['10-20',{ symp_1: [1, 15], test_1: [1,  5], test_3: [1,  3] }],
      ],
    },
    Nigeria: {
      barCountPerBlock: 3,
      barMargin: 2,
      blockSize: 98 / 6,
      histogramBarGroupList: [
        ['0-10', { symp_1: [1,  7], test_1: [2,  9], test_3: [3,  3] }],
        ['10-20',{ symp_1: [1,  2], test_1: [3, 18], test_3: [1,212] }],
      ],
    },
    Sudan: {
      barCountPerBlock: 3,
      barMargin: 2,
      blockSize: 96 / 9,
      histogramBarGroupList: [
        ['0-10', { symp_1: [1,  9], test_1: [4, 19], test_3: [1, 13] }],
        ['10-20',{ symp_1: [4, 16], test_1: [2, 17], test_3: [2, 18] }],
        ['20-30',{ symp_1: [4, 14], test_1: [1,  7], test_3: [2, 12] }],
      ],
    },
    "S. Sudan": {
      barCountPerBlock: 3,
      barMargin: 2,
      blockSize: 94 / 12,
      histogramBarGroupList: [
        ['0-10', { symp_1: [1,  9], test_1: [1, 19], test_3: [6, 13] }],
        ['10-20',{ symp_1: [2, 16], test_1: [2, 17], test_3: [1, 18] }],
        ['20-30',{ symp_1: [2, 14], test_1: [1,  7], test_3: [5, 12] }],
        ['40-50',{ symp_1: [3,  2], test_1: [4,  8], test_3: [1,  9] }],
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
