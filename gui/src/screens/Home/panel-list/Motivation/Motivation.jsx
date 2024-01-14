import i18next from 'util/i18next/i18next'
import React from 'react'

import HeadingAndTextPanel from 'components/HeadingAndTextPanel/HeadingAndTextPanel'
import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'

const i18nBase = 'Motivation'

function Motivation() {
  return (
    <SubPageWrapper heading={i18next.t('Home.motivationPanelLabel')}>
      <HeadingAndTextPanel
        heading={i18next.t(`${i18nBase}.heading2`)}
        text={(
          <>
            <p>{i18next.t(`${i18nBase}.paragraph4`)}</p>
            <p>{i18next.t(`${i18nBase}.paragraph5`)}</p>
          </>
        )}
      />
    </SubPageWrapper>
  )
}

export default Motivation;
