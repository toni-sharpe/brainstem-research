// TimeLineStatChart.story.js
import APITimeLineStatChartData from 'example-data/APITimeLineStatChart.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import TimeLineStatChart from './TimeLineStatChart';

export default {
  component: TimeLineStatChart,
};

const baseTimeLineStatChartProps = {
  data: APITimeLineStatChartData
}

export const RegularPage = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <TimeLineStatChart {...baseTimeLineStatChartProps} />
      </StoryBookPaddedWrapper>
    )
  }
};
