import i18next from 'util/i18next/i18next'
import React from 'react'

import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'

const i18nBase = 'SVG'

function SVG() {
  return (
    <PageDetailWrapper
      i18nBase={'SVG'}
    >
      {i18next.t(`${i18nBase}.comingSoon`)}
    </PageDetailWrapper>
  );
}

export default SVG;
