// XAxisLineList.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'



import XAxisLineList from './XAxisLineList';

export default {
  component: XAxisLineList,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper
        height={580}
        widthSetTo100
      >
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseXAxisLineListProps = {
  histogramHeight: 70,
  mostMaxOfAllThings: 300,
  showNumberList: true,
}

export const Primary = {
  render: () => {
    return (
      <XAxisLineList {...baseXAxisLineListProps}/>
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
      <XAxisLineList {...props}/>
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
      <XAxisLineList {...props}/>
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
      <XAxisLineList {...props}/>
    )
  }
};
