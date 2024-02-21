// SvgText.story.js
import StoryBookSvgWrapper from 'components/StoryBookSvgWrapper/StoryBookSvgWrapper'

import SvgText from './SvgText';

export default {
  component: SvgText,
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
