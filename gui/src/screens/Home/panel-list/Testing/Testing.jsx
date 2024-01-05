import i18next from 'util/i18next/i18next'
import React from 'react'

import HeadingAndTextPanel from 'components/HeadingAndTextPanel/HeadingAndTextPanel'
import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'

const i18nBase = 'Testing'

function Testing() {
  return (
    <SubPageWrapper
      heading={i18next.t('Home.testingPanelLabel')}
    >
      <HeadingAndTextPanel
        heading={i18next.t(`${i18nBase}.heading4`)}
        text={(
          <>
            <p>{i18next.t(`${i18nBase}.paragraph7`)}</p>
            <p>{i18next.t(`${i18nBase}.paragraph8`)}</p>
            <p>{i18next.t(`${i18nBase}.paragraph9`)}</p>
          </>
        )}
      />
    </SubPageWrapper>
  )
}

export default Testing;
