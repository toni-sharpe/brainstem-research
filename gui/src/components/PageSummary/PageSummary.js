import i18next from 'util/i18next/i18next'
import React from 'react'

const i18nBase = 'PageSummary'

function PageSummary() {
  return (
    <div className='column-layout space-children--wide-column'>
      <div className='column-layout space-children--column'>
        <h3>{i18next.t(`${i18nBase}.heading1`)}</h3>
        <a href={i18next.t(`${i18nBase}.link1`)}>{i18next.t(`${i18nBase}.heading1`)}</a>
        <p>{i18next.t(`${i18nBase}.paragraph1`)}</p>
      </div>
      <div className='column-layout space-children--column'>
        <h3>{i18next.t(`${i18nBase}.heading2`)}</h3>
        <a href={i18next.t(`${i18nBase}.link2`)}>{i18next.t(`${i18nBase}.heading2`)}</a>
        <p>{i18next.t(`${i18nBase}.paragraph2`)}</p>
        <p>{i18next.t(`${i18nBase}.paragraph3`)}</p>
      </div>
      <div className='column-layout space-children--column'>
        <h3>{i18next.t(`${i18nBase}.heading3`)}</h3>
        <a href={i18next.t(`${i18nBase}.link3`)}>{i18next.t(`${i18nBase}.heading3`)}</a>
        <p>{i18next.t(`${i18nBase}.paragraph4`)}</p>
      </div>
      <div className='column-layout space-children--column'>
        <h3>{i18next.t(`${i18nBase}.heading4`)}</h3>
        <a href={i18next.t(`${i18nBase}.link4`)}>{i18next.t(`${i18nBase}.heading4`)}</a>
        <p>{i18next.t(`${i18nBase}.paragraph5`)}</p>
      </div>
      <div className='column-layout space-children--column'>
        <h3>{i18next.t(`${i18nBase}.heading5`)}</h3>
        <a href={i18next.t(`${i18nBase}.link5`)}>{i18next.t(`${i18nBase}.heading5`)}</a>
        <p>{i18next.t(`${i18nBase}.paragraph6`)}</p>
      </div>
      <div className='column-layout space-children--column'>
        <h3>{i18next.t(`${i18nBase}.heading6`)}</h3>
        <a href={i18next.t(`${i18nBase}.link6`)}>{i18next.t(`${i18nBase}.heading6`)}</a>
        <p>{i18next.t(`${i18nBase}.paragraph7`)}</p>
      </div>
      <div className='column-layout space-children--column'>
        <h3>{i18next.t(`${i18nBase}.heading7`)}</h3>
        <a href={i18next.t(`${i18nBase}.link7`)}>{i18next.t(`${i18nBase}.heading7`)}</a>
        <p>{i18next.t(`${i18nBase}.paragraph8`)}</p>
      </div>
      <div className='column-layout space-children--column'>
        <h3>{i18next.t(`${i18nBase}.heading8`)}</h3>
        <a href={i18next.t(`${i18nBase}.link8`)}>{i18next.t(`${i18nBase}.heading8`)}</a>
        <p>{i18next.t(`${i18nBase}.paragraph9`)}</p>
      </div>
    </div>
  );
}

export default PageSummary;
