// SingleLabelButtonList.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import Button from 'components/Button/Button'

import SingleLabelButtonList from './SingleLabelButtonList';

export default {
  component: SingleLabelButtonList,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

export const WithButtonGroup = {
  render: () => {
    return (
      <SingleLabelButtonList label='Button group'>
        <ul className='row-layout space-children--with-border'>
          <li><Button label='one' /></li>
          <li><Button label='two' /></li>
          <li><Button label='three' /></li>
        </ul>
      </SingleLabelButtonList>
    )
  }
};

export const OneIsPossibleToo = {
  render: () => {
    return (
      <SingleLabelButtonList label='Button group'>
        <ul className='row-layout space-children--with-border'>
          <li><Button label='one' /></li>
        </ul>
      </SingleLabelButtonList>
    )
  }
};
