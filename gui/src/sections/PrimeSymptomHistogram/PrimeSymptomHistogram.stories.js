// PrimeSymptomHistogram.story.js
import PrimeSymptomHistogramData from 'example-data/APIPrimeSymptomList.example-data'

import PrimeSymptomHistogram from './PrimeSymptomHistogram';

export default {
  component: PrimeSymptomHistogram,
};

const basePrimeSymptomHistogramProps = {
  biasedTimingError: 0,
  blockSize: 30,
  primeSymptomData: PrimeSymptomHistogramData,
  timingError: 0,
}

export const Primary = {
  render: () => {
    return (
      <PrimeSymptomHistogram {...basePrimeSymptomHistogramProps} />
    )
  }
};

export const TranslationsForAria = {
  render: () => {
    const props = {
      ...basePrimeSymptomHistogramProps,
      translationSet: {
        barData: ['x', 'y']
      }
    }
    return (
      <PrimeSymptomHistogram {...basePrimeSymptomHistogramProps} />
    )
  }
};
