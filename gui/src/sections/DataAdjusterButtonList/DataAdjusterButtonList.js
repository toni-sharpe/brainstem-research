import PropTypes from 'prop-types'
import React from 'react'

import './DataAdjusterButtonList.scss'

function DataAdjusterButtonList({
  adjusterList,
  labelFn,
  listLabel,
  onClickHandler,
  selectedFn,
}) {
  return (
    <div aria-label={`Buttons for ${listLabel} interaction`} role='region'>
      <ol className='data-adjuster-button-list column-layout space-children--column'>
        <li className='data-adjuster-button-list__label'>{listLabel}</li>
        {adjusterList.map((adjustBy, i) => {
          const isSelected = selectedFn ? selectedFn({ curr: adjustBy }) : false

          return (
            <li key={adjustBy}>
              <button
                aria-pressed={isSelected}
                className={`data-adjuster-button-list__button button--small ${isSelected ? 'is-selected' : ''}`}
                onClick={onClickHandler({ adjustBy })}
              >
                {labelFn ? labelFn({ adjustBy }) : adjustBy}
              </button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

DataAdjusterButtonList.defaultProps = {
  adjusterList: [1, 3, 5]
}

DataAdjusterButtonList.propTypes = {
  adjusterList: PropTypes.array,
  labelFn: PropTypes.func.isRequired,
  listLabel: PropTypes.string,
  onClickHandler: PropTypes.func.isRequired,
  selectedFn: PropTypes.func.isRequired,
}

export default DataAdjusterButtonList
