// InteractiveTimeLineStatChart.story.js
import APITimeLineStatChartData from 'example-data/APITimeLineStatChart.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import InteractiveTimeLineStatChart from './InteractiveTimeLineStatChart';

export default {
  component: InteractiveTimeLineStatChart,
};

const baseInteractiveTimeLineStatChartProps = {
  statisticList: APITimeLineStatChartData
}

export const RegularPage = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <InteractiveTimeLineStatChart {...baseInteractiveTimeLineStatChartProps} />
      </StoryBookPaddedWrapper>
    )
  }
};
