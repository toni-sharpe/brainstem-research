// HistogramMaker.story.js
import APIHistogramMakerData from 'example-data/APIHistogramMaker.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import HistogramMaker from './HistogramMaker';

export default {
  component: HistogramMaker,
};

const baseHistogramMakerProps = {
  data: APIHistogramMakerData
}

export const RegularPage = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <HistogramMaker {...baseHistogramMakerProps} />
      </StoryBookPaddedWrapper>
    )
  }
};
