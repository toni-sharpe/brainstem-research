// SvgLabelText.story.js
import StoryBookSvgWrapper from 'components/StoryBookSvgWrapper/StoryBookSvgWrapper'

import SvgLabelText from './SvgLabelText';

export default {
  component: SvgLabelText,
};

const baseSvgLabelTextProps = {
  k: 'unique',
  label: '51',
  x: 50,
  y: 50,
}

export const ExactlyCentered = {
  render: () => {
    return (
      <StoryBookSvgWrapper>
        <SvgLabelText {...baseSvgLabelTextProps}/>
      </StoryBookSvgWrapper>
    )
  }
};
