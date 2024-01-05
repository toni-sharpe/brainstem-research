// OutcomeSummary.story.js
import OutcomeSummary from './OutcomeSummary';

export default {
  component: OutcomeSummary,
};

const baseOutcomeSummaryProps = {
  fatalAve: 23,
  fatalCount: 17,
  nonFatalAve: 18,
  nonFatalCount: 59,
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

export const OnlyFatal = {
  render: () => {
    const props = {
      ...baseOutcomeSummaryProps,
      nonFatalCount: undefined,
    }
    return (
      <OutcomeSummary {...props} />
    )
  }
};

export const OnlyNonFatal = {
  render: () => {
    const props = {
      ...baseOutcomeSummaryProps,
      fatalCount: undefined,
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
      fatalCount: undefined,
      nonFatalCount: undefined,
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
