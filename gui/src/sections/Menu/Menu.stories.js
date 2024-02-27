// Menu.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import Menu from './Menu';

export default {
  component: Menu,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseMenuProps = {
  currentUrl: 'GanttBarList'
}

export const Primary = {
  render: () => {
    return (
      <Menu {...baseMenuProps} />
    )
  }
};
