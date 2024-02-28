// GraphSet.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import GraphSet from './GraphSet';

export default {
  component: GraphSet,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper
        isScreenWidth
      >
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

export const RegularPage = {
  render: () => {
    return (
      <GraphSet graphKey='dragGraphStoryBook' labelValList={[
          [  '1', { length:  7, rgb: [100,  80, 160] }],
          [  '2', { length:  9, rgb: [ 80,  70, 170] }],
          [  '3', { length:  2, rgb: [ 90,  70, 180] }],
          [  '4', { length:  3, rgb: [180, 100, 100] }],
          [  '5', { length:  9, rgb: [ 90,  70, 130] }],
          [  '6', { length: 19, rgb: [120, 100, 180] }],
          [ '11', { length:  7, rgb: [ 90,  70, 180] }],
          [ '12', { length:  9, rgb: [120, 100,  90] }],
          [ '13', { length:  2, rgb: [ 90,  70, 180] }],
          [ '14', { length:  3, rgb: [ 60, 110, 110] }],
          [ '15', { length:  9, rgb: [ 60, 110, 130] }],
          [ '16', { length: 19, rgb: [ 60, 100, 130] }],
          [ '21', { length:  7, rgb: [100,  50, 200] }],
        ]}
      />
    )
  }
};

export const SmallSet = {
  render: () => {
    return (
      <GraphSet graphKey='dragGraphStoryBook' labelValList={[
          [  '1', { length:  7, rgb: [100,  80, 160] }],
          [  '2', { length:  9, rgb: [ 80,  70, 170] }]
        ]}
      />
    )
  }
};

export const SmallSetHugeNumber = {
  render: () => {
    return (
      <GraphSet graphKey='dragGraphStoryBook' labelValList={[
          [  '1', { length:   7, rgb: [100,  80, 160] }],
          [  '2', { length: 153, rgb: [ 80,  70, 170] }]
        ]}
      />
    )
  }
};

export const OneNumber = {
  render: () => {
    return (
      <GraphSet graphKey='dragGraphStoryBook' labelValList={[
          [  '1', { length:  9, rgb: [100,  80, 160] }],
        ]}
      />
    )
  }
};
