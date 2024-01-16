// SubPageWrapper.story.js
import StoryBookExampleBlock from 'components/StoryBookExampleBlock/StoryBookExampleBlock'
import SubPageWrapper from './SubPageWrapper';

export default {
  component: SubPageWrapper,
};

const baseSubPageWrapperProps = {
  heading: 'Sub page wrapper',
}

export const Primary = {
  render: () => {
    return (
      <SubPageWrapper {...baseSubPageWrapperProps}>
        <div><StoryBookExampleBlock /></div>
        <div><StoryBookExampleBlock /></div>
      </SubPageWrapper>
    )
  }
};

export const ExtraClass = {
  render: () => {
    const props = {
      ...baseSubPageWrapperProps,
      extraClass: 'sub-page-wrapper__story-book',
    }
    return (
      <SubPageWrapper {...props}>
        <div><StoryBookExampleBlock /></div>
        <div><StoryBookExampleBlock /></div>
      </SubPageWrapper>
    )
  }
};

export const NoBorderBreak = {
  render: () => {
    const props = {
      ...baseSubPageWrapperProps,
      withBorder: false,
    }
    return (
      <SubPageWrapper {...props}>
        <div><StoryBookExampleBlock /></div>
        <div><StoryBookExampleBlock /></div>
      </SubPageWrapper>
    )
  }
};
