import i18next from 'util/i18next/i18next'
import React, { useState } from 'react'

import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import SecondaryNav from 'sections/SecondaryNav/SecondaryNav'
import SecondaryNavButtonList from 'components/SecondaryNavButtonList/SecondaryNavButtonList'

import Background from './panel-list/Background/Background'
import Motivation from './panel-list/Motivation/Motivation'
import TechStack from './panel-list/TechStack/TechStack'
import Testing from './panel-list/Testing/Testing'

import './Home.scss'

const i18nBase = 'Home'

function Home() {
  const [currentPanel, setCurrentPanel] = useState('background')

  const commonNavProps = {
    currentPanel,
    i18nBase,
    panelList: ['background', 'motivation', 'techStack', 'testing'],
    setCurrentPanel,
  }

  return (
    <PageDetailWrapper
      i18nBase={''}
      secondaryNav={(
        <SecondaryNav ariaLabel={i18next.t(`${i18nBase}.secondaryNav`)}>
          <SecondaryNavButtonList {...commonNavProps} />
        </SecondaryNav>
      )}
    >
      { currentPanel === 'background' && (
        <Background />
      ) }
      { currentPanel === 'motivation' && (
        <Motivation />
      ) }
      { currentPanel === 'techStack' && (
        <TechStack />
      ) }
      { currentPanel === 'testing' && (
        <Testing />
      ) }
    </PageDetailWrapper>
  );
}

export default Home;
