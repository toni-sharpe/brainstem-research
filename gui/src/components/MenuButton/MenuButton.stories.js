// MenuButton.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import MenuButton from './MenuButton';

export default {
  component: MenuButton,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const commonMenuButtonProps = {
  onClick: () => {},
  label: 'Open',
  title: 'Open',
}

export const Primary = {
  render: () => {
    return(
      <div style={{ width: '100px', margin: '0 auto' }}>
        <MenuButton {...commonMenuButtonProps} />
      </div>
    )
  }
}
