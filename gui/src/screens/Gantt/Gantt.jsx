import i18next from 'util/i18next/i18next'
import React, { useState } from 'react'

import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import SecondaryNav from 'sections/SecondaryNav/SecondaryNav'
import SecondaryNavButtonList from 'components/SecondaryNavButtonList/SecondaryNavButtonList'
import { ORDERED_FILTERS } from 'util/Constant/BaseConstantList'
import { secondaryNavLocalStorage } from 'util/UtilLocalStorage/UtilSecondaryNav'

import PathogenesisGantt from './panel-list/PathogenesisGantt/PathogenesisGantt'
import InteractiveGantt from './panel-list/InteractiveGantt/InteractiveGantt'

const i18nBase = 'Gantt'

function Gantt({
  currentFilterList,
  data,
}) {
  const currentPanel = secondaryNavLocalStorage({ def: 'pathogenesis', k: i18nBase })
  const [ganttPanel, setGanttPanel] = useState(currentPanel)

  if (!data || !data.length) { return null }

  const commonNavProps = {
    currentPanel: ganttPanel,
    i18nBase,
    panelList: ['pathogenesis', 'interactive'],
    setCurrentPanel: setGanttPanel,
  }

  const commonSubPageProps = {
    currentFilterList,
    data,
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
      { ganttPanel === 'pathogenesis' && (
        <PathogenesisGantt {...commonSubPageProps} />
      ) }
      { ganttPanel === 'interactive' && (
        <InteractiveGantt {...commonSubPageProps} />
      ) }
    </PageDetailWrapper>
  );
}

Gantt.defaultProps = {
  currentFilterList: ORDERED_FILTERS,
  data: [],
}

export default Gantt;
