// GeneralResponseTimeLineStatChart.story.js
import APITimeLineStatChartData from 'example-data/APITimeLineStatChart.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import GeneralResponseTimeLineStatChart from './GeneralResponseTimeLineStatChart';

export default {
  component: GeneralResponseTimeLineStatChart,
};

const baseGeneralResponseTimeLineStatChartProps = {
  data: APITimeLineStatChartData
}

export const RegularPage = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <GeneralResponseTimeLineStatChart {...baseGeneralResponseTimeLineStatChartProps} />
      </StoryBookPaddedWrapper>
    )
  }
};
