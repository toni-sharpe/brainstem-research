import React from 'react'
import PropTypes from 'prop-types'

import CurrentFilterListPropType from 'prop-types/CurrentFilterList.prop-type'
import CurrentUrlPropType from 'prop-types/CurrentUrl.prop-type'
import FilterButtonList from 'sections/FilterButtonList/FilterButtonList'
import Menu from 'sections/Menu/Menu'
import { CURRENT_FILTER_LIST } from 'util/Constant/FilterConstantList'

import './Header.scss'

function Header({
  currentFilterList,
  currentUrl,
  setCurrentFilterList,
}) {
  return (
    <header
      className='ui-header-bar'
      data-testid='ui-header'
    >
      <Menu currentUrl={currentUrl} />
      <FilterButtonList
        currentFilterList={currentFilterList}
        currentUrl={currentUrl}
        setCurrentFilterList={setCurrentFilterList}
      />
    </header>
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
