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

import Histogram from './Histogram';

export default {
  component: Histogram,
};

const baseHistogramProps = {
  averageLineList: null,
  barCountPerBlock: 1,
  barMargin: 6,
  blockSize: 72,
  histogramBarGroupList: SingleHistogramData,
  graphLabel: 'Straightforward histogram',
  minGraphHeight: 5,
  useHueWheel: true,
  useHueContrastToggle: true,
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
      blockSize: 56,
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
      blockSize: 36,
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
      blockSize: 36,
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
      blockSize: 64,
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
      blockSize: 36,
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
      blockSize: 36,
      histogramBarGroupList: NoHueToggleData,
      graphLabel: 'No hue toggle, smoother gradient',
      i18nKeyOnly: true,
      useHueContrastToggle: false,
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
      blockSize: 36,
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
      blockSize: 36,
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
      blockSize: 36,
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
