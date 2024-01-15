import { join, type } from 'ramda'
import i18next from 'util/i18next/i18next'

import { HISTOGRAM_BAR_SEGMENT_ALPHA_STEP } from 'util/Constant/BaseConstantList'
import { throwError } from 'util/Util/Util'


export function calcBarSegmentAlpha({ barSegmentCount = 1, i = 0 }) {
  return barSegmentCount === i + 1
    ? 1.0
    : Number(
      (
        1.0
        /
        barSegmentCount
      ).toPrecision(2)
    )
}


function i18nOrTranslationSet({
  i18nBaseOverride,
  translationSet,
}) {
  return (
    translationSet
    ||
    i18nBaseOverride
  )
}


function setFormedCorrectly({ translationSet }) {
  return (
    type(translationSet.barList) === 'Array'
    &&
    type(translationSet.groupBy) === 'String'
  )
}


export function writeHistogramBarListAriaLabel({
  histogramBarListLabel,
  i18nBaseOverride,
  translationSet,
}) {
  throwError({
    check: (
      i18nOrTranslationSet({ i18nBaseOverride, translationSet })
      &&
      histogramBarListLabel
    ),
    i18nKey: 'writeHistogramBarListAriaLabel'
  })

  throwError({
    check: (
      translationSet
        ? setFormedCorrectly({ translationSet })
        : true
    ),
    i18nKey: 'ariaTranslationSet'
  })
  
  return translationSet?.barList && translationSet?.groupBy
    ? i18next.t(
      'HistogramBarListLabel.aria-label', {
        ...translationSet,
        barList: join(', ', translationSet.barList),
        histogramBarListLabel,
      }
    )
    : i18next.t(
      'HistogramBarListLabel.aria-label', {
        groupBy: i18next.t(`${i18nBaseOverride}.time`),
        barList: `${i18next.t(`${i18nBaseOverride}.fatalOnly`)}, ${i18next.t(`${i18nBaseOverride}.nonFatalOnly`)}`,
        histogramBarListLabel: i18next.t(`${i18nBaseOverride}.${histogramBarListLabel}`),
      }
    )
}
