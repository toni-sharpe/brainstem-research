// AxisSelector.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import AxisSelector from './AxisSelector';

export default {
  component: AxisSelector,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper padding={'50px 200px'}>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseAxisSelectorProps = {
  axis: 'x',
  currentAxisSelection: null,
  curreAxisSelection: null,
  setCurrentAxisSelection: () => {},
  defineDurationOptions: false,
  disabledSelection: null,
  showDurationOptions: false,
}

export const Basic = {
  render: () => {
    return (
      <AxisSelector {...baseAxisSelectorProps} />
    )
  }
};

export const Selected = {
  render: () => {
    const props = {
      ...baseAxisSelectorProps,
      currentAxisSelection: 'prime_symptom_2',
    }
    return (
      <AxisSelector {...props} />
    )
  }
};

export const RightAligned = {
  render: () => {
    const props = {
      ...baseAxisSelectorProps,
      align: 'right',
      currentAxisSelection: 'prime_symptom_2',
    }
    return (
      <AxisSelector {...props} />
    )
  }
};

export const PrimaryMarkLeftAligned = {
  render: () => {
    const props = {
      ...baseAxisSelectorProps,
      currentAxisSelection: 'prime_symptom_2',
      primaryMark: 'prime_symptom_1',
    }
    return (
      <AxisSelector {...props} />
    )
  }
};

export const PrimaryMarkRightAligned = {
  render: () => {
    const props = {
      ...baseAxisSelectorProps,
      align: 'right',
      currentAxisSelection: 'prime_symptom_2',
      primaryMark: 'prime_symptom_3',
    }
    return (
      <AxisSelector {...props} />
    )
  }
};

export const MultiSelect = {
  render: () => {
    const props = {
      ...baseAxisSelectorProps,
      currentAxisSelection: [
        'prime_symptom_2',
        'prime_symptom_3',
        'pathological_severity',
      ]
    }
    return (
      <AxisSelector {...props} />
    )
  }
};

export const DisabledSelection = {
  render: () => {
    const props = {
      ...baseAxisSelectorProps,
      currentAxisSelection: 'overall_patient_rating',
      disabledSelection: [
        'mild_symptom_1',
        'mild_symptom_2',
        'prime_symptom_1',
        'prime_symptom_2',
        'prime_symptom_3',
        'pathological_severity',
      ]
    }
    return (
      <AxisSelector {...props} />
    )
  }
};

export const WithDurationOptions = {
  render: () => {
    const props = {
      ...baseAxisSelectorProps,
      showDurationOptions: true,
    }
    return (
      <AxisSelector {...props} />
    )
  }
};

export const DurationOptionsDefined = {
  render: () => {
    const props = {
      ...baseAxisSelectorProps,
      defineDurationOptions: true,
    }
    return (
      <AxisSelector {...props} />
    )
  }
};
