// DataAdjusterButtonList.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import DataAdjusterButtonList from './DataAdjusterButtonList';

export default {
  component: DataAdjusterButtonList,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseDataAdjusterButtonListProps = {
  adjusterList: [1, 2, 3, 5, 7, 11],
  labelFn: ({ adjustBy }) => `±${adjustBy}`,
  listLabel: 'List',
  onClickHandler: () => {},
  selectedFn: () => {},
}

export const Primary = {
  render: () => {
    return (
      <DataAdjusterButtonList {...baseDataAdjusterButtonListProps} />
    )
  }
};