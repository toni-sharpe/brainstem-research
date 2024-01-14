import i18next from 'util/i18next/i18next'
import React from 'react'

import HeadingAndTextPanel from 'components/HeadingAndTextPanel/HeadingAndTextPanel'
import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'

const i18nBase = 'Background'

function Background() {
  return (
    <SubPageWrapper heading={i18next.t('Home.backgroundPanelLabel')}>
      <HeadingAndTextPanel
        heading={i18next.t(`${i18nBase}.heading1`)}
        text={(
          <>
            <p>{i18next.t(`${i18nBase}.paragraph1`)}</p>
            <p>{i18next.t(`${i18nBase}.paragraph2-1`)}<a href='https://github.com/toni-sharpe/brainstem-research'>{i18next.t(`${i18nBase}.paragraph2Link`)}</a>{i18next.t(`${i18nBase}.paragraph2-2`)}</p>
            <p>{i18next.t(`${i18nBase}.paragraph3`)}</p>
          </>
        )}
      />
    </SubPageWrapper>
  )
}

export default Background;
