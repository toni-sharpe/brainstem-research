// TimeLine.story.js
import APITimeLineData from 'example-data/APITimeLine.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import TimeLine from './TimeLine';

export default {
  component: TimeLine,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper isScreenWidth>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseTimeLineProps = {
  data: APITimeLineData
}

export const RegularPage = {
  render: () => {
    return (
      <TimeLine {...baseTimeLineProps} />
    )
  }
};
