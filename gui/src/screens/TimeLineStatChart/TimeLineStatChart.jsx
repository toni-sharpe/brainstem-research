import i18next from 'util/i18next/i18next'
import React, { useState } from 'react'

import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import SecondaryNav from 'sections/SecondaryNav/SecondaryNav'
import SecondaryNavButtonList from 'components/SecondaryNavButtonList/SecondaryNavButtonList'
import { CURRENT_FILTER_LIST } from 'util/Constant/FilterConstantList'

import GeneralResponseTimeLineStatChart from './panel-list/GeneralResponseTimeLineStatChart/GeneralResponseTimeLineStatChart'
import InteractiveTimeLineStatChart from './panel-list/InteractiveTimeLineStatChart/InteractiveTimeLineStatChart'

const i18nBase = 'TimeLineStatChart'

function TimeLineStatChart({
  currentFilterList,
  data,
  setTimeLineBarDetailList,
  timeLineBarDetailList,
}) {
  const [statisticListPanel, setTimeLineStatChartPanel] = useState('general')

  if (!data || !data.length) { return null }

  const commonNavProps = {
    currentPanel: statisticListPanel,
    i18nBase,
    panelList: ['general','interactive'],
    setCurrentPanel: setTimeLineStatChartPanel,
  }

  const commonSubPageProps = {
    currentFilterList,
    data,
    setTimeLineBarDetailList,
    timeLineBarDetailList,
  }

  return (
    <PageDetailWrapper
      count={data?.length}
      i18nBase={i18nBase}
      secondaryNav={(
        <SecondaryNav ariaLabel={i18next.t(`${i18nBase}.secondaryNav`)}>
          <SecondaryNavButtonList {...commonNavProps} />
        </SecondaryNav>
      )}
    >
      { statisticListPanel === 'general' && (
        <GeneralResponseTimeLineStatChart {...commonSubPageProps} />
      ) }
      { statisticListPanel === 'interactive' && (
        <InteractiveTimeLineStatChart {...commonSubPageProps} />
      ) }
    </PageDetailWrapper>
  );
}

TimeLineStatChart.defaultProps = {
  currentFilterList: CURRENT_FILTER_LIST,
  data: [],
}

export default TimeLineStatChart;
