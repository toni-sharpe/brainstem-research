import React, { useState } from 'react'
import { format } from 'date-fns'
import { map, pipe, reverse, toPairs } from 'ramda'

import Button from 'components/Button/Button'
import MonthBlock from 'components/MonthBlock/MonthBlock'
import MonthText from 'components/MonthText/MonthText'
import PageDetailWrapper from 'components/PageDetailWrapper/PageDetailWrapper'
import SecondaryNavSumAndFilterList from 'sections/SecondaryNavSumAndFilterList/SecondaryNavSumAndFilterList'
import TimeLineDataPropType from 'prop-types/TimeLineData.prop-type'
import { secondaryNavLocalStorage } from 'util/UtilLocalStorage/UtilSecondaryNav'
import { DATA_POINT_SUM_LIST, TIME_LINE_FILTER_LIST } from 'util/Constant/BaseConstantList'
import {
  calcColorVal,
  calcDateKey,
  calcMonthlyDataValues,
  calcMonthsLeftThisYear,
  calcMonthType,
  calcRange,
  calcShownMonthTotal,
  calcThisMonthKey,
  extractOutputValsForMonth,
} from 'util/UtilTimeLine/UtilTimeLine'

import './TimeLine.scss'

const i18nBase = 'TimeLine'

const monthsLeftThisYear = calcMonthsLeftThisYear()
const monthTotal = calcShownMonthTotal()
const thisMonthKey = calcThisMonthKey()

function TimeLine({ data }) {
  const currentSumPer = secondaryNavLocalStorage({ def: 'overall_patient_rating', k: i18nBase })
  const [dataPointSumPerMonth, setDataPointSumPerMonth] = useState(currentSumPer)
  const [filterBy, setFilterBy] = useState([null, null])

  if (!data?.length) {
    return null
  }

  const dateGrouped = calcMonthlyDataValues({
    data,
    dataPointSumPerMonth,
    filterBy,
  })

  return data.length && (
    <PageDetailWrapper
      count={data?.length}
      i18nBase={i18nBase}
      secondaryNav={(
        <SecondaryNavSumAndFilterList
          dataPointSumList={DATA_POINT_SUM_LIST}
          dataPointSumPerMonth={dataPointSumPerMonth}
          extraClass='time-line'
          i18nBase={i18nBase}
          setDataPointSumPerMonth={setDataPointSumPerMonth}
        />
      )}
    >
      <ol key='filter-list' className='row-layout space-children'>
        {
          pipe(
            toPairs,
            map(([label, filter]) => {
              const isSelected = filter[1] === filterBy[1]

              return (
                <li key={label}>
                  <Button
                    isSelected={isSelected}
                    label={label}
                    onClick={() => setFilterBy(filter)}
                    size='medium'
                  />
                </li>
              )
            })
          )(TIME_LINE_FILTER_LIST)
        }
      </ol>
      <ul className='time-line__heat-map'>
        { calcRange({ num: monthsLeftThisYear }).map(ml => {
          return (
            <li className='time-line__month' key={`future-month-${0-ml}`}>
              <MonthBlock
                colorVal={null}
                monthType='future'
              />
            </li>
          )
        })}
        { reverse(calcRange({ num: monthTotal + 1 })).map(month => {
          const dateKey = calcDateKey({ month, monthTotal })
          const { valSum, valOutputList } = extractOutputValsForMonth({ dateGroup: dateGrouped[dateKey] })
          const currentYear = format(new Date(dateKey), 'yyyy')
          const currentMonth = format(new Date(dateKey), 'MM')
          const thisMonth = thisMonthKey === `${currentYear}-${currentMonth}`

          return (
            <li className='time-line__month' key={`month-${month}`}>
              <MonthBlock
                colorVal={calcColorVal({ valSum })}
                currentMonth={currentMonth}
                currentYear={currentYear}
                monthText={(
                  <MonthText
                    month={month}
                    valSum={valSum}
                    valOutputList={valOutputList}
                  />
                )}
                monthType={calcMonthType({ thisMonth, valSum })}
              />
            </li>
          )
        })}
      </ul>
    </PageDetailWrapper>
  );
}

TimeLine.propTypes = {
  data: TimeLineDataPropType
}

export default TimeLine;
