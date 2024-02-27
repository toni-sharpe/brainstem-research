// GanttBarQuantileList.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import { GANTT_SCALE_DEFAULT } from 'util/Constant/BaseConstantList'

import GanttBarQuantileList from './GanttBarQuantileList';

export default {
  component: GanttBarQuantileList,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper isScreenWidth>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseGanttBarQuantileListProps = {
  count: 11,
  fatLines: false,
  numberShown: true,
  quantile: [1, 51, 113, 119, 129, 151, 197, 233, 283],
  scale: GANTT_SCALE_DEFAULT,
}

export const FullList = {
  render: () => {
    return (
      <GanttBarQuantileList {...baseGanttBarQuantileListProps} />
    )
  }
};

export const ShorterList = {
  render: () => {
    const props = {
      ...baseGanttBarQuantileListProps,
      count: 4, // needs a smaller count, though this fixed in code
      quantile: [5, 197, 233]
    }
    return (
      <GanttBarQuantileList {...props} />
    )
  }
};

export const FatLines = {
  render: () => {
    const props = {
      ...baseGanttBarQuantileListProps,
      fatLines: true,
    }
    return (
      <GanttBarQuantileList {...props} />
    )
  }
};

export const NumbersNotShown = {
  render: () => {
    const props = {
      ...baseGanttBarQuantileListProps,
      numberShown: false,
    }
    return (
      <GanttBarQuantileList {...props} />
    )
  }
};
