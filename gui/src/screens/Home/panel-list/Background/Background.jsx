import i18next from 'util/i18next/i18next'
import React from 'react'

import HeadingAndTextPanel from 'components/HeadingAndTextPanel/HeadingAndTextPanel'
import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'
import PageSummary from 'components/PageSummary/PageSummary'

const i18nBase = 'Background'

function Background() {
  return (
    <SubPageWrapper
      heading={i18next.t('Home.backgroundPanelLabel')}
      rowLayout={false}
    >
      <div className='column-layout space-children--wide-column-with-border'>
        <HeadingAndTextPanel
          text={(
            <>
              <p>{i18next.t(`${i18nBase}.paragraph1`)}</p>
              <p>{i18next.t(`${i18nBase}.paragraph2`)}</p>
              <p>{i18next.t(`${i18nBase}.paragraph3`)}</p>
            </>
          )}
        />
        <HeadingAndTextPanel
          heading={i18next.t(`Home.summaryPanelLabel`)}
          text={<PageSummary />}
        />
      </div>
    </SubPageWrapper>
  )
}

export default Background;
