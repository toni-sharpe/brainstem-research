import i18next from 'util/i18next/i18next'
import React from 'react'
import PropTypes from 'prop-types'
import { VictoryChart, VictoryTheme, VictoryScatter } from 'victory'
import { toPairs } from 'ramda'

import calcKeyPairXy from 'util/UtilKeyPairXY/UtilKeyPairXY'
import ErrorOutput from 'components/ErrorOutput/ErrorOutput'
import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'
import ScatterDataPropType from 'prop-types/ScatterData.prop-type'
import ScatterDomainPropType from 'prop-types/ScatterDomain.prop-type'
import XYKeyPairPropType from 'prop-types/XYKeyPair.prop-type'
import { calcMostMaxOfAllTheThings } from 'util/Util/UtilMaxThing'

import './ScatterChart.scss'

const i18nBase = 'ScatterChart'

function ScatterChart({
  ariaLabel,
  domain,
  keyPair: {
    x,
    y,
  },
  mapFn,
  scatterData,
  width,
}) {
  const margin = `${(100 - width) / 2}%`
  const pointList = calcKeyPairXy({ data: scatterData, xKey: x, yKey: y, mapFn })

  if (!pointList || pointList?.length === 0) {
    return null
  }

  const pointToThingList = toPairs(pointList)

  const maxThing = calcMostMaxOfAllTheThings({
    theThingList: pointToThingList
  })

  return (
    <div
      aria-label={ariaLabel}
      className='scatter-chart column-layout space-children--column-wide'
      role='region'
    >
      <div
        className='scatter-chart__victory-control'
        style={{ marginLeft: margin, marginRight: margin, width: `${width}%` }}
      >
        { pointList?.length
          ? (
              <VictoryChart
                theme={VictoryTheme.material}
                domain={domain}
              >
                <VictoryScatter
                  data={pointList}
                  style={{ data: {
                    fill: ({ datum }) => datum.fill || '#333' }
                  }}
                />
              </VictoryChart>
          ) : (
            <span>
              <ErrorOutput message={i18next.t(`${i18nBase}.notEnoughData`)} />
            </span>
          ) }
      </div>
    </div>
  )
}

ScatterChart.defaultProps = {
  mapFn: null,
  width: '75%',
}

ScatterChart.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  domain: ScatterDomainPropType.isRequired,
  keyPair: XYKeyPairPropType.isRequired,
  mapFn: PropTypes.func,
  scatterData: ScatterDataPropType.isRequired,
  width: NumberOrStringPropType,
}

export default ScatterChart;
