// PercOutput.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import PercOutput from './PercOutput';

export default {
  component: PercOutput,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const basePercOutputProps = {
  totalOnFigure: 101,
  totalAvailableDataPoints: 101,
  unknownCount: 0,
}

export const FullPerc = {
  render: () => {
    return (
      <PercOutput {...basePercOutputProps} />
    )
  }
};

export const SmallPerc = {
  render: () => {
    const props = {
      ...basePercOutputProps,
      totalAvailableDataPoints: 1001,
    }
    return (
      <PercOutput {...props} />
    )
  }
};

export const NoPerc = {
  render: () => {
    const props = {
      ...basePercOutputProps,
      totalOnFigure: 0,
    }
    return (
      <PercOutput {...props} />
    )
  }
};

export const WithUnknownCount = {
  render: () => {
    const props = {
      ...basePercOutputProps,
      totalOnFigure: 61,
      unknownCount: 40,
    }
    return (
      <PercOutput {...props} />
    )
  }
};
