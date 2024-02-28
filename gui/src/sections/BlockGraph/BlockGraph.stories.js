// BlockGraph.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import BlockGraph from './BlockGraph';

export default {
  component: BlockGraph,
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

const labelValList = [
  [  '1', { length: 7 }],
  [  '2', { length: 9 }],
  [  '3', { length: 2 }],
  [  '4', { length: 3 }],
  [  '5', { length: 9 }],
  [  '6', { length: 19 }],
  [  '11', { length: 7 }],
  [  '12', { length: 9 }],
  [  '13', { length: 2 }],
  [  '14', { length: 3 }],
  [  '15', { length: 9 }],
  [  '16', { length: 19 }],
  [  '21', { length: 7 }],
]

const BlockGraphProps = {
  labelValList
}

export const RegularPage = {
  render: () => {
    return (
      <BlockGraph {...BlockGraphProps} />
    )
  }
};
