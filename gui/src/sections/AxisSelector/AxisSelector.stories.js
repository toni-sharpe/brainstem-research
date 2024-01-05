// AxisSelector.story.js
import AxisSelector from './AxisSelector';

export default {
  component: AxisSelector,
};

function AxisSelectorStoryWidthSim({ children }) {
  return (<div style={{ width: '250px' }}>{children}</div>)
}

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
      <AxisSelectorStoryWidthSim><AxisSelector {...baseAxisSelectorProps} /></ AxisSelectorStoryWidthSim>
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
      <AxisSelectorStoryWidthSim><AxisSelector {...props} /></ AxisSelectorStoryWidthSim>
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
      <AxisSelectorStoryWidthSim><AxisSelector {...props} /></ AxisSelectorStoryWidthSim>
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
      <AxisSelectorStoryWidthSim><AxisSelector {...props} /></ AxisSelectorStoryWidthSim>
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
      <AxisSelectorStoryWidthSim><AxisSelector {...props} /></ AxisSelectorStoryWidthSim>
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
      <AxisSelectorStoryWidthSim><AxisSelector {...props} /></ AxisSelectorStoryWidthSim>
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
      <AxisSelectorStoryWidthSim><AxisSelector {...props} /></ AxisSelectorStoryWidthSim>
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
      <AxisSelectorStoryWidthSim><AxisSelector {...props} /></ AxisSelectorStoryWidthSim>
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
      <AxisSelectorStoryWidthSim><AxisSelector {...props} /></ AxisSelectorStoryWidthSim>
    )
  }
};
