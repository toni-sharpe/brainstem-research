import i18next from 'util/i18next/i18next'
import React, { useState } from 'react'

import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import SecondaryNav from 'sections/SecondaryNav/SecondaryNav'
import SecondaryNavButtonList from 'components/SecondaryNavButtonList/SecondaryNavButtonList'
import { secondaryNavLocalStorage } from 'util/UtilLocalStorage/UtilSecondaryNav'

import Background from './panel-list/Background/Background'
import Motivation from './panel-list/Motivation/Motivation'
import TechStack from './panel-list/TechStack/TechStack'
import Testing from './panel-list/Testing/Testing'
import Summary from './panel-list/Summary/Summary'

import './Home.scss'

const i18nBase = 'Home'

function Home() {
  const currentPanel = secondaryNavLocalStorage({ def: 'background', k: i18nBase })
  const [currentHomePanel, setCurrentPanel] = useState(currentPanel)

  const commonNavProps = {
    currentPanel: currentHomePanel,
    i18nBase,
    panelList: ['background', 'motivation', 'techStack', 'testing', 'summary'],
    setCurrentPanel,
  }

  return (
    <PageDetailWrapper
      i18nBase={''}
      secondaryNav={(
        <SecondaryNav
          ariaLabel={i18next.t(`${i18nBase}.secondaryNav`)}
          extraClass='research'
        >
          <SecondaryNavButtonList {...commonNavProps} />
        </SecondaryNav>
      )}
    >
      { currentHomePanel === 'background' && (
        <Background />
      ) }
      { currentHomePanel === 'motivation' && (
        <Motivation />
      ) }
      { currentHomePanel === 'techStack' && (
        <TechStack />
      ) }
      { currentHomePanel === 'testing' && (
        <Testing />
      ) }
      { currentHomePanel === 'summary' && (
        <Summary />
      ) }
    </PageDetailWrapper>
  );
}

export default Home;
