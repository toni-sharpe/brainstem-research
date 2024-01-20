import i18next from 'util/i18next/i18next'
import { map, mergeAll, pipe } from 'ramda'

import { GANTT_SCALE_DEFAULT, TONE_KEY_LIST } from 'util/Constant/BaseConstantList'

const statisticList = {
  good :{
    count: 61,
    mean: 40, median: 42,
    mda: 5, skewness: 0.00123,
    minStd: 28, minMda: 31, min: 15, max: 183, maxMda: 49, maxStd: 52, std: 12,
    quantile: [19, 23, 35, 45, 71, 97, 111, 135, 159],
  },
  notGood :{
    count: 45,
    mean: 55, median: 55,
    mda: 6, skewness: 0.65,
    minStd: 47, minMda: 49, min: 40, max: 85, maxMda: 61, maxStd: 63, std: 8,
    quantile: [42, 48, 54, 58, 63, 67, 73 ,78, 84],
  },
  bad :{
    count: 100,
    mean: 90, median: 94,
    mda: 15, skewness: 0.9813,
    minStd: 76, minMda: 75, min: 72, max: 135, maxMda: 105, maxStd: 104, std: 14,
    quantile: [],
  },
  veryBad :{
    count: 37,
    mean: 120, median: 115,
    mda: 21, skewness: -0.956,
    minStd: 90, minMda: 99, min: 98, max: 175, maxMda: 141, maxStd: 150, std: 30,
    quantile: null,
  },
  neutral :{
    count: 4,
    mean: 60, median: 59,
    mda: 43, skewness: -1.763,
    minStd: 15, minMda: 17, min: 5, max: 156, maxMda: 103, maxStd: 105, std: 45,
    quantile: [34, 78, 134], // 3 only uses a spread of quantiles
  },
}

let barPosition = 0

// const fullStatDataResult = {
//   key1: {
//     count: 6,
//     label: 'Test the label',
//     max: 58,
//     mda: 24,
//     mean: 29.5,
//     median: 30,
//     min: 1,
//     quantile: [ 1, 5, 5, 9, 12, 51, 53, 53 ],
//     skewness: -0.0061361,
//     std: 27.053650,
//     tone: 'good',
//   }
// }

export const GanttBarDataToneSet = pipe(
  map(tone => {
    barPosition++
    return ({
      [tone]: {
        scale: GANTT_SCALE_DEFAULT,
        barData: {
          ...statisticList[tone],
          label: i18next.t(`GanttBar.${tone}`),
          tone,
        },
        barPosition,
        showAllQuantiles: tone === 'notGood'
      }
    })
  }),
  mergeAll,
)(TONE_KEY_LIST)
