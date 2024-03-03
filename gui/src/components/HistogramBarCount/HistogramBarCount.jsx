import React from 'react'
import PropTypes from 'prop-types'

import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'

import './HistogramBarCount.scss'

function HistogramBarCount({
  barCountPerBlock,
  count,
}) {
  if (!count) { return null}

  let fontSize = ''
  if (barCountPerBlock > 3) {
    fontSize = ' histogram-bar-count__font-size-small'
  }

  return (
    <div className='histogram-bar-count__wrapper'>
      <span className={`histogram-bar-count${fontSize}`}>
        { barCountPerBlock <= 4
          ? (<span><i>N</i>=</span>)
          : ''
        }
        { barCountPerBlock > 4
          &&
          barCountPerBlock < 7
            ? (<i>N</i>)
            : ''
        }
        { count }
      </span>
    </div>
  )
}

HistogramBarCount.propTypes = {
  barCountPerBlock: PropTypes.number,
  count: NumberOrStringPropType,
}

export default HistogramBarCount
