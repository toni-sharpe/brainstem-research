// LineGraph.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'
import LineGraphExampleData from 'example-data/LineGraph.example-data'
import LineGraphMoreLinesExampleData from 'example-data/LineGraphMoreLines.example-data'

import LineGraph from './LineGraph';

export default {
  component: LineGraph,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper
        wrapperElem='div'
        wrapperElemProps={ { style: { width: '1560px' } } }
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
  max: 500,
}

export const SomeLines = {
  render: () => {
    return (
      <LineGraph {...baseLineGraphProps} />
    )
  }
};

export const AFewMoreLines = {
  render: () => {
    const props = {
      ...baseLineGraphProps,
      data: LineGraphMoreLinesExampleData
    }
    return (
      <LineGraph {...props} />
    )
  }
};
