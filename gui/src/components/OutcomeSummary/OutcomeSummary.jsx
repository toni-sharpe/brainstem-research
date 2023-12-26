import i18next from 'util/i18next/i18next'
import React from 'react'

import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'
import PercOutput from 'components/PercOutput/PercOutput'
import SingleLabelButtonGroup from 'components/SingleLabelButtonGroup/SingleLabelButtonGroup'

import './OutcomeSummary.scss'

const i18nBase = 'OutcomeSummmary'

function OutcomeSummary({
  fatalCount,
  nonFatalCount,
  fatalAve,
  nonFatalAve,
  totalAvailableDataPoints,
  unknownCount,
}) {
  const aveClassPrefix = 'outcome-summary__label outcome-summary__'
  const fatalAveClassNames = `${(fatalAve < nonFatalAve) && 'outcome-summary__lowest-median-marker'} ${aveClassPrefix}fatal-ave`
  const nonFatalAveClassNames = `${(fatalAve >= nonFatalAve) && 'outcome-summary__lowest-median-marker'} ${aveClassPrefix}non-fatal-ave`
  const total = nonFatalCount + fatalCount

  const titleAndPercBar = (
    <div className='row-layout space-children--with-border'>
      <h3>{i18next.t(`${i18nBase}.outcomeSummary`)}</h3>
      <figure className='row-layout space-children'>
        <figcaption>% of <i>N</i></figcaption>
        <PercOutput
          totalOnFigure={total}
          totalAvailableDataPoints={totalAvailableDataPoints}
          unknownCount={unknownCount}
        />
      </figure>
    </div>
  )

  return ( 
    <SingleLabelButtonGroup
      label={titleAndPercBar}
    >
      <ul className='outcome-summary row-layout space-children--wide-with-border'>
        <li className='outcome-summary__total row-layout space-children'>
          <span>{i18next.t(`${i18nBase}.total`)}:</span>
          <span className='outcome-summary__total-marker outcome-summary__label'>
            { total }
          </span>
        </li>
        <li className='row-layout space-children--with-border'>
          <span>{i18next.t(`${i18nBase}.fatal`)}: {fatalCount}</span>
          { fatalCount > 0 && (<div>Median: <span className={fatalAveClassNames}>{fatalAve}</span></div>) }
        </li>
        <li className='row-layout space-children--with-border'>
          <span>{i18next.t(`${i18nBase}.nonFatal`)}: {nonFatalCount}</span>
          { nonFatalCount > 0 && (<div>Median: <span className={nonFatalAveClassNames}>{nonFatalAve}</span></div>) }
        </li>
        <li>
           <span>{i18next.t(`${i18nBase}.unknown`)}: </span>
           <span className='outcome-summary__label outcome-summary__unknown-count'>{unknownCount}</span>
        </li>
      </ul>
    </SingleLabelButtonGroup>
  )
}

OutcomeSummary.defaultProps = {
  fatalCount: 0,
  nonFatalCount: 0,
  unknownCount: 0,
}

OutcomeSummary.propTypes = {
  fatalCount: NumberOrStringPropType,
  nonFatalCount: NumberOrStringPropType,
  unknownCount: NumberOrStringPropType,
}

export default OutcomeSummary
