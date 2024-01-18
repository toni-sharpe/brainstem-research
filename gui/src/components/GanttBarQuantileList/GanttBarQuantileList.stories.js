// GanttBarQuantileList.story.js
import { SCALE_DEFAULT } from 'util/Constant/BaseConstantList'

import GanttBarQuantileList from './GanttBarQuantileList';

export default {
  component: GanttBarQuantileList,
};

const baseGanttBarQuantileListProps = {
  count: 11,
  fatLines: false,
  numberShown: true,
  quantile: [1, 5, 11, 19, 29, 37, 43, 53, 61],
  scale: SCALE_DEFAULT,
}

export const FullList = {
  render: () => {
    return (
      <ol>
        <GanttBarQuantileList {...baseGanttBarQuantileListProps} />
      </ol>
    )
  }
};

export const ShorterList = {
  render: () => {
    const props = {
      ...baseGanttBarQuantileListProps,
      count: 4, // needs a smaller count, though this fixed in code
      quantile: [5, 29, 53]
    }
    return (
      <ol>
        <GanttBarQuantileList {...props} />
      </ol>
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
      <ol>
        <GanttBarQuantileList {...props} />
      </ol>
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
      <ol>
        <GanttBarQuantileList {...props} />
      </ol>
    )
  }
};
