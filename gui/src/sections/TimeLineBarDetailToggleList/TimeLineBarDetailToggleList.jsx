import PropTypes from 'prop-types'
import React from 'react'
import i18next from 'util/i18next/i18next'
import { keys } from 'ramda'

import Button from 'components/Button/Button'
import StatBarDetailListPropType from 'prop-types/TimeLineBarDetailList.prop-type'
import { STAT_BAR_DETAIL_LIST } from 'util/Constant/BaseConstantList'

const i18nBase = 'TimeLineBarDetailToggleList'

function TimeLineBarDetailToggleList({
  setTimeLineBarDetailList,
  timeLineBarDetailList,
}) {
  return (
    <ol className='row-layout space-children--with-border'>
      { keys(timeLineBarDetailList).map(statDetail => {
        const isSelected = timeLineBarDetailList[statDetail]
        const buttonProps = {
          isSelected,
          extraClass: `${isSelected ? ' is-selected--secondary' : ''}`,
          label: i18next.t(`${i18nBase}.${statDetail}`),
          onClick: () => setTimeLineBarDetailList({ ...timeLineBarDetailList, [statDetail]: !isSelected }),
          size: 'small-tiny',
        }
        return (
          <li key={statDetail}>
            <Button {...buttonProps} />
          </li>
        )
      })}
    </ol>
  )
}

TimeLineBarDetailToggleList.defaultProps = {
  timeLineBarDetailList: STAT_BAR_DETAIL_LIST,
}

TimeLineBarDetailToggleList.propTypes = {
  setTimeLineBarDetailList: PropTypes.func,
  timeLineBarDetailList: StatBarDetailListPropType,
}

export default TimeLineBarDetailToggleList
