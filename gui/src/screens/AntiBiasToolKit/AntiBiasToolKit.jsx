import i18next from 'util/i18next/i18next'
import React, { useState } from 'react'

import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import SecondaryNav from 'sections/SecondaryNav/SecondaryNav'
import SecondaryNavButtonList from 'components/SecondaryNavButtonList/SecondaryNavButtonList'

import BiasedCorrelationSim from './panel-list/BiasedCorrelationSim/BiasedCorrelationSim'
import BiasedJudgementSim from './panel-list/BiasedJudgementSim/BiasedJudgementSim'
import BiasedTimingSim from './panel-list/BiasedTimingSim/BiasedTimingSim'

const i18nBase = 'AntiBiasToolKit'

function AntiBiasToolKit({ data }) {
  const [antiBiasToolKitPanel, setAntiBiasToolKitPanel] = useState('correlation')

  const {
    biased_test_cases: biasedTestCases,
    prime_symptom_cases: primeSymptomCases,
    scatter_cases: scatterCases,
  } = data

  const commonNavProps = {
    currentPanel: antiBiasToolKitPanel,
    i18nBase,
    panelList: ['correlation', 'timing', 'judgement'],
    setCurrentPanel: setAntiBiasToolKitPanel,
  }

  let antiBiasToolKitData

  switch(antiBiasToolKitPanel) {
    case 'judgement':
      antiBiasToolKitData = biasedTestCases
      break
    case 'timing':
      antiBiasToolKitData = primeSymptomCases
      break
    case 'correlation':
      antiBiasToolKitData = scatterCases
      break
    default:
      antiBiasToolKitData = []
  }

  return (
    <PageDetailWrapper
      count={antiBiasToolKitData?.length}
      i18nBase={i18nBase}
      secondaryNav={(
        <SecondaryNav
          ariaLabel={i18next.t(`${i18nBase}.secondaryNav`)}
          extraClass='anti-bias'
        >
          <SecondaryNavButtonList {...commonNavProps} />
        </SecondaryNav>
      )}
    >
      { antiBiasToolKitPanel === 'judgement' && (
        <BiasedJudgementSim antiBiasToolKitData={antiBiasToolKitData} />
      ) }
      { antiBiasToolKitPanel === 'timing' && (
        <BiasedTimingSim antiBiasToolKitData={antiBiasToolKitData} />
      ) }
      { antiBiasToolKitPanel === 'correlation' && (
        <BiasedCorrelationSim antiBiasToolKitData={antiBiasToolKitData} />
      ) }
    </PageDetailWrapper>
  );
}

export default AntiBiasToolKit;
