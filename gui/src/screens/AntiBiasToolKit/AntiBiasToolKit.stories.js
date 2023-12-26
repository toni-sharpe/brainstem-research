// AntiBiasToolKit.story.js
import APIAntiBiasToolKitData from 'example-data/APIAntiBiasToolKit.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import AntiBiasToolKit from './AntiBiasToolKit';

export default {
  component: AntiBiasToolKit,
};

const AntiBiasToolKitProps = {
  data: APIAntiBiasToolKitData
}

export const RegularPage = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <AntiBiasToolKit {...AntiBiasToolKitProps} />
      </StoryBookPaddedWrapper>
    )
  }
};
