// ErrorOutput.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'



import ErrorOutput from './ErrorOutput';

export default {
  component: ErrorOutput,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

export const Primary = {
  render: () => {
    return (
      <ErrorOutput message='This is an error message' />
    )
  }
};
