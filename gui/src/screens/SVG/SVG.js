import i18next from 'util/i18next/i18next'
import React from 'react'

import DragGraph from 'components/DragGraph/DragGraph'
import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import { calcHue } from 'util/Util/UtilHue'
import { groupByPipe } from 'util/Util/Util'

import './SVG.scss'

const i18nBase = 'SVG'

function SVG({ data }) {
  if (!data || data.length === 0) { return null; }

  const graphKeyList = [
    'care_equipment_4',
    'outcome_type',
    'etiology',
    'care_equipment_1',
    'care_technique_2',
    'care_technique_3',
    'event_count',
    'prime_symptom_level',
  ]

  const graphCount = graphKeyList.length

  return (
    <PageDetailWrapper
      i18nBase={i18nBase}
    >
      <div className='svg__drag-graph-list row-layout'>
        { graphKeyList.map((graphKey, i) => {
          const labelValList = groupByPipe({ k: graphKey })(
            graphKey === 'event_count'
              ? data.filter(({ event_count }) => event_count > 1)
              : data
          )
          return (
            <DragGraph
              color={`hsl(${calcHue({ i, total: graphCount })} 80% 50%`}
              heading={i18next.t(`CommonClinicalDefinitions.${graphKey}`)}
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
