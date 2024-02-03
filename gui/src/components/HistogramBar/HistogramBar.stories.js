// HistogramBar.story.js
import HistogramBarLabel from 'components/HistogramBarLabel/HistogramBarLabel'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import HistogramBar from './HistogramBar';

export default {
  component: HistogramBar,
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
      <StoryBookPaddedWrapper>
        <ul>
          <HistogramBar {...baseHistogramBarProps}>
            <HistogramBarLabel count={6} i18nKey='nonSevereCases' />
          </HistogramBar>
        </ul>
      </StoryBookPaddedWrapper>
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
      <StoryBookPaddedWrapper>
        <ul>
          <HistogramBar {...props}>
            <HistogramBarLabel count={6} i18nKey='nonSevereCases' />
          </HistogramBar>
        </ul>
      </StoryBookPaddedWrapper>
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
      <StoryBookPaddedWrapper>
        <ul>
          <HistogramBar {...props}>
            <HistogramBarLabel count={6} i18nKey='nonSevereCases' />
          </HistogramBar>
        </ul>
      </StoryBookPaddedWrapper>
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
      <StoryBookPaddedWrapper>
        <ul>
          <HistogramBar {...props}>
            <HistogramBarLabel count={6} i18nKey='nonSevereCases' />
          </HistogramBar>
        </ul>
      </StoryBookPaddedWrapper>
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
      <StoryBookPaddedWrapper>
        <ul>
          <HistogramBar {...props}>
            <HistogramBarLabel count={2.5} i18nKey='nonSevereCases' />
          </HistogramBar>
        </ul>
      </StoryBookPaddedWrapper>
    )
  }
};
