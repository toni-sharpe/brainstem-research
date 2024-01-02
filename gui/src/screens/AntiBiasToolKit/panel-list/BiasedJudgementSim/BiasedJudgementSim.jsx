import i18next from 'util/i18next/i18next'
import React, { useEffect, useRef } from 'react'

import BiasedJudgementSimPropType from 'prop-types/BiasedJudgementSim.prop-type'
import SubPageWrapper from 'components/SubPageWrapper/SubPageWrapper'

import './BiasedJudgementSim.scss'

const i18nBase = 'BiasedJudgementSim'

function BiasedJudgementSim({ antiBiasToolKitData = [] }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current === null) {
      return
    }
    const context = canvasRef.current.getContext('2d');

    antiBiasToolKitData
      .forEach((hue, i) => {
        context.fillStyle = `hsl(${hue},${hue < 50 ? '100%' : '80%'},${hue < 50 ? '40%' : '85%'})`
        context.fillRect(i % 100 * 12, Math.floor(i / 100) * 12, '12', '12');
      })
  }, [antiBiasToolKitData]);

  return (
    <SubPageWrapper
      heading={i18next.t(`${i18nBase}.summary`)}
      headingLevel='h2'
      width='100%'
    >
      <canvas
        ref={canvasRef}
        width='1200'
        height='1200'
      />
    </SubPageWrapper>
  )
}

BiasedJudgementSim.propTypes = {
  antiBiasToolKitData: BiasedJudgementSimPropType
}

export default BiasedJudgementSim
