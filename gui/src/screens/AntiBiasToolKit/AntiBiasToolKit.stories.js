// AntiBiasToolKit.story.js
import APIAntiBiasToolKitData from 'example-data/APIAntiBiasToolKit.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import AntiBiasToolKit from './AntiBiasToolKit';

export default {
  component: AntiBiasToolKit,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper
        heading='Anti-bias toolkit default page on load'
        isScreenWidth
      >
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const AntiBiasToolKitProps = {
  data: APIAntiBiasToolKitData
}

export const RegularPage = {
  render: () => {
    return (
      <AntiBiasToolKit {...AntiBiasToolKitProps} />
    )
  }
};
