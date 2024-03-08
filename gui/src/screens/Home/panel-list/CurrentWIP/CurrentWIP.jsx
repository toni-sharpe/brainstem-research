import i18next from 'util/i18next/i18next'
import React from 'react'

import HeadingAndTextPanel from 'components/HeadingAndTextPanel/HeadingAndTextPanel'
import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'

const i18nBase = 'CurrentWIP'

function CurrentWIP() {
  return (
    <SubPageWrapper heading={i18next.t('Home.currentWIPPanelLabel')}>
      <HeadingAndTextPanel
        text={(
          <>
            <p>{i18next.t(`${i18nBase}.paragraphWIP`)}</p>
            <ul className='home__current-wip-list space-children--column'>
               <li><b>{i18next.t(`${i18nBase}.currentWIP1Label`)}</b>{i18next.t(`${i18nBase}.currentWIP1`)}</li>
               <li><b>{i18next.t(`${i18nBase}.currentWIP2Label`)}</b>{i18next.t(`${i18nBase}.currentWIP2`)}</li>
               <li><b>{i18next.t(`${i18nBase}.currentWIP3Label`)}</b>{i18next.t(`${i18nBase}.currentWIP3`)}</li>
               <li><b>{i18next.t(`${i18nBase}.currentWIP4Label`)}</b>{i18next.t(`${i18nBase}.currentWIP4`)}</li>
               <li><b>{i18next.t(`${i18nBase}.currentWIP5Label`)}</b>{i18next.t(`${i18nBase}.currentWIP5`)}</li>
            </ul>
          </>
        )}
      />
    </SubPageWrapper>
  )
}

export default CurrentWIP;
