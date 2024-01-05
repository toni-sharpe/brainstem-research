// TimeLineBarListScale.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'
import TimeLineBarListScale from './TimeLineBarListScale';

export default {
  component: TimeLineBarListScale,
};

const baseTimeLineBarListScaleProps = {
  ariaLabel: 'Storybook graph',
  scale: {
    totalSteps: 6,
    stepDivision: 60,
  },
}

export const Primary = {
  render: () => {
    return (<StoryBookPaddedWrapper><TimeLineBarListScale { ...baseTimeLineBarListScaleProps } /></StoryBookPaddedWrapper>)
  },
};

export const BigDetailedSteps = {
  render: () => {
    const props = { scale: { stepDivision: 257, totalSteps: 2 } }
    return (<StoryBookPaddedWrapper><TimeLineBarListScale { ...props } /></StoryBookPaddedWrapper>)
  },
};

export const LotsOfTinyStepsIsProblematic = {
  render: () => {
    const props = { scale: { stepDivision: 3, totalSteps: 120 } }
    return (<StoryBookPaddedWrapper><TimeLineBarListScale { ...props } /></StoryBookPaddedWrapper>)
  },
};

export const MaxStepsForNow = {
  render: () => {
    const props = { scale: { stepDivision: 3, totalSteps: 20 } }
    return (<StoryBookPaddedWrapper><TimeLineBarListScale { ...props } /></StoryBookPaddedWrapper>)
  },
};

export const StepsWithHugeDivisions = {
  render: () => {
    const props = { scale: { stepDivision: 12000, totalSteps: 5 } }
    return (<StoryBookPaddedWrapper><TimeLineBarListScale { ...props } /></StoryBookPaddedWrapper>)
  },
};

export const Test21 = {
  render: () => {
    const props = { scale: { stepDivision: 50, totalSteps: 3 } }
    return (<StoryBookPaddedWrapper><TimeLineBarListScale { ...props } /></StoryBookPaddedWrapper>)
  },
};


export const Test200 = {
  render: () => {
    const props = { scale: { stepDivision: 50, totalSteps: 20 } }
    return (<StoryBookPaddedWrapper><TimeLineBarListScale { ...props } /></StoryBookPaddedWrapper>)
  },
};

export const Test201 = {
  render: () => {
    const props = { scale: { stepDivision: 5000, totalSteps: 3 } }
    return (<StoryBookPaddedWrapper><TimeLineBarListScale { ...props } /></StoryBookPaddedWrapper>)
  },
};

export const Test2000 = {
  render: () => {
    const props = { scale: { stepDivision: 5000, totalSteps: 20 } }
    return (<StoryBookPaddedWrapper><TimeLineBarListScale { ...props } /></StoryBookPaddedWrapper>)
  },
};

export const Test2001 = {
  render: () => {
    const props = { scale: { stepDivision: 50000, totalSteps: 3 } }
    return (<StoryBookPaddedWrapper><TimeLineBarListScale { ...props } /></StoryBookPaddedWrapper>)
  },
};

export const Test20000 = {
  render: () => {
    const props = { scale: { stepDivision: 50000, totalSteps: 20 } }
    return (<StoryBookPaddedWrapper><TimeLineBarListScale { ...props } /></StoryBookPaddedWrapper>)
  },
};
