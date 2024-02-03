// Histogram.story.js
import {
  FiveHistogramData,
  LowValues,
  NoHueToggleData,
  OneGroupManyBars,
  SimpleThreeHistogramData,
  SingleHistogramData,
  ThisCouldGetSilly,
  ThreeHistogramData,
  TwoHistogramData,
} from 'example-data/Histogram.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import { calcHistogramBarHue } from 'util/UtilHistogram/UtilHistogram'

import Histogram from './Histogram';

const hueFn = calcHistogramBarHue()

export default {
  component: Histogram,
};

const baseBarMargin = 0.5

function calcBlockSize({ barCountPerBlock, barMargin = undefined, blockCount }) {
  return (
    100
    -
    (
      barMargin
      ||
      barMargin === 0
        ? barMargin
        : baseBarMargin
    )
    *
    (
      blockCount
      -
      1
    )
  )
  /
  (
    blockCount
    *
    barCountPerBlock
  )
}

const baseHistogramProps = {
  averageLineList: null,
  barCountPerBlock: 1,
  barMargin: baseBarMargin,
  blockSize: calcBlockSize({
    barCountPerBlock: 1,
    blockCount: SingleHistogramData.length,
  }),
  graphLabel: 'Straightforward histogram',
  histogramBarGroupList: SingleHistogramData,
  hueFn,
  i18nKeyOnly: true,
  minGraphHeight: 5,
  translationSet: { barList: ['a'], groupBy: 'c' },
  useHueContrastToggle: true,
  useHueWheel: true,
}

export const Primary = {
  render: () => {
    return (
      <StoryBookPaddedWrapper><Histogram {...baseHistogramProps} /></StoryBookPaddedWrapper>
    )
  }
};

export const TwoColumn = {
  render: () => {
    const props = {
      ...baseHistogramProps,
      barCountPerBlock: 2,
      blockSize: calcBlockSize({
        barCountPerBlock: 2,
        blockCount: TwoHistogramData.length,
      }),
      histogramBarGroupList: TwoHistogramData,
      graphLabel: 'Two bars per group',
    }
    return (
      <StoryBookPaddedWrapper><Histogram {...props} /></StoryBookPaddedWrapper>
    )
  }
};

export const LowValuesInHighGraph = {
  render: () => {
    const props = {
      ...baseHistogramProps,
      barCountPerBlock: 5,
      blockSize: calcBlockSize({
        barCountPerBlock: 5,
        blockCount: LowValues.length,
      }),
      histogramBarGroupList: LowValues,
      graphLabel: 'Low Values',
      minGraphHeight: 12,
    }
    return (
      <StoryBookPaddedWrapper><Histogram {...props} /></StoryBookPaddedWrapper>
    )
  }
};

export const ThreeColumn = {
  render: () => {
    const props = {
      ...baseHistogramProps,
      barCountPerBlock: 3,
      blockSize: calcBlockSize({
        barCountPerBlock: 3,
        blockCount: ThreeHistogramData.length,
      }),
      histogramBarGroupList: ThreeHistogramData,
      graphLabel: 'Three bars per group - and an empty group',
    }
    return (
      <StoryBookPaddedWrapper><Histogram {...props} /></StoryBookPaddedWrapper>
    )
  }
};

export const Simpler = {
  render: () => {
    const props = {
      ...baseHistogramProps,
      barCountPerBlock: 3,
      blockSize: calcBlockSize({
        barCountPerBlock: 3,
        blockCount: SimpleThreeHistogramData.length,
      }),
      histogramBarGroupList: SimpleThreeHistogramData,
      graphLabel: 'Simpler three',
    }
    return (
      <StoryBookPaddedWrapper><Histogram {...props} /></StoryBookPaddedWrapper>
    )
  }
};

export const LetsTryFive = {
  render: () => {
    const props = {
      ...baseHistogramProps,
      barCountPerBlock: 5,
      blockSize: calcBlockSize({
        barCountPerBlock: 5,
        blockCount: FiveHistogramData.length,
      }),
      histogramBarGroupList: FiveHistogramData,
      graphLabel: 'Five different things on each group'
    }
    return (
      <StoryBookPaddedWrapper><Histogram {...props} /></StoryBookPaddedWrapper>
    )
  }
};

export const NoHueWheel = {
  render: () => {
    const props = {
      ...baseHistogramProps,
      barCountPerBlock: 10,
      blockSize: calcBlockSize({
        barCountPerBlock: 10,
        blockCount: NoHueToggleData.length,
      }),
      histogramBarGroupList: NoHueToggleData,
      graphLabel: 'No hue toggle, smoother gradient',
      hueFn: calcHistogramBarHue({ useHueContrastToggle: false }),
      i18nKeyOnly: true,
    }
    return (
      <StoryBookPaddedWrapper><Histogram {...props} /></StoryBookPaddedWrapper>
    )
  }
};

export const ThisCouldGetSillyButUseful = {
  render: () => {
    const props = {
      ...baseHistogramProps,
      barCountPerBlock: 18,
      blockSize: calcBlockSize({
        barCountPerBlock: 18,
        blockCount: ThisCouldGetSilly.length,
      }),
      histogramBarGroupList: ThisCouldGetSilly,
      graphLabel: 'Lots of room for sets of grouped bars',
    }
    return (
      <StoryBookPaddedWrapper><Histogram {...props} /></StoryBookPaddedWrapper>
    )
  }
};

export const JustOneGroup = {
  render: () => {
    const props = {
      ...baseHistogramProps,
      barCountPerBlock: 12,
      blockSize: calcBlockSize({
        barCountPerBlock: 12,
        blockCount: OneGroupManyBars.length,
      }),
      histogramBarGroupList: OneGroupManyBars,
      graphLabel: 'Actually the same as the first'
    }
    return (
      <StoryBookPaddedWrapper><Histogram {...props} /></StoryBookPaddedWrapper>
    )
  }
};

export const NoGap = {
  render: () => {
    const props = {
      ...baseHistogramProps,
      barCountPerBlock: 3,
      barMargin: 0,
      blockSize: calcBlockSize({
        barCountPerBlock: 3,
        barMargin: 0,
        blockCount: SimpleThreeHistogramData.length,
      }),
      graphLabel: 'Bars right together',
      histogramBarGroupList: SimpleThreeHistogramData,
    }
    return (
      <StoryBookPaddedWrapper><Histogram {...props} /></StoryBookPaddedWrapper>
    )
  }
};

export const NullData = {
  render: () => {
    const props = {
      ...baseHistogramProps,
      histogramBarGroupList: null,
    }
    return (
      <StoryBookPaddedWrapper><Histogram {...props} /></StoryBookPaddedWrapper>
    )
  }
};

export const NoData = {
  render: () => {
    const props = {
      ...baseHistogramProps,
      histogramBarGroupList: [],
    }
    return (
      <StoryBookPaddedWrapper><Histogram {...props} /></StoryBookPaddedWrapper>
    )
  }
};
