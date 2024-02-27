// GanttScale.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'


import GanttScale from './GanttScale';

export default {
  component: GanttScale,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseGanttScaleProps = {
  ariaLabel: 'Storybook graph',
  ganttHeight: '300',
  scale: {
    firstStep: 0,
    lastStep: 6,
    totalSteps: 6,
    stepDivision: 60,
  },
}

export const Primary = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <GanttScale { ...baseGanttScaleProps } />
      </StoryBookPaddedWrapper>
    )
  },
};

export const BigDetailedSteps = {
  render: () => {
    const props = {
      ...baseGanttScaleProps,
      scale: { firstStep: 0, lastStep: 2, stepDivision: 257, totalSteps: 2 },
    }
    return (
      <StoryBookPaddedWrapper>
        <GanttScale { ...props } />
      </StoryBookPaddedWrapper>
    )
  },
};

export const LotsOfTinyStepsIsProblematic = {
  render: () => {
    const props = {
      ...baseGanttScaleProps,
      scale: { firstStep: 0, lastStep: 120, stepDivision: 3, totalSteps: 120 },
    }
    return (
      <StoryBookPaddedWrapper>
        <GanttScale { ...props } />
      </StoryBookPaddedWrapper>
    )
  },
};

export const MaxStepsForNow = {
  render: () => {
    const props = {
      ...baseGanttScaleProps,
      scale: { firstStep: 0, lastStep: 20, stepDivision: 3, totalSteps: 20 },
    }
    return (
      <StoryBookPaddedWrapper>
        <GanttScale { ...props } />
      </StoryBookPaddedWrapper>
    )
  },
};

export const StepsWithHugeDivisions = {
  render: () => {
    const props = {
      ...baseGanttScaleProps,
      scale: { firstStep: 0, lastStep: 5, stepDivision: 12000, totalSteps: 5 },
    }
    return (
      <StoryBookPaddedWrapper>
        <GanttScale { ...props } />
      </StoryBookPaddedWrapper>
    )
  },
};

export const Test21 = {
  render: () => {
    const props = {
      ...baseGanttScaleProps,
      scale: { firstStep: 0, lastStep: 3, stepDivision: 50, totalSteps: 3 },
    }
    return (
      <StoryBookPaddedWrapper>
        <GanttScale { ...props } />
      </StoryBookPaddedWrapper>
    )
  },
};


export const Test200 = {
  render: () => {
    const props = {
      ...baseGanttScaleProps,
      scale: { firstStep: 0, lastStep: 20, stepDivision: 50, totalSteps: 20 },
    }
    return (
      <StoryBookPaddedWrapper>
        <GanttScale { ...props } />
      </StoryBookPaddedWrapper>
    )
  },
};

export const Test201 = {
  render: () => {
    const props = {
      ...baseGanttScaleProps,
      scale: { firstStep: 0, lastStep: 3, stepDivision: 5000, totalSteps: 3 },
    }
    return (
      <StoryBookPaddedWrapper>
        <GanttScale { ...props } />
      </StoryBookPaddedWrapper>
    )
  },
};

export const Test2000 = {
  render: () => {
    const props = {
      ...baseGanttScaleProps,
      scale: { firstStep: 0, lastStep: 20, stepDivision: 5000, totalSteps: 20 },
    }
    return (
      <StoryBookPaddedWrapper>
        <GanttScale { ...props } />
      </StoryBookPaddedWrapper>
    )
  },
};

export const Test2001 = {
  render: () => {
    const props = {
      ...baseGanttScaleProps,
      scale: { firstStep: 0, lastStep: 3, stepDivision: 50000, totalSteps: 3 },
    }
    return (
      <StoryBookPaddedWrapper>
        <GanttScale { ...props } />
      </StoryBookPaddedWrapper>
    )
  },
};

export const Test20000 = {
  render: () => {
    const props = {
      ...baseGanttScaleProps,
      scale: { firstStep: 0, lastStep: 20, stepDivision: 50000, totalSteps: 20 },
    }
    return (
      <StoryBookPaddedWrapper>
        <GanttScale { ...props } />
      </StoryBookPaddedWrapper>
    )
  },
};
