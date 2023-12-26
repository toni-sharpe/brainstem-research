import PropTypes from 'prop-types'
import React from 'react'
import { format } from 'date-fns'

import { isJan, calcMonthTypeClass, calcSeverityClass } from 'util/UtilMonthBlock/UtilMonthBlock'
import MonthNumberPropType from 'prop-types/MonthNumber.prop-type'
import MonthTypePropType from 'prop-types/MonthType.prop-type'

import './MonthBlock.scss'

function MonthBlock({
  colorVal,
  currentMonth,
  currentYear,
  monthText,
  monthType,
}) {
  const jan = isJan({ currentMonth })
  const monthTypeClass = calcMonthTypeClass({ colorVal, monthType })
  const severityClass = calcSeverityClass({ colorVal })

  return (
    <div className={`month-block${monthTypeClass}${severityClass}`}>
      {
        (
          jan
          ||
          monthText
        )
        &&
        (
          <span
            className='month-block__content'
            key='children'
          >
            { jan
              &&
              (
                <span className='month-block__text'>
                  {currentYear}
                </span>
              )
            }
            { monthText
              &&
              (
                <span className='month-block__text'>
                  { `${jan ? ': ' : ''}` }{monthText}
                </span>
              )
            }
          </span>
        )
      }
    </div>
  )
}

MonthBlock.defaultProps = {
  colorVal: null,
  currentYear: format(new Date(), 'yyyy'),
}

MonthBlock.propTypes = {
  colorVal: PropTypes.string,
  currentMonth: MonthNumberPropType,
  currentYear: PropTypes.string,
  monthText: PropTypes.node,
  monthType: MonthTypePropType,
}

export default MonthBlock
