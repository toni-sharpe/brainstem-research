// HistogramBar.story.js
import HistogramBarLabel from 'components/HistogramBarLabel/HistogramBarLabel'

import HistogramBar from './HistogramBar';

export default {
  component: HistogramBar,
};

const baseHistogramBarProps = {
  blockSize: 64,
  height: 384,
  left: 100,
  extraClass: null,
}

export const Primary = {
  render: () => {
    return (
      <ul>
        <HistogramBar {...baseHistogramBarProps}>
          <HistogramBarLabel count={6} i18nKey='nonFatalCases' />
        </HistogramBar>
      </ul>
    )
  }
};

export const WithSuffixClass = {
  render: () => {
    const props = {
      ...baseHistogramBarProps,
      extraClass: 'suffix-class-story-book-example'
    }
    return (
      <ul>
        <HistogramBar {...props}>
          <HistogramBarLabel count={6} i18nKey='nonFatalCases' />
        </HistogramBar>
      </ul>
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
      <ul>
        <HistogramBar {...props}>
          <HistogramBarLabel count={6} i18nKey='nonFatalCases' />
        </HistogramBar>
      </ul>
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
      <ul>
        <HistogramBar {...props}>
          <HistogramBarLabel count={6} i18nKey='nonFatalCases' />
        </HistogramBar>
      </ul>
    )
  }
};

export const SizesChanged = {
  render: () => {
    const props = {
      ...baseHistogramBarProps,
      blockSize: 80,
      height: 200,
      left: 50
    }
    return (
      <ul>
        <HistogramBar {...props}>
          <HistogramBarLabel count={2.5} i18nKey='nonFatalCases' />
        </HistogramBar>
      </ul>
    )
  }
};
