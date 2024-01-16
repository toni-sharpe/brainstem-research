import '@testing-library/jest-dom'
import baseTimeLineBarListProps from './baseTimeLineBarListProps'

const baseProps = {
  currentFilterList: {
    confirmedActors: false,
    severe: false,
    fjp: false,
    hardEventOnly: false,
    hardPrimeSymptom: false,
    rmDubious: true,
    nonSevere: false,
  },
  maxOfAll: 180,
  scale: {
    stepDivision: 60,
    totalSteps: 4,
  },
  statDataList: [
    {
      good: {
        count: 61,
        label: "Recovery responses",
        max: 183,
        maxMda: 49,
        maxStd: 52,
        mda: 5,
        mean: 40,
        median: 42,
        min: 15,
        minMda: 31,
        minStd: 28,
        quantile: [
           19,
           23,
           35,
           45,
           71,
           97,
          111,
          135,
          159,
        ],
        skewness: 0.00123,
        std: 12,
        tone: "good",
      },
    },
    {
      notGood: {
        count: 45,
        label: "Serious responses",
        max: 85,
        maxMda: 61,
        maxStd: 63,
        mda: 6,
        mean: 55,
        median: 55,
        min: 40,
        minMda: 49,
        minStd: 47,
        quantile: [
          42,
          48,
          54,
          58,
          63,
          67,
          73,
          78,
          84,
        ],
        skewness: 0.65,
        std: 8,
        tone: "notGood",
      },
    },
    {
      neutral: {
        count: 4,
        label: "Impact without bearing",
        max: 156,
        maxMda: 103,
        maxStd: 105,
        mda: 43,
        mean: 60,
        median: 59,
        min: 5,
        minMda: 17,
        minStd: 15,
        quantile: [
          34,
          78,
          134,
        ],
        skewness: -1.763,
        std: 45,
        tone: "neutral",
      },
    },
  ],
}

test('baseTimeLineBarListProps()', () => {
  expect(baseTimeLineBarListProps()).toEqual(baseProps)
})
