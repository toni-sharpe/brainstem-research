import PropTypes from 'prop-types'

import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'

import SumOutput from 'components/SumOutput/SumOutput'
import { sortFn } from 'util/Util/Util'
import { CROSSOVER_TO_SERIOUS } from 'util/Constant/BaseConstantList'

import './MonthText.scss'

function makeSumMapper({ crossover, month }) {
  return (v, i) => {
    return (
      <dd
        className='month-text__elem row-layout space-children--narrowest'
        key={`val-list-${i}`}
      >
        <SumOutput
          crossover={crossover}
          key={`${month}-v-${i}`}
          v={v}
        />
      </dd>
    )
  }
}

function MonthText({
  crossover,
  month,
  valSum,
  valOutputList
}) {
  return (valSum || valOutputList) && (
    <dl className='month-text row-layout space-children--narrowest'>
      <dt className='month-text__elem'>
        <SumOutput fullSum key='total' v={valSum} />
      </dt>
      {valOutputList
        .sort(sortFn)
        .map(makeSumMapper({ crossover, month }))
      }
    </dl>
  )
}

MonthText.defaultProps = {
  crossover: CROSSOVER_TO_SERIOUS,
  month: '01',
  valSum: 0,
}

MonthText.propTypes = {
  month: NumberOrStringPropType,
  valSum: NumberOrStringPropType,
  valOutputList: PropTypes.arrayOf(PropTypes.number),
}

export default MonthText
