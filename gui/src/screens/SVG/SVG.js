import React from 'react'

import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import { groupByAndCountPipe } from 'util/UtilDragGraph/UtilDragGraphGrouping'
import GraphSet from 'sections/GraphSet/GraphSet'

import './SVG.scss'

const i18nBase = 'SVG'

function SVG({ data }) {
  if (!data || data.length === 0) { return null; }

  const graphKeyList = [
    'care_equipment_4',
    'outcome_type',
    'etiology',
    'care_technique_1',
    'care_equipment_1',
    'care_technique_2',
    'prime_symptom_level',
    'care_site',
    'consultant_doctor',
    'source_country',
    'outlier',
    'care_technique_3', [
      'care_technique_4',
      'care_technique_5',
      'care_equipment_2',
      'care_equipment_3',
      'care_technique_6',
      'care_technique_7',
    ]
  ]

  return (
    <PageDetailWrapper
      i18nBase={i18nBase}
    >
      <div className='svg__graph-list'>
        { graphKeyList.map((graphKey, i) => {
          const labelValList = groupByAndCountPipe({ k: graphKey })(data)
          return (
            <GraphSet
              graphKey={graphKey}
              key={graphKey}
              labelValList={labelValList}
            />
          )
        }) }
      </div>
    </PageDetailWrapper>
  );
}

export default SVG;
