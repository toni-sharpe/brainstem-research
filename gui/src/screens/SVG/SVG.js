import i18next from 'util/i18next/i18next'
import React from 'react'

import DragGraph from 'components/DragGraph/DragGraph'
import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import { groupByPipe } from 'util/Util/Util'

import './SVG.scss'

const i18nBase = 'SVG'

function SVG({ data }) {
  if (!data || data.length === 0) { return null; }

  const careEquipment4 = groupByPipe({ k: 'care_equipment_4' })(data)
  const outcomeType = groupByPipe({ k: 'outcome_type' })(data)
  const etiology = groupByPipe({ k: 'etiology' })(data)
  const careEquipment1 = groupByPipe({ k: 'care_equipment_1' })(data)
  const careTechnique2 = groupByPipe({ k: 'care_technique_2' })(data)
  const careTechnique3 = groupByPipe({ k: 'care_technique_3' })(data)

  return (
    <PageDetailWrapper
      i18nBase={i18nBase}
    >
      <div className='svg__drag-graph-list row-layout'>
        <DragGraph
          color='hsl(0 80% 50%)'
          heading={i18next.t('CommonClinicalDefinitions.care_equipment_4')}
          key='care_equipment_4'
          labelValList={careEquipment4}
        />
        <DragGraph
          color='hsl(60 80% 35%)'
          heading={i18next.t('CommonClinicalDefinitions.outcome_type')}
          key='outcome_type'
          labelValList={outcomeType}
        />
        <DragGraph
          color='hsl(120 80% 45%)'
          heading={i18next.t('CommonClinicalDefinitions.etiology')}
          key='etiology'
          labelValList={etiology}
        />
        <DragGraph
          color='hsl(180 80% 40%)'
          heading={i18next.t('CommonClinicalDefinitions.care_equipment_1')}
          key='care_equipment_1'
          labelValList={careEquipment1}
        />
        <DragGraph
          color='hsl(240 80% 50%)'
          heading={i18next.t('CommonClinicalDefinitions.care_technique_2')}
          key='care_technique_2'
          labelValList={careTechnique2}
        />
        <DragGraph
          color='hsl(300 80% 50%)'
          heading={i18next.t('CommonClinicalDefinitions.care_technique_3')}
          key='care_technique_3'
          labelValList={careTechnique3}
        />
      </div>
    </PageDetailWrapper>
  );
}

export default SVG;
