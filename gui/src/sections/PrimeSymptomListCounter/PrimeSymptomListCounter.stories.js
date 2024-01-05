// PrimeSymptomListCounter.story.js
import PrimeSymptomListCounter from './PrimeSymptomListCounter';

export default {
  component: PrimeSymptomListCounter,
};

const basePrimeSymptomListCounterProps = {
  currentGraphPoints: 20,
  setCurrentGraphPoints: () => {},
  totalCount: 50
}

export const Primary = {
  render: () => {
    return (
      <PrimeSymptomListCounter {...basePrimeSymptomListCounterProps} />
    )
  }
};
