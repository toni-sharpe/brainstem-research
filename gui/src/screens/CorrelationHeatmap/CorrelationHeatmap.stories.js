// CorrelationHeatmap.story.js
import APICorrelationHeatmapData from 'example-data/APICorrelationHeatmap.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import CorrelationHeatmap from './CorrelationHeatmap';

export default {
  component: CorrelationHeatmap,
};

const baseCorrelationHeatmapProps = {
  data: APICorrelationHeatmapData
}

export const RegularPage = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <CorrelationHeatmap {...baseCorrelationHeatmapProps} />
      </StoryBookPaddedWrapper>
    )
  }
};
