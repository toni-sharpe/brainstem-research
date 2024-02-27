// QuantileListNumberLabel.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'



import QuantileListNumberLabel from './QuantileListNumberLabel';

export default {
  component: QuantileListNumberLabel,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper
        heading='left % shows several across the vieport'
        height={160}
        widthSetTo100
      >
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

export const Primary = {
  render: () => {
    return (
      <>
        <QuantileListNumberLabel left={10} numberTop={11} val={53} />
        <QuantileListNumberLabel left={30} numberTop={47} val={101} />
        <QuantileListNumberLabel left={60} numberTop={73} val={193} />
        <QuantileListNumberLabel left={90} numberTop={87} val={159} />
        <QuantileListNumberLabel left={75} numberTop={107} val={123} />
      </>
    )
  }
};
