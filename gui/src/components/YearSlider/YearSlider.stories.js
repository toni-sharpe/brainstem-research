// YearSlider.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import YearSlider from './YearSlider';

export default {
  component: YearSlider,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper isScreenWidth>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseYearSliderProps = {
  startYear: 1900,
  endYear: 2000,
  yearStep: 1,
}

export const Primary = {
  render: () => {
    return (
      <YearSlider
        {...baseYearSliderProps}
      />
    )
  }
};

export const DefaultEndThisYear = {
  render: () => {
    const props = {
      endYear: undefined
    }
    return (
      <YearSlider
        {...props}
      />
    )
  }
};
