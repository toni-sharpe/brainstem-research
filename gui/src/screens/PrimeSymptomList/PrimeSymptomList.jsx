import React from 'react'
import i18next from 'util/i18next/i18next'

import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import PrimeSymptomHistogram from 'sections/PrimeSymptomHistogram/PrimeSymptomHistogram'

const i18nBase = 'PrimeSymptomList'

function PrimeSymptomList({ data }) {
  return (
    <PageDetailWrapper
      count={data?.length}
      i18nBase={i18nBase}
      subHeading={i18next.t(`${i18nBase}.GraphHeading`)}
    >
      <PrimeSymptomHistogram
        blockSize={44}
        histogramHeight={60}
        primeSymptomData={data}
      />
    </PageDetailWrapper>
  );
}

export default PrimeSymptomList;
