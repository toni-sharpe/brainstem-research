// OutcomeSummary.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import OutcomeSummary from './OutcomeSummary';

export default {
  component: OutcomeSummary,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseOutcomeSummaryProps = {
  severeAve: 23,
  severeCount: 17,
  nonSevereAve: 18,
  nonSevereCount: 59,
  totalAvailableDataPoints: 100,
  unknownCount: 11,
}

export const WithNumbers = {
  render: () => {
    return (
      <OutcomeSummary {...baseOutcomeSummaryProps} />
    )
  }
};

export const OnlySevere = {
  render: () => {
    const props = {
      ...baseOutcomeSummaryProps,
      nonSevereCount: undefined,
    }
    return (
      <OutcomeSummary {...props} />
    )
  }
};

export const OnlyNonSevere = {
  render: () => {
    const props = {
      ...baseOutcomeSummaryProps,
      severeCount: undefined,
    }
    return (
      <OutcomeSummary {...props} />
    )
  }
};

export const Neither = {
  render: () => {
    const props = {
      ...baseOutcomeSummaryProps,
      severeCount: undefined,
      nonSevereCount: undefined,
    }
    return (
      <OutcomeSummary {...props} />
    )
  }
};

export const All = {
  render: () => {
    const props = {
      ...baseOutcomeSummaryProps,
      totalAvailableDataPoints: 87,
    }
    return (
      <OutcomeSummary {...props} />
    )
  }
};
