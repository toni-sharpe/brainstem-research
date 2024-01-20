import { range } from 'ramda'
import React, { useState } from 'react'

import Button from 'components/Button/Button'
import GanttBarList from 'sections/GanttBarList/GanttBarList'
import GanttScale from 'sections/GanttScale/GanttScale'
import { GANTT_SCALE_DEFAULT } from 'util/Constant/BaseConstantList'
import { calcGanttListHeight } from 'util/UtilGanttBarList/UtilGanttBarList'

import './GanttChart.scss'

function GanttChart({
  currentFilterList,
  ganttToggleList,
  maxOfAll,
  scale,
  statDataList,
}) {
  const { totalSteps } = scale
  const [stepPair, setStepPair] = useState({ first: 0, last: totalSteps, lastSet: 'first' })
  const scaleRange = range(0, totalSteps + 1)

  const ganttHeight = calcGanttListHeight({ statDataList })

  return (
    <figure
      className='gantt-chart column-layout space-children--wide-column'
    >
      <div className='gantt-chart__zoom-button-list row-layout'>
        <ol className='row-layout space-children'>
          {scaleRange.map(i => {
            return (
              <li key={`zoom-${i}`}>
                <Button
                  extraClass={`gantt-chart__zoom-button${
                    (
                      i <= stepPair.last
                      &&
                      i >= stepPair.first
                    )
                      ? ' is-selected'
                      : ''
                  }`}
                  isDisabled={
                    (
                      i < stepPair.first
                      &&
                      stepPair.lastSet === 'first'
                    )
                    ||
                    (
                      i > stepPair.last
                      &&
                      stepPair.lastSet === 'last'
                    )
                  }
                  label={(i * scale.stepDivision)}
                  onClick={
                    () => {
                      const pair = stepPair.lastSet === 'first'
                        ? {
                          first: stepPair.first,
                          last: i,
                          lastSet: 'last',
                        } : {
                          first: i,
                          last: stepPair.last,
                          lastSet: 'first',
                        }
                      setStepPair(pair)
                    }
                  }
                />
              </li>
            )
          })}
        </ol>
      </div>
      <GanttScale
        ariaLabel='clinical response timings'
        ganttHeight={ganttHeight}
        scale={{ ...scale, firstStep: stepPair.first, lastStep: stepPair.last }}
      />
      <GanttBarList
        currentFilterList={currentFilterList}
        maxOfAll={maxOfAll}
        scale={{ ...scale, firstStep: stepPair.first, lastStep: stepPair.last }}
        ganttToggleList={ganttToggleList}
        statDataList={statDataList}
      />
    </figure>
  )
}

GanttChart.defaultProps = {
  scale: GANTT_SCALE_DEFAULT,
}

export default GanttChart
