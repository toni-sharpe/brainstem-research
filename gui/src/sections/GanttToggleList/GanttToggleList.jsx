import PropTypes from 'prop-types'
import React from 'react'
import i18next from 'util/i18next/i18next'
import { keys } from 'ramda'

import Button from 'components/Button/Button'
import GanttToggleListPropType from 'prop-types/GanttToggleList.prop-type'
import { GANTT_TOGGLE_LIST } from 'util/Constant/BaseConstantList'

import './GanttToggleList.scss'

const i18nBase = 'GanttToggleList'

function GanttToggleList({
  setGanttTogglelList,
  ganttToggleList,
}) {
  return (
    <ol className='gantt-toggle-list row-layout space-children'>
      { keys(ganttToggleList).map(statDetail => {
        const isSelected = ganttToggleList[statDetail]
        const buttonProps = {
          isSelected,
          extraClass: `${isSelected ? ' is-selected--secondary' : ''}`,
          label: i18next.t(`${i18nBase}.${statDetail}`),
          onClick: () => setGanttTogglelList({ ...ganttToggleList, [statDetail]: !isSelected }),
          size: 'small',
        }
        return (
          <li
            className='gantt-toggle-list__button'
            key={statDetail}
          >
            <Button {...buttonProps} />
          </li>
        )
      })}
    </ol>
  )
}

GanttToggleList.defaultProps = {
  ganttToggleList: GANTT_TOGGLE_LIST,
}

GanttToggleList.propTypes = {
  setGanttTogglelList: PropTypes.func,
  ganttToggleList: GanttToggleListPropType,
}

export default GanttToggleList
