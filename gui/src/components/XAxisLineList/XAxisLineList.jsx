import React from 'react'
import PropTypes from 'prop-types'

import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'
import XAxisLineNumber from 'components/XAxisLineNumber/XAxisLineNumber'
import { calcMaxBasedDisplay } from 'util/UtilScale/UtilScaleGranularity'
import {
  calcLineHighlight,
  hasLine,
  hasNumber,
} from 'util/UtilHistogram/UtilXAxisLine'

import './XAxisLineList.scss'

function XAxisLineList({
  histogramHeight,
  mostMaxOfAllThings,
  showNumberList,
  widthOverride,
}) {
  const lineDivs = []
  const centreLineAdjuster = 1

  const stepDown = histogramHeight / mostMaxOfAllThings

  const maxBasedDisplay = calcMaxBasedDisplay({ max: mostMaxOfAllThings })

  for (let heightCount = 0; heightCount <= histogramHeight ; heightCount += stepDown) {
    const lineNumber = Math.round(heightCount / stepDown)
    const lineBasePosition = (histogramHeight - heightCount).toPrecision(4)
    const top = `calc(${lineBasePosition}vh - ${centreLineAdjuster}px)`
    const lineNumberTop = `calc(${lineBasePosition}vh - ${centreLineAdjuster}px - 9px)`
    const lineHighlight = calcLineHighlight({ lineNumber, maxBasedDisplay })

    const showLine = hasLine({ lineNumber, maxBasedDisplay })
    const showNumber = hasNumber({ lineHighlight, maxBasedDisplay, showNumberList })

    showLine && lineDivs.push(
      <div key={heightCount}>
        { showNumber && (
            <dt
              className='x-axis-line-list__num-list'
              style={widthOverride
                ? { width: `${widthOverride}px` }
                : { width: '100%' }
              }
            >
              <XAxisLineNumber
                align='left'
                lineNumber={lineNumber}
                top={lineNumberTop}
              />
              <XAxisLineNumber
                align='center'
                lineNumber={lineNumber}
                top={lineNumberTop}
              />
              <XAxisLineNumber
                align='right'
                lineNumber={lineNumber}
                top={lineNumberTop}
              />
            </dt>
          )
        }
        <dd
          className={`x-axis-line-list__line ${lineHighlight ? 'x-axis-line-list__line--highlight' : ''}`}
          style={{ top }}
        />
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
