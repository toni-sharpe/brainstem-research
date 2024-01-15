import { join, pipe, reverse, toPairs, uniq, type } from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'
import i18next from 'util/i18next/i18next'

import {
  HISTOGRAM_BAR_LIST_COUNT,
  HISTOGRAM_BAR_LIST_MARGIN,
  HISTOGRAM_BAR_WIDTH,
  HISTORGRAM_HEIGHT,
} from 'util/Constant/BaseConstantList'
import HistogramBar from 'components/HistogramBar/HistogramBar'
import HistogramBarLabel from 'components/HistogramBarLabel/HistogramBarLabel'
import HistogramBarListLabel from 'components/HistogramBarListLabel/HistogramBarListLabel'
import HistogramDataPropType from 'prop-types/HistogramData.prop-type'
import HistogramTranslationPropType from 'prop-types/HistogramTranslation.prop-type'
import { calcBarSegmentAlpha, writeHistogramBarListAriaLabel } from 'util/UtilHistogram/UtilHistogramBarList'

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
  return histogramBarGroupList.map(([histogramBarListLabel, data], i) => {
    const ariaLabel = writeHistogramBarListAriaLabel({
      histogramBarListLabel,
      i18nBaseOverride,
      translationSet,
    })

    const outerLeft = i * (barCountPerBlock * blockSize + barMargin)
    const subBars = toPairs(data)

    return (
      <ol
        aria-label={ariaLabel}
        key={`${histogramBarListLabel}`}
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
                  const aLevel = calcBarSegmentAlpha({ barSegmentCount, i })

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
            i18nKey={histogramBarListLabel}
            i18nKeyOnly={i18nKeyOnly}
            key={histogramBarListLabel}
            left={outerLeft}
            top={`${histogramHeight}vh`}
            translationSet={translationSet}
          />
        </li>
      </ol>
    )
  })
}

HistogramBarList.defaultProps = {
  barCountPerBlock: HISTOGRAM_BAR_LIST_COUNT,
  barMargin: HISTOGRAM_BAR_LIST_MARGIN,
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
