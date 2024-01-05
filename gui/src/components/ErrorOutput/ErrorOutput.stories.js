// ErrorOutput.story.js
import ErrorOutput from './ErrorOutput';

export default {
  component: ErrorOutput,
};

export const Primary = {
  render: () => {
    return (
      <ErrorOutput message='This is an error message' />
    )
  }
};
