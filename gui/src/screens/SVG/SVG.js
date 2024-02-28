import React from 'react'

import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import { groupByAndCountPipe } from 'util/UtilDragGraph/UtilDragGraphGrouping'

import GraphSet from './GraphSet'
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
  ]

  return (
    <PageDetailWrapper
      i18nBase={i18nBase}
    >
      <div className='svg__graph-list'>
        { graphKeyList.map((graphKey, i) => {
          const labelValList = groupByAndCountPipe({ k: graphKey })(data)
          return (
            <GraphSet graphKey={graphKey} labelValList={labelValList} />
          )
        }) }
      </div>
    </PageDetailWrapper>
  );
}

export default SVG;
