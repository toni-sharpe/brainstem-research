// XAxisLineList.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import XAxisLineList from './XAxisLineList';

export default {
  component: XAxisLineList,
};

const baseXAxisLineListProps = {
  barMargin: 10,
  blockSize: 1,
  histogramHeight: 10,
  graphWidth: '95%',
  showNumberList: true,
  twoFullBars: 110,
}

export const Primary = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <XAxisLineList {...baseXAxisLineListProps}/>
      </StoryBookPaddedWrapper>
    )
  }
};
