import * as ramda from 'ramda'
import i18next from 'util/i18next/i18next'
import React, { useState } from 'react'

import AxisSelector from 'sections/AxisSelector/AxisSelector'
import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import ScatterChart from 'sections/ScatterChart/ScatterChart'
import ScatterDataPropType from 'prop-types/ScatterData.prop-type'
import ScatterStatisticOutput from 'components/ScatterStatisticOutput/ScatterStatisticOutput'
import calcKeyPairXy from 'util/UtilKeyPairXY/UtilKeyPairXY'
import { HYPOTHESIS_SYMPTOM_X_Y } from 'util/Constant/BaseConstantList'

import './Scatter.scss'

const i18nBase = 'Scatter'

function Scatter({
  data,
  setTimeLineBarDetailList,
  timeLineBarDetailList,
}) {
  const [x, setX] = useState(HYPOTHESIS_SYMPTOM_X_Y.x)
  const [y, setY] = useState(HYPOTHESIS_SYMPTOM_X_Y.y)

  const domain = ramda.pipe(
    ramda.map(({ [x]: pickedX, [y]: pickedY }) => [pickedX, pickedY]),
    ramda.flatten,
    ramda.filter(Boolean),
    vals => ([Math.min(...vals) / 10, Math.max(...vals) / 10]),
    ([a, b]) => ([Math.floor(a) * 10, Math.ceil(b) * 10])
  )(data)

  const pointList = calcKeyPairXy({ data, xKey: x, yKey: y })

  return (
    <PageDetailWrapper
      count={data?.length}
      i18nBase={i18nBase}
    >
      <div className='column-layout space-children--column-wide'>
        <div className='row-layout space-children--with-border'>
          <AxisSelector
            align='right'
            axis='x'
            currentAxisSelection={x}
            primaryMark={HYPOTHESIS_SYMPTOM_X_Y.x}
            setCurrentAxisSelection={setX}
          />
          <div className='scatter__chart-wrapper'>
            <ScatterChart
              ariaLabel={i18next.t(`${i18nBase}.interactiveChart`)}
              domain={domain}
              keyPair={{ x, y }}
              scatterData={data}
              showStatData={false}
              width={100}
            />
          </div>
          <AxisSelector
            axis='y'
            currentAxisSelection={y}
            primaryMark={HYPOTHESIS_SYMPTOM_X_Y.y}
            setCurrentAxisSelection={setY}
          />
        </div>
        <ScatterStatisticOutput
          pointList={pointList}
          setTimeLineBarDetailList={setTimeLineBarDetailList}
          timeLineBarDetailList={timeLineBarDetailList}
          xKey={x}
          yKey={y}
        />
      </div>
    </PageDetailWrapper>
  );
}

Scatter.propTypes = {
  data: ScatterDataPropType
}

export default Scatter;
