import i18next from 'util/i18next/i18next'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button/Button'
import CurrentFilterListPropType from 'prop-types/CurrentFilterList.prop-type'
import CurrentUrlPropType from 'prop-types/CurrentUrl.prop-type'
import FilterButtonList from 'sections/FilterButtonList/FilterButtonList'
import Menu from 'sections/Menu/Menu'
import { CURRENT_FILTER_LIST } from 'util/Constant/FilterConstantList'

import './Header.scss'

const i18nBase = 'Header'

function Header({
  currentFilterList,
  currentUrl,
  setCurrentFilterList,
}) {
  const [isOpen, setIsOpen] = useState(true)

  const openClass = isOpen ? 'open' : ''

  return (
    <div>
      { !isOpen && (
        <Button
          extraClass='ui-header-bar__open-button'
          label={i18next.t(`${i18nBase}.openMenu`)}
          onClick={() => setIsOpen(true)}
          size='medium'
        />
      ) }
      <header
        className={`ui-header-bar ${openClass}`}
        data-testid='ui-header'
      >
        { isOpen && (
          <Button
            extraClass='ui-header-bar__close-button'
            label='X'
            onClick={() => setIsOpen(false)}
            title={i18next.t(`${i18nBase}.close`)}
          />
        ) }
        <Menu currentUrl={currentUrl} />
        <FilterButtonList
          currentFilterList={currentFilterList}
          currentUrl={currentUrl}
          setCurrentFilterList={setCurrentFilterList}
        />
      </header>
    </div>
  )  
}

Header.defaultProps = {
  currentFilterList: CURRENT_FILTER_LIST,
  currentUrl: 'scatter',
}

Header.propTypes = {
  currentFilterList: CurrentFilterListPropType,
  currentUrl: CurrentUrlPropType,
  setCurrentFilterList: PropTypes.func,
}

export default Header;
