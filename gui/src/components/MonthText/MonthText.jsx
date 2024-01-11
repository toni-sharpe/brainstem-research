import PropTypes from 'prop-types'
import { isNotNil } from 'ramda'

import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'

import SumOutput from 'components/SumOutput/SumOutput'
import { sortFn } from 'util/Util/Util'
import { CROSSOVER_TO_SERIOUS } from 'util/Constant/BaseConstantList'

import './MonthText.scss'

function makeSumMapper({ crossover, month }) {
  return (v, i) => {
    return (
      <div
        className='month-text__sum-val-output'
        key={`${month}-v-${i}`}
      >
        <SumOutput
          crossover={crossover}
          v={v}
        />
      </div>
    )
  }
}

function MonthText({
  crossover,
  month,
  valSum,
  valOutputList
}) {
  return (isNotNil(valSum) || valOutputList?.length > 0) && (
    <dl className='month-text column-layout space-children--narrowest'>
      <dt className='month-text__elem'>
        <SumOutput fullSum key='total' v={valSum} />
      </dt>
      <dd
        className='month-text__elem row-layout space-children--narrowest'
      >
        {valOutputList
          .sort(sortFn)
          .map(makeSumMapper({ crossover, month }))
        }
      </dd>
    </dl>
  )
}

MonthText.defaultProps = {
  crossover: CROSSOVER_TO_SERIOUS,
  month: '01',
}

MonthText.propTypes = {
  month: NumberOrStringPropType,
  valSum: NumberOrStringPropType,
  valOutputList: PropTypes.arrayOf(PropTypes.number),
}

export default MonthText
