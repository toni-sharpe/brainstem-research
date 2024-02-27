// GanttBarWrapper.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import GanttBar from 'sections/GanttBar/GanttBar'
import { GanttBarDataToneSet } from 'example-data/GanttBar.example-data'
import GanttBarWrapper from './GanttBarWrapper';

export default {
  component: GanttBarWrapper,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper
        isScreenWidth
        wrapperElem='ul'
      >
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

export const NotGood = {
  render: () => {
    return (
      <GanttBarWrapper i={0} k='notGood' offset={0}>
        <GanttBar {...GanttBarDataToneSet.notGood} />
      </GanttBarWrapper>
    )
  }
};

export const Bad = {
  render: () => {
    return (
      <GanttBarWrapper i={0} k='bad' offset={0}>
        <GanttBar {...GanttBarDataToneSet.bad} />
      </GanttBarWrapper>
    )
  }
};

export const Good = {
  render: () => {
    return (
      <GanttBarWrapper i={0} k='good' offset={0}>
        <GanttBar {...GanttBarDataToneSet.good} />
      </GanttBarWrapper>
    )
  }
};

export const VeryBad = {
  render: () => {
    return (
      <GanttBarWrapper i={0} k='veryBad' offset={0}>
        <GanttBar {...GanttBarDataToneSet.veryBad} />
      </GanttBarWrapper>
    )
  }
};

export const Neutral = {
  render: () => {
    return (
      <GanttBarWrapper i={0} k='neutral' offset={0}>
        <GanttBar {...GanttBarDataToneSet.neutral} />
      </GanttBarWrapper>
    )
  }
};
