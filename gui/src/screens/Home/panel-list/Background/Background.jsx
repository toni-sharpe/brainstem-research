import i18next from 'util/i18next/i18next'
import React from 'react'

import { SHOW_OWID_EXAMPLE } from 'util/Constant/BaseConstantList'
import HeadingAndTextPanel from 'components/HeadingAndTextPanel/HeadingAndTextPanel'
import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'
import PageSummary from 'components/PageSummary/PageSummary'

import OwidExample from './OwidExample'

const i18nBase = 'Background'

function Background({ data }) {
  return (
    <div className='column-layout space-children--wide-column-with-border'>
      { SHOW_OWID_EXAMPLE && (<OwidExample data={data} />) }
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
    </div>
  )
}

export default Background;
