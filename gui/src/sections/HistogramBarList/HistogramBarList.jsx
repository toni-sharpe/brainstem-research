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
import HistogramBarCount from 'components/HistogramBarCount/HistogramBarCount'
import HistogramBarLabel from 'components/HistogramBarLabel/HistogramBarLabel'
import HistogramBarListLabel from 'components/HistogramBarListLabel/HistogramBarListLabel'
import HistogramDataPropType from 'prop-types/HistogramData.prop-type'
import HistogramTranslationPropType from 'prop-types/HistogramTranslation.prop-type'
import { calcBarSegmentAlpha, writeHistogramBarListAriaLabel } from 'util/UtilHistogram/UtilHistogramBarList'

import './HistogramBarList.scss'

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
  const innerBlockSize = 100 / barCountPerBlock
  const barGroupWidth = barCountPerBlock * blockSize

  return histogramBarGroupList.map(([histogramBarListLabel, data], i) => {
    const ariaLabel = writeHistogramBarListAriaLabel({
      histogramBarListLabel,
      i18nBaseOverride,
      translationSet,
    })

    const outerLeft = i * (barGroupWidth + barMargin)
    const subBars = toPairs(data)

    return (
      <ol
        aria-label={ariaLabel}
        className='histogram-bar-list'
        key={`${histogramBarListLabel}`}
        style={{
          left: `${outerLeft}%`,
          height: `${histogramHeight}vh`,
          width: `${barGroupWidth}%`,
        }}
        tabIndex={0}
      >
        <li>
          <ol>
            {
              subBars.map(([k, [count, val]], j) => {
                const innerLeft = innerBlockSize * j

                const valCondensed = type(val) === 'Array'
                  ? reverse(uniq(val))
                  : [val]

                const barSegmentCount = valCondensed.length

                function makeHistogramBarMapper(v, i) {
                  const aLevel = calcBarSegmentAlpha({ barSegmentCount, i })

                  const graphBarFraction = (v / mostMaxOfAllThings).toPrecision(3)

                  const displayVal = v.toFixed(v < 100 ? 1 : 0)
                  const graphBarSize = (histogramHeight * graphBarFraction).toPrecision(4)
                  const graphBarTop = (histogramHeight - graphBarSize).toPrecision(4)

                  return (
                    <HistogramBar
                      backgroundColor={
                        hueFn
                          ? hueFn({ i: j, total: barCountPerBlock, aLevel })
                          : null
                      }
                      blockSize={innerBlockSize}
                      count={count}
                      extraClass={hueFn ? undefined : k}
                      height={`${graphBarSize}vh`}
                      key={`${innerLeft}-${k}-${v}-${i}`}
                      left={innerLeft}
                      title={pipe(reverse, join(', '))(valCondensed)}
                      top={`${graphBarTop}vh`}
                    >
                      <HistogramBarLabel
                        ariaLabel={i18next.t(`${i18nBaseOverride || 'HistogramBarLabel'}.${k}`, { ariaLabel, displayVal })}
                        blockSize={blockSize}
                        isShown
                      >
                        <span>{ displayVal }</span>
                      </HistogramBarLabel>
                      <HistogramBarCount
                        barCountPerBlock={barCountPerBlock}
                        count={count}
                      />
                    </HistogramBar>
                  )
                }

                return barSegmentCount === 0
                  ? (<HistogramBarLabel ariaLabel={i18next.t(`HistogramBarLabel.${k}`, { ariaLabel, displayVal: 0 })} />)
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
