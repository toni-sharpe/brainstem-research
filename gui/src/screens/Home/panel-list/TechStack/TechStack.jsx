import i18next from 'util/i18next/i18next'
import React from 'react'

import HeadingAndTextPanel from 'components/HeadingAndTextPanel/HeadingAndTextPanel'
import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'

const i18nBase = 'TechStack'

function TechStack() {
  return (
    <SubPageWrapper heading={i18next.t('Home.techStackPanelLabel')}>
      <HeadingAndTextPanel
        text={(
          <>
            <p>{i18next.t(`${i18nBase}.paragraph6`)}</p>
            <ul className='home__tech-stack-list space-children--column'>
               <li><b>{i18next.t(`${i18nBase}.techStack1Label`)}</b>{i18next.t(`${i18nBase}.techStack1`)}</li>
               <li><b>{i18next.t(`${i18nBase}.techStack2Label`)}</b>{i18next.t(`${i18nBase}.techStack2`)}</li>
               <li><b>{i18next.t(`${i18nBase}.techStack3Label`)}</b>{i18next.t(`${i18nBase}.techStack3`)}</li>
               <li><b>{i18next.t(`${i18nBase}.techStack4Label`)}</b>{i18next.t(`${i18nBase}.techStack4`)}</li>
               <li><b>{i18next.t(`${i18nBase}.techStack5Label`)}</b>{i18next.t(`${i18nBase}.techStack5`)}</li>
               <li><b>{i18next.t(`${i18nBase}.techStack6Label`)}</b>{i18next.t(`${i18nBase}.techStack6`)}</li>
               <li><b>{i18next.t(`${i18nBase}.techStack7Label`)}</b>{i18next.t(`${i18nBase}.techStack7`)}</li>
               <li><b>{i18next.t(`${i18nBase}.techStack8Label`)}</b>{i18next.t(`${i18nBase}.techStack8`)}</li>
               <li><b>{i18next.t(`${i18nBase}.techStack9Label`)}</b>{i18next.t(`${i18nBase}.techStack9`)}</li>
               <li><b>{i18next.t(`${i18nBase}.techStack10Label`)}</b>{i18next.t(`${i18nBase}.techStack10`)}</li>
               <li><b>{i18next.t(`${i18nBase}.techStack11Label`)}</b>{i18next.t(`${i18nBase}.techStack11`)}</li>
               <li><b>{i18next.t(`${i18nBase}.techStack12Label`)}</b>{i18next.t(`${i18nBase}.techStack12`)}</li>
               <li><b>{i18next.t(`${i18nBase}.techStack13Label`)}</b>{i18next.t(`${i18nBase}.techStack13`)}</li>
               <li><b>{i18next.t(`${i18nBase}.techStack14Label`)}</b>{i18next.t(`${i18nBase}.techStack14`)}</li>
               <li><b>{i18next.t(`${i18nBase}.techStack15Label`)}</b>{i18next.t(`${i18nBase}.techStack15`)}</li>
               <li><b>{i18next.t(`${i18nBase}.techStack16Label`)}</b>{i18next.t(`${i18nBase}.techStack16`)}</li>
               <li><b>{i18next.t(`${i18nBase}.techStack17Label`)}</b>{i18next.t(`${i18nBase}.techStack17`)}</li>
               <li><b>{i18next.t(`${i18nBase}.techStack18Label`)}</b>{i18next.t(`${i18nBase}.techStack18`)}</li>
               <li><b>{i18next.t(`${i18nBase}.techStack19Label`)}</b>{i18next.t(`${i18nBase}.techStack19`)}</li>
               <li><b>{i18next.t(`${i18nBase}.techStack20Label`)}</b>{i18next.t(`${i18nBase}.techStack20`)}</li>

            </ul>
          </>
        )}
      />
    </SubPageWrapper>
  )
}

export default TechStack;
