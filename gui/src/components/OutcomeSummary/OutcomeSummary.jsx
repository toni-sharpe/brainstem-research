import i18next from 'util/i18next/i18next'
import React from 'react'

import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'
import PercOutput from 'components/PercOutput/PercOutput'

import './OutcomeSummary.scss'

const i18nBase = 'OutcomeSummmary'

function OutcomeSummary({
  severeCount,
  nonSevereCount,
  severeAve,
  nonSevereAve,
  totalAvailableDataPoints,
  unknownCount,
}) {
  const aveClassPrefix = 'outcome-summary__label outcome-summary__'
  const severeAveClassNames = `${(severeAve < nonSevereAve) && 'outcome-summary__lowest-median-marker'} ${aveClassPrefix}severe-ave`
  const nonSevereAveClassNames = `${(severeAve >= nonSevereAve) && 'outcome-summary__lowest-median-marker'} ${aveClassPrefix}non-severe-ave`
  const total = nonSevereCount + severeCount

  return (
    <div className='outcome-summary'>
      <div className='outcome-summary__percentage-wrapper'>
        <h3>{i18next.t(`${i18nBase}.outcomeSummary`)}</h3>
        <figure className='outcome-summary__percentage'>
          <figcaption>% of <i>N</i></figcaption>
          <PercOutput
            totalOnFigure={total}
            totalAvailableDataPoints={totalAvailableDataPoints}
            unknownCount={unknownCount}
          />
        </figure>
      </div>
      <ul className='outcome-summary__total-list'>
        <li className='outcome-summary__total row-layout space-children'>
          <span>{i18next.t(`${i18nBase}.total`)}:</span>
          <span className='outcome-summary__total-marker outcome-summary__label'>
            { total }
          </span>
        </li>
        <li className='row-layout space-children'>
          <span>{i18next.t(`${i18nBase}.severe`)}: {severeCount}</span>
          { severeCount > 0 && (<div><span className='hide'>Median: </span><span className={severeAveClassNames}>{severeAve}</span></div>) }
        </li>
        <li className='row-layout space-children'>
          <span>{i18next.t(`${i18nBase}.nonSevere`)}: {nonSevereCount}</span>
          { nonSevereCount > 0 && (<div><span className='hide'>Median: </span><span className={nonSevereAveClassNames}>{nonSevereAve}</span></div>) }
        </li>
        <li>
           <span>{i18next.t(`${i18nBase}.unknown`)}: </span>
           <span className='outcome-summary__label outcome-summary__unknown-count'>{unknownCount}</span>
        </li>
      </ul>
    </div>
  )
}

OutcomeSummary.defaultProps = {
  severeCount: 0,
  nonSevereCount: 0,
  unknownCount: 0,
}

OutcomeSummary.propTypes = {
  severeCount: NumberOrStringPropType,
  nonSevereCount: NumberOrStringPropType,
  unknownCount: NumberOrStringPropType,
}

export default OutcomeSummary
