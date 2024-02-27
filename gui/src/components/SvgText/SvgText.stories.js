// SvgText.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import StoryBookSvgWrapper from 'components/StoryBookSvgWrapper/StoryBookSvgWrapper'

import SvgText from './SvgText';

export default {
  component: SvgText,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseSvgTextProps = {
  text: 'TEXT',
  x: 30,
  y: 30,
}

export const Primary = {
  render: () => {
    return (
      <StoryBookSvgWrapper scale='100'>
        <SvgText {...baseSvgTextProps} />
      </StoryBookSvgWrapper>
    )
  }
};
