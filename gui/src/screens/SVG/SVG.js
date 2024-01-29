import i18next from 'util/i18next/i18next'
import React from 'react'
import { type } from 'ramda'

import DragGraph from 'components/DragGraph/DragGraph'
import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import { calcHue } from 'util/Util/UtilHue'
import { groupByAndCountPipe } from 'util/Util/Util'

import './SVG.scss'

const i18nBase = 'SVG'

function SVG({ data }) {
  if (!data || data.length === 0) { return null; }

  const graphKeyList = [
    { k: 'care_equipment_4', fn: d => d.filter(({ care_equipment_4 }) => care_equipment_4 !== '005') },
    'care_equipment_4',
    'outcome_type',
    'etiology',
    'care_equipment_1',
    'care_technique_2',
    'care_technique_3',
    { k: 'event_count', fn: d => d.filter(({ event_count }) => event_count > 1) },
    'prime_symptom_level',
  ]

  const graphCount = graphKeyList.length

  return (
    <PageDetailWrapper
      i18nBase={i18nBase}
    >
      <div className='svg__drag-graph-list row-layout'>
        { graphKeyList.map((graphKey, i) => {
          const labelValList = type(graphKey) === 'String'
            ? groupByAndCountPipe({ k: graphKey })(data)
            : groupByAndCountPipe({ k: graphKey.k })(graphKey.fn(data))
          return (
            <DragGraph
              color={`hsl(${calcHue({ i, total: graphCount })} 80% 50%`}
              heading={i18next.t(`CommonClinicalDefinitions.${graphKey}`)}
              key={`${graphKey}-${i}`}
              labelValList={labelValList}
            />
          )
        }) }
      </div>
    </PageDetailWrapper>
  );
}

export default SVG;
