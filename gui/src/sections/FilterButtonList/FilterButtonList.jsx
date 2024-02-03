import { keys } from 'ramda'
import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'

import Button from 'components/Button/Button'
import CurrentFilterListPropType from 'prop-types/CurrentFilterList.prop-type'
import CurrentUrlPropType from 'prop-types/CurrentUrl.prop-type'
import { ORDERED_FILTERS } from 'util/Constant/BaseConstantList'

import './FilterButtonList.scss'

import isFilterDisabled from './isFilterDisabled'

function FilterButtonList({
  currentFilterList,
  currentUrl,
  orderedFilters,
  setCurrentFilterList,
}) {
  function filterButtonProps ({ k }) {
    const isDisabled = isFilterDisabled({ currentUrl, k })
    const isSelected = currentFilterList?.[k]

    return ({
      isDisabled,
      isSelected,
      label: i18next.t(`FilterButtonLabel.${k}`),
      onClick: () => setCurrentFilterList({
        ...currentFilterList,
        [k]: !currentFilterList[k]
      })
    })
  }

  return (
    <ul
      className='filter-button-list'
      data-testid='filter-button-list'
    >
      { keys(orderedFilters).map(k => {
        return (
          <li key={k}>
            <Button {...filterButtonProps({ k })} />
          </li>
        )}
      ) }
    </ul>
  )  
}

FilterButtonList.defaultProps = {
  currentFilterList: ORDERED_FILTERS,
  currentUrl: 'scatter',
  orderedFilters: ORDERED_FILTERS,
}

FilterButtonList.propTypes = {
  currentFilterList: CurrentFilterListPropType,
  currentUrl: CurrentUrlPropType,
  orderedFilters: CurrentFilterListPropType,
  setCurrentFilterList: PropTypes.func,
}

export default FilterButtonList;
