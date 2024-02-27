// HistogramBar.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import HistogramBarLabel from 'components/HistogramBarLabel/HistogramBarLabel'

import HistogramBar from './HistogramBar';

export default {
  component: HistogramBar,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper
        widthSetTo100
        wrapperElem='ul'
        wrapperElemProps={{ style: { width: '80%' } }}
      >
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseHistogramBarProps = {
  backgroundColor: '#70f',
  blockSize: 10,
  height: 384,
  left: 10,
  extraClass: null,
}

export const Primary = {
  render: () => {
    return (
      <HistogramBar {...baseHistogramBarProps}>
        <HistogramBarLabel count={6} i18nKey='nonSevereCases' />
      </HistogramBar>
    )
  }
};

export const BackgroundColorOverride = {
  render: () => {
    const props = {
      ...baseHistogramBarProps,
      backgroundColor: '#dd4',
    }
    return (
      <HistogramBar {...props}>
        <HistogramBarLabel count={6} i18nKey='nonSevereCases' />
      </HistogramBar>
    )
  }
};

export const FallbackColour = {
  render: () => {
    const props = {
      ...baseHistogramBarProps,
      backgroundColor: undefined,
      extraClass: undefined,
    }
    return (
      <HistogramBar {...props}>
        <HistogramBarLabel count={6} i18nKey='nonSevereCases' />
      </HistogramBar>
    )
  }
};

export const ExtraClassOverride = {
  render: () => {
    const props = {
      ...baseHistogramBarProps,
      backgroundColor: undefined,
      extraClass: 'sb-example',
    }
    return (
      <HistogramBar {...props}>
        <HistogramBarLabel count={6} i18nKey='nonSevereCases' />
      </HistogramBar>
    )
  }
};

export const SizesChanged = {
  render: () => {
    const props = {
      ...baseHistogramBarProps,
      blockSize: 12,
      height: 200,
      left: 20
    }
    return (
      <HistogramBar {...props}>
        <HistogramBarLabel count={2.5} i18nKey='nonSevereCases' />
      </HistogramBar>
    )
  }
};
