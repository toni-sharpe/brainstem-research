import i18next from 'util/i18next/i18next'
import React from 'react'
import { type } from 'ramda'

import DragGraph from 'sections/DragGraph/DragGraph'
import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import { calcHue } from 'util/UtilHue/UtilHue'
import { groupByAndCountPipe } from 'util/UtilDragGraph/UtilDragGraphGrouping'

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
              graphKey={graphKey}
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
