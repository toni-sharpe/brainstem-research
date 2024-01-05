import { map, pipe, toPairs } from 'ramda'
import i18next from 'util/i18next/i18next'
import React from 'react'

import Button from 'components/Button/Button'
import SecondaryNav from 'sections/SecondaryNav/SecondaryNav'
import { secondaryNavProps } from 'util/UtilNav/UtilNav'

function SecondaryNavSumAndFilterList({
  dataPointSumList,
  dataPointSumPerMonth,
  filterBy,
  i18nBase,
  setDataPointSumPerMonth,
  setFilterBy,
  timeLineFilterList,
}) {
  const commonNavProps = {
    currentPanel: dataPointSumPerMonth,
    i18nBase,
    setCurrentPanel: setDataPointSumPerMonth,
  }

  return (
    <SecondaryNav ariaLabel={i18next.t(`${i18nBase}.secondaryNavSumAndFilterList`)}>
      <li className='row-layout space-children--wide-with-border'>
        <ol key='sum-list' className='row-layout space-children'>
          {dataPointSumList.map(k => (
            <li key={k}>
              <Button {...secondaryNavProps({ ...commonNavProps, k })} />
            </li>
          ))}
        </ol>
        <ol key='filter-list' className='row-layout space-children'>
          {
            pipe(
              toPairs,
              map(([label, filter]) => {
                const isSelected = filter[1] === filterBy[1]

                return (
                  <li key={label}>
                    <Button
                      isSelected={isSelected}
                      label={label}
                      onClick={() => setFilterBy(filter)}
                      size='medium'
                    />
                  </li>
                )
              })
            )(timeLineFilterList)
          }
        </ol>
      </li>
    </SecondaryNav>
  )
}

export default SecondaryNavSumAndFilterList
