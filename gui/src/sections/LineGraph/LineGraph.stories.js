// LineGraph.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'
import LineGraphExampleData from 'example-data/LineGraph.example-data'

import LineGraph from './LineGraph';

export default {
  component: LineGraph,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper
        wrapperElem='div'
        wrapperElemProps={ { style: { width: '800px' } } }
      >
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};


const baseLineGraphProps = {
  ariaLabel: 'Line graph demonstration for storybook',
  data: LineGraphExampleData,
  heading: 'Storybook Linegraph',
  max: 512,
}

export const Primary = {
  render: () => {
    return (
      <LineGraph {...baseLineGraphProps} />
    )
  }
};
