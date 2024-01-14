import i18next from 'util/i18next/i18next'
import React from 'react'

import Button from 'components/Button/Button'
import SecondaryNav from 'sections/SecondaryNav/SecondaryNav'
import { secondaryNavProps } from 'util/UtilNav/UtilNav'

function SecondaryNavSumAndFilterList({
  dataPointSumList,
  dataPointSumPerMonth,
  extraClass,
  i18nBase,
  setDataPointSumPerMonth,
}) {
  const commonNavProps = {
    currentPanel: dataPointSumPerMonth,
    i18nBase,
    setCurrentPanel: setDataPointSumPerMonth,
  }

  return (
    <SecondaryNav
      ariaLabel={i18next.t(`${i18nBase}.secondaryNavSumAndFilterList`)}
      extraClass={extraClass}
    >
      <li className='row-layout space-children--wide-with-border'>
        <ol key='sum-list' className='row-layout space-children'>
          {dataPointSumList.map(k => (
            <li key={k}>
              <Button {...secondaryNavProps({ ...commonNavProps, k })} />
            </li>
          ))}
        </ol>
      </li>
    </SecondaryNav>
  )
}

export default SecondaryNavSumAndFilterList
