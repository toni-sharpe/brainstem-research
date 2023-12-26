// PrimeSymptomList.story.js
import APIPrimeSymptomListData from 'example-data/APIPrimeSymptomList.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import PrimeSymptomList from './PrimeSymptomList';

export default {
  component: PrimeSymptomList,
};

const PrimeSymptomListProps = {
  data: APIPrimeSymptomListData
}

export const RegularPage = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <PrimeSymptomList {...PrimeSymptomListProps} />
      </StoryBookPaddedWrapper>
    )
  }
};
