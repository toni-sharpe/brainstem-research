import i18next from 'util/i18next/i18next'
import React, { useState } from 'react'

import Button from 'components/Button/Button'
import DragGraph from 'sections/DragGraph/DragGraph'
import BlockGraph from 'sections/BlockGraph/BlockGraph'
import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import { groupByAndCountPipe } from 'util/UtilDragGraph/UtilDragGraphGrouping'
import severityCircleMapper from 'util/UtilPointData/severityCircleMapper'

import './SVG.scss'

const i18nBase = 'SVG'

function SVG({ data }) {
  const [graphTab, setGraphTab] = useState('drag')
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
            <div className='svg__graph-set-wrapper'>
              <ol className='svg__graph-set-tab-list'>
                <li>
                  <Button
                    label='Drag'
                    onClick={() => setGraphTab('drag')}
                    isSelected={graphTab === 'drag'}
                   />
                </li>
                <li>
                  <Button
                    label='Block'
                    onClick={() => setGraphTab('block')}
                    isSelected={graphTab === 'block'}
                   />
                </li>
              </ol>
              { graphTab === 'drag' && (
                <DragGraph
                  graphKey={graphKey}
                  heading={i18next.t(`CommonClinicalDefinitions.${graphKey}`)}
                  key={`${graphKey}-${i}`}
                  labelValList={labelValList}
                  pointDataMapper={severityCircleMapper}
                />
              ) }
              { graphTab === 'block' && (
                <BlockGraph
                  labelValList={labelValList}
                />
              ) }
            </div>
          )
        }) }
      </div>
    </PageDetailWrapper>
  );
}

export default SVG;
