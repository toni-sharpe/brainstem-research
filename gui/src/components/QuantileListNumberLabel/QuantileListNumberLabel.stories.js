// QuantileListNumberLabel.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import QuantileListNumberLabel from './QuantileListNumberLabel';

export default {
  component: QuantileListNumberLabel,
};

const baseQuantileListNumberLabelProps = {
  left: 10,
  numberTop: 31,
  val: 53,
}

export const Primary = {
  render: () => {
    const heading = `left % shows several across the vieport`
    return (
      <StoryBookPaddedWrapper heading={heading}>
        <QuantileListNumberLabel {...baseQuantileListNumberLabelProps} />
        <QuantileListNumberLabel left={30} numberTop={47} val={101} />
        <QuantileListNumberLabel left={60} numberTop={73} val={193} />
        <QuantileListNumberLabel left={90} numberTop={87} val={159} />
        <QuantileListNumberLabel left={75} numberTop={107} val={123} />
      </StoryBookPaddedWrapper>
    )
  }
};
