import PropTypes from 'prop-types'
import React from 'react'
import i18next from 'util/i18next/i18next'
import { keys } from 'ramda'

import Button from 'components/Button/Button'
import GanttToggleListPropType from 'prop-types/GanttToggleList.prop-type'
import { GANTT_TOGGLE_LIST } from 'util/Constant/BaseConstantList'
import { setJsonLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import './GanttToggleList.scss'

const i18nBase = 'GanttToggleList'

function GanttToggleList({
  setGanttToggleList,
  ganttToggleList,
}) {
  return (
    <section aria-label='toggle elements of the gantt chart'>
      <ol className='gantt-toggle-list row-layout space-children'>
        { keys(ganttToggleList).map(statDetail => {
          const isSelected = ganttToggleList[statDetail]
          const buttonProps = {
            isSelected,
            extraClass: `${isSelected ? ' is-selected--secondary' : ''}`,
            label: i18next.t(`${i18nBase}.${statDetail}`),
            onClick: () => {
              const newToggleList = { ...ganttToggleList, [statDetail]: !isSelected }
              setGanttToggleList(newToggleList)
              setJsonLocalStorage({ k: 'ganttToggleList', v: newToggleList })
            },
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
    </section>
  )
}

GanttToggleList.defaultProps = {
  ganttToggleList: GANTT_TOGGLE_LIST,
}

GanttToggleList.propTypes = {
  setGanttToggleList: PropTypes.func,
  ganttToggleList: GanttToggleListPropType,
}

export default GanttToggleList
