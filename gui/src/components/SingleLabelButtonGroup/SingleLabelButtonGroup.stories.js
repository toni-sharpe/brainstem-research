// SingleLabelButtonGroup.story.js
import Button from 'components/Button/Button'

import SingleLabelButtonGroup from './SingleLabelButtonGroup';

export default {
  component: SingleLabelButtonGroup,
};

export const WithButtonGroup = {
  render: () => {
    return (
      <SingleLabelButtonGroup label='Button group'>
        <ul className='row-layout space-children--with-border'>
          <li><Button label='one' /></li>
          <li><Button label='two' /></li>
          <li><Button label='three' /></li>
        </ul>
      </SingleLabelButtonGroup>
    )
  }
};

export const OneIsPossibleToo = {
  render: () => {
    return (
      <SingleLabelButtonGroup label='Button group'>
        <ul className='row-layout space-children--with-border'>
          <li><Button label='one' /></li>
        </ul>
      </SingleLabelButtonGroup>
    )
  }
};
