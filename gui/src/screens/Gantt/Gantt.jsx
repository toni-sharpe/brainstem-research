import i18next from 'util/i18next/i18next'
import React, { useState } from 'react'

import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import SecondaryNav from 'sections/SecondaryNav/SecondaryNav'
import SecondaryNavButtonList from 'components/SecondaryNavButtonList/SecondaryNavButtonList'
import { CURRENT_FILTER_LIST } from 'util/Constant/FilterConstantList'
import { GANTT_TOGGLE_LIST } from 'util/Constant/BaseConstantList'

import PathogenesisGantt from './panel-list/PathogenesisGantt/PathogenesisGantt'
import InteractiveGantt from './panel-list/InteractiveGantt/InteractiveGantt'

const i18nBase = 'Gantt'

function Gantt({
  currentFilterList,
  data,
}) {
  const [ganttPanel, setGanttPanel] = useState('general')
  const [ganttToggleList, setGanttTogglelList] = useState(GANTT_TOGGLE_LIST)

  if (!data || !data.length) { return null }

  const commonNavProps = {
    currentPanel: ganttPanel,
    i18nBase,
    panelList: ['general','interactive'],
    setCurrentPanel: setGanttPanel,
  }

  const commonSubPageProps = {
    currentFilterList,
    data,
    setGanttTogglelList,
    ganttToggleList,
  }

  return (
    <PageDetailWrapper
      count={data?.length}
      i18nBase={'Gantt'}
      secondaryNav={(
        <SecondaryNav
          ariaLabel={i18next.t(`${i18nBase}.secondaryNav`)}
          extraClass='gantt'
        >
          <SecondaryNavButtonList {...commonNavProps} />
        </SecondaryNav>
      )}
    >
      { ganttPanel === 'general' && (
        <PathogenesisGantt {...commonSubPageProps} />
      ) }
      { ganttPanel === 'interactive' && (
        <InteractiveGantt {...commonSubPageProps} />
      ) }
    </PageDetailWrapper>
  );
}

Gantt.defaultProps = {
  currentFilterList: CURRENT_FILTER_LIST,
  data: [],
}

export default Gantt;
