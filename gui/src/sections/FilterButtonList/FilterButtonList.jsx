import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'

import Button from 'components/Button/Button'
import CurrentFilterListPropType from 'prop-types/CurrentFilterList.prop-type'
import CurrentUrlPropType from 'prop-types/CurrentUrl.prop-type'
import { CURRENT_FILTER_LIST } from 'util/Constant/FilterConstantList'
import { ORDERED_FILTERS } from 'util/Constant/BaseConstantList'

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
      className='row-layout space-children'
      data-testid='filter-button-list'
      role='group'
    >
      { orderedFilters.map(k => {
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
  currentFilterList: CURRENT_FILTER_LIST,
  currentUrl: 'scatter',
  orderedFilters: ORDERED_FILTERS,
}

FilterButtonList.propTypes = {
  currentFilterList: CurrentFilterListPropType,
  currentUrl: CurrentUrlPropType,
  orderedFilters: PropTypes.array,
  setCurrentFilterList: PropTypes.func,
}

export default FilterButtonList;
