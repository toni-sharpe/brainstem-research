import { join, pipe, reverse, toPairs, uniq, type } from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'
import i18next from 'util/i18next/i18next'

import {
  HISTOGRAM_BAR_GROUP_COUNT,
  HISTOGRAM_BAR_GROUP_MARGIN,
  HISTOGRAM_BAR_WIDTH,
  HISTORGRAM_HEIGHT,
} from 'util/Constant/BaseConstantList'
import HistogramBar from 'components/HistogramBar/HistogramBar'
import HistogramBarLabel from 'components/HistogramBarLabel/HistogramBarLabel'
import HistogramBarListLabel from 'components/HistogramBarListLabel/HistogramBarListLabel'
import HistogramDataPropType from 'prop-types/HistogramData.prop-type'
import HistogramTranslationPropType from 'prop-types/HistogramTranslation.prop-type'

function HistogramBarList({
  barCountPerBlock,
  barMargin,
  blockSize,
  histogramBarGroupList,
  histogramHeight,
  hueFn,
  i18nBaseOverride,
  i18nKeyOnly,
  mostMaxOfAllThings,
  translationSet,
}) {
  return histogramBarGroupList.map(([histogramHistogramBarListLabel, data], i) => {
    const ariaLabel = translationSet?.barList && translationSet?.groupBy
      ? i18next.t(
        'HistogramBarListLabel.aria-label', {
          ...translationSet,
          barList: join(', ', translationSet.barList),
          histogramHistogramBarListLabel,
        }
      )
      : i18next.t(
        'HistogramBarListLabel.aria-label', {
          groupBy: i18next.t(`${i18nBaseOverride}.time`),
          barList: `${i18next.t(`${i18nBaseOverride}.fatalOnly`)}, ${i18next.t(`${i18nBaseOverride}.nonFatalOnly`)}`,
          histogramHistogramBarListLabel: i18next.t(`${i18nBaseOverride}.${histogramHistogramBarListLabel}`),
        }
      )

    const outerLeft = i * (barCountPerBlock * blockSize + barMargin)
    const subBars = toPairs(data)

    return (
      <ol
        aria-label={ariaLabel}
        key={`${histogramHistogramBarListLabel}`}
      >
        <li>
          <ol>
            {
              subBars.map(([k, val], j) => {
                const innerLeft = outerLeft + blockSize * j

                const valCondensed = type(val) === 'Array'
                  ? reverse(uniq(val))
                  : [val]

                const barSegmentCount = valCondensed.length

                function makeHistogramBarMapper(v, i) {
                  const aLevel = barSegmentCount === i + 1
                    ? 1.0
                    : 1.0
                      /
                      (
                        barSegmentCount
                        -
                        (
                          0.25
                          *
                          (
                            barSegmentCount
                            -
                            1
                          )
                        )
                      )

                  const graphBarFraction = (v / mostMaxOfAllThings).toPrecision(3)

                  const count = v.toFixed(v < 100 ? 1 : 0)
                  const graphBarSize = (histogramHeight * graphBarFraction).toPrecision(4)
                  const graphBarTop = (histogramHeight - graphBarSize).toPrecision(4)

                  return (
                    <HistogramBar
                      backgroundColor={
                        hueFn
                          ? hueFn({ i: j, total: barCountPerBlock, aLevel })
                          : null
                      }
                      blockSize={blockSize}
                      height={`${graphBarSize}vh`}
                      key={`${innerLeft}-${k}-${v}-${i}`}
                      left={innerLeft}
                      extraClass={k}
                      top={`${graphBarTop}vh`}
                    >
                      <HistogramBarLabel
                        ariaLabel={i18next.t(`${i18nBaseOverride || 'HistogramBarLabel'}.${k}`, { ariaLabel, count })}
                        blockSize={blockSize}
                        isShown
                      >
                        <span title={pipe(reverse, join(', '))(valCondensed)}>{ count }</span>
                      </HistogramBarLabel>
                    </HistogramBar>
                  )
                }

                return barSegmentCount === 0
                  ? (<HistogramBarLabel ariaLabel={i18next.t(`HistogramBarLabel.${k}`, { ariaLabel, count: 0 })} />)
                  : (<li key={`${innerLeft}-${k}`}><ol>{ valCondensed.map(makeHistogramBarMapper) }</ol></li>)
              })
            }
          </ol>
          <HistogramBarListLabel
            barCountPerBlock={barCountPerBlock}
            blockSize={blockSize}
            i18nBaseOverride={i18nBaseOverride}
            i18nKey={histogramHistogramBarListLabel}
            i18nKeyOnly={i18nKeyOnly}
            key={histogramHistogramBarListLabel}
            left={outerLeft}
            top={`${histogramHeight}vh`}
          />
        </li>
      </ol>
    )
  })
}

HistogramBarList.defaultProps = {
  barCountPerBlock: HISTOGRAM_BAR_GROUP_COUNT,
  barMargin: HISTOGRAM_BAR_GROUP_MARGIN,
  blockSize: HISTOGRAM_BAR_WIDTH,
  histogramHeight: HISTORGRAM_HEIGHT,
  i18nBaseOverride: undefined,
  i18nKeyOnly: null,
}

HistogramBarList.propTypes = {
  barCountPerBlock: PropTypes.number,
  barMargin: PropTypes.number,
  blockSize: PropTypes.number,
  histogramBarGroupList: HistogramDataPropType,
  histogramHeight: PropTypes.number,
  hueFn: PropTypes.func,
  i18nBaseOverride: PropTypes.string, // this base will be used to provide translations for the histogram
  i18nKeyOnly: PropTypes.bool, // lets any graph take charge of it's bar labelling
  mostMaxOfAllThings: PropTypes.number,
  translationSet: HistogramTranslationPropType,
}

export default HistogramBarList
