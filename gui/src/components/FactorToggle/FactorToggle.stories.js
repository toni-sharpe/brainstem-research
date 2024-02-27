// FactorToggle.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'



import FactorToggle from './FactorToggle';

export default {
  component: FactorToggle,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseFactorToggleProps = {
  currentFactorOn: true,
  setCurrentFactorOn: () => {}
}

export const Primary = {
  render: () => {
    return (<FactorToggle {...baseFactorToggleProps} />)
  }
};
