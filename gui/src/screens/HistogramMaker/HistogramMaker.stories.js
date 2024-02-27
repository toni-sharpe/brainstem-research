// HistogramMaker.story.js
import APIHistogramMakerData from 'example-data/APIHistogramMaker.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import HistogramMaker from './HistogramMaker';

export default {
  component: HistogramMaker,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper isScreenWidth>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseHistogramMakerProps = {
  data: APIHistogramMakerData
}

export const RegularPage = {
  render: () => {
    return (
      <HistogramMaker {...baseHistogramMakerProps} />
    )
  }
};
