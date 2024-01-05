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
        <StoryBookExampleBlock />
        <StoryBookExampleBlock />
      </SubPageWrapper>
    )
  }
};
