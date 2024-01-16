// XAxisLineList.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import XAxisLineList from './XAxisLineList';

export default {
  component: XAxisLineList,
};

const baseXAxisLineListProps = {
  histogramHeight: 70,
  mostMaxOfAllThings: 300,
  showNumberList: true,
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

export const MassiveNumber = {
  render: () => {
    const props = {
      ...baseXAxisLineListProps,
      mostMaxOfAllThings: 12500,
    }
    return (
      <StoryBookPaddedWrapper>
        <XAxisLineList {...props}/>
      </StoryBookPaddedWrapper>
    )
  }
};

export const One = {
  render: () => {
    const props = {
      ...baseXAxisLineListProps,
      mostMaxOfAllThings: 1,
    }
    return (
      <StoryBookPaddedWrapper>
        <XAxisLineList {...props}/>
      </StoryBookPaddedWrapper>
    )
  }
};

export const Two = {
  render: () => {
    const props = {
      ...baseXAxisLineListProps,
      mostMaxOfAllThings: 2,
    }
    return (
      <StoryBookPaddedWrapper>
        <XAxisLineList {...props}/>
      </StoryBookPaddedWrapper>
    )
  }
};
