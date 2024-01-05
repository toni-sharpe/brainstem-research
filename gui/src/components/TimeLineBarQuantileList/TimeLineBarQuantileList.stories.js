// TimeLineBarQuantileList.story.js
import { SCALE_DEFAULT } from 'util/Constant/BaseConstantList'

import TimeLineBarQuantileList from './TimeLineBarQuantileList';

export default {
  component: TimeLineBarQuantileList,
};

const baseTimeLineBarQuantileListProps = {
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
        <TimeLineBarQuantileList {...baseTimeLineBarQuantileListProps} />
      </ol>
    )
  }
};

export const ShorterList = {
  render: () => {
    const props = {
      ...baseTimeLineBarQuantileListProps,
      count: 4, // needs a smaller count, though this fixed in code
      quantile: [5, 29, 53]
    }
    return (
      <ol>
        <TimeLineBarQuantileList {...props} />
      </ol>
    )
  }
};

export const FatLines = {
  render: () => {
    const props = {
      ...baseTimeLineBarQuantileListProps,
      fatLines: true,
    }
    return (
      <ol>
        <TimeLineBarQuantileList {...props} />
      </ol>
    )
  }
};

export const NumbersNotShown = {
  render: () => {
    const props = {
      ...baseTimeLineBarQuantileListProps,
      numberShown: false,
    }
    return (
      <ol>
        <TimeLineBarQuantileList {...props} />
      </ol>
    )
  }
};
