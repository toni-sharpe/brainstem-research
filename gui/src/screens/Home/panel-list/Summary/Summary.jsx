import i18next from 'util/i18next/i18next'
import React from 'react'

import HeadingAndTextPanel from 'components/HeadingAndTextPanel/HeadingAndTextPanel'
import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'
import PageSummary from 'components/PageSummary/PageSummary'

function Summary() {
  return (
    <SubPageWrapper
      heading={i18next.t('Home.summaryPanelLabel')}
      rowLayout={false}
    >
      <HeadingAndTextPanel
        text={<PageSummary />}
      />
    </SubPageWrapper>
  )
}

export default Summary;
