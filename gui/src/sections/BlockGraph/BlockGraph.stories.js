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
  [  '22', { length: 9 }],
  [  '23', { length: 2 }],
  [  '24', { length: 3 }],
  [  '25', { length: 9 }],
  [  '26', { length: 19 }],
  [  '31', { length: 7 }],
  [  '32', { length: 9 }],
  [  '33', { length: 2 }],
  [  '34', { length: 3 }],
  [  '35', { length: 9 }],
  [  '36', { length: 19 }],
  [  '41', { length: 7 }],
  [  '42', { length: 9 }],
  [  '43', { length: 2 }],
  [  '44', { length: 3 }],
  [  '45', { length: 9 }],
  [  '46', { length: 19 }],
  [  '111', { length: 7 }],
  [  '112', { length: 9 }],
  [  '113', { length: 2 }],
  [  '114', { length: 3 }],
  [  '115', { length: 9 }],
  [  '116', { length: 19 }],
  [  '112', { length: 7 }],
  [  '122', { length: 9 }],
  [  '132', { length: 2 }],
  [  '142', { length: 3 }],
  [  '152', { length: 9 }],
  [  '162', { length: 19 }],
  [  '221', { length: 7 }],
  [  '222', { length: 9 }],
  [  '223', { length: 2 }],
  [  '224', { length: 3 }],
  [  '225', { length: 9 }],
  [  '226', { length: 19 }],
  [  '311', { length: 7 }],
  [  '312', { length: 9 }],
  [  '313', { length: 2 }],
  [  '314', { length: 3 }],
  [  '315', { length: 9 }],
  [  '316', { length: 19 }],
  [  '411', { length: 7 }],
  [  '421', { length: 9 }],
  [  '431', { length: 2 }],
  [  '441', { length: 3 }],
  [  '451', { length: 9 }],
  [  '461', { length: 19 }],
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
