import React from 'react'
import PropTypes from 'prop-types'

import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'
import XAxisLineNumber from 'components/XAxisLineNumber/XAxisLineNumber'
import {
  calcLineHighlight,
  calcMaxBasedDisplay,
  hasLine,
  hasNumber,
} from 'util/UtilHistogram/UtilXAxisLine'

import './XAxisLineList.scss'

function XAxisLineList({
  histogramHeight,
  mostMaxOfAllThings,
  showNumberList,
}) {
  const lineDivs = []
  const centreLineAdjuster = 1

  const stepDown = histogramHeight / mostMaxOfAllThings

  const maxBasedDisplay = calcMaxBasedDisplay({ mostMaxOfAllThings })

  for (let heightCount = 0; heightCount <= histogramHeight ; heightCount += stepDown) {
    const lineNumber = Math.round(heightCount / stepDown)
    const top = `calc(${histogramHeight - heightCount}vh - ${centreLineAdjuster}px)`
    const lineNumberTop = `calc(${histogramHeight - heightCount}vh - ${centreLineAdjuster}px - 9px)`
    const lineHighlight = calcLineHighlight({ lineNumber, maxBasedDisplay })

    const showLine = hasLine({ lineNumber, maxBasedDisplay })
    const showNumber = hasNumber({ lineHighlight, maxBasedDisplay, showNumberList })

    lineDivs.push(
      <div key={heightCount}>
        { showNumber && (
            <dt>
              <XAxisLineNumber
                lineNumber={lineNumber}
                top={lineNumberTop}
              />
            </dt>
          )
        }
        { showLine && (
          <dd
            className={`x-axis-line-list__line ${lineHighlight ? 'x-axis-line-list__line--highlight' : ''}`}
            style={{ top }}
          />
        ) }
      </div>
    )
  }


  return (
    <dl
      aria-hidden='true'
      className='x-axis-line-list'
    >
      {lineDivs}
    </dl>
  )
}

XAxisLineList.defaultProps = {
  showNumberList: true,
}

XAxisLineList.propTypes = {
  histogramHeight: NumberOrStringPropType.isRequired,
  showNumberList: PropTypes.bool,
}

export default XAxisLineList
