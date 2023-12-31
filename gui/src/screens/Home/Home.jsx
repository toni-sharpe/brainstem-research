import { map, pipe } from 'ramda'
import i18next from 'util/i18next/i18next'
import React, { useState } from 'react'

import Button from 'components/Button/Button'
import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import SecondaryNav from 'sections/SecondaryNav/SecondaryNav'
import { secondaryNavProps } from 'util/UtilNav/UtilNav'

import Background from './sub-page/Background/Background'
import Motivation from './sub-page/Motivation/Motivation'
import TechStack from './sub-page/TechStack/TechStack'
import Testing from './sub-page/Testing/Testing'

import './Home.scss'

const i18nBase = 'Home'

function Home() {
  const [currentPanel, setCurrentPanel] = useState('background')

  const commonNavProps = {
    currentPanel,
    i18nBase,
    setCurrentPanel,
  }

  return (
    <PageDetailWrapper
      i18nBase={''}
      secondaryNav={(
        <SecondaryNav ariaLabel={i18next.t(`${i18nBase}.secondaryNav`)}>
          { pipe(
              map(k => <li key={k}><Button {...secondaryNavProps({ ...commonNavProps, k })} /></li>),
            )(['background', 'motivation', 'techStack', 'testing'])
          }
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
