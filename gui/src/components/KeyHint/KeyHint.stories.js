// KeyHint.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import KeyHint from './KeyHint';

export default {
  component: KeyHint,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseKeyHintProps = {
  letter: 'x'
}

export const Primary = {
  render: () => {
    return (
      <KeyHint {...baseKeyHintProps} />
    )
  }
};
