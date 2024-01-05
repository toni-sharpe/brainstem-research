// QuantileListNumberLabel.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import QuantileListNumberLabel from './QuantileListNumberLabel';

export default {
  component: QuantileListNumberLabel,
};

const baseQuantileListNumberLabelProps = {
  leftPos: { left: '10%' },
  numberTop: 31,
  val: 53,
}

export const Primary = {
  render: () => {
    const heading = `left % shows several across the vieport`
    return (
      <StoryBookPaddedWrapper heading={heading}>
        <QuantileListNumberLabel {...baseQuantileListNumberLabelProps} />
        <QuantileListNumberLabel leftPos={{ left: '30%' }} numberTop={47} val={101} />
        <QuantileListNumberLabel leftPos={{ left: '60%' }} numberTop={73} val={193} />
        <QuantileListNumberLabel leftPos={{ left: '90%' }} numberTop={87} val={159} />
        <QuantileListNumberLabel leftPos={{ left: '75%' }} numberTop={107} val={123} />
      </StoryBookPaddedWrapper>
    )
  }
};
