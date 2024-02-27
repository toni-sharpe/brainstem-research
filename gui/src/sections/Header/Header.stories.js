// Header.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import { ORDERED_FILTERS } from 'util/Constant/BaseConstantList'

import Header from './Header';

export default {
  component: Header,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseHeaderProps = {
  currentFilterList: ORDERED_FILTERS,
  currentUrl: 'GanttBarList'
}

export const Primary = {
  render: () => {
    return (
      <Header {...baseHeaderProps} />
    )
  }
};
