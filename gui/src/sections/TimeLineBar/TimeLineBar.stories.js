// TimeLineBar.story.js
import { keys, lensPath, pipe, set, view } from 'ramda'
import { TimeLineBarDataToneSet } from 'example-data/TimeLineBar.example-data'
import { STAT_BAR_DETAIL_LIST, TONE_KEY_LIST } from 'util/Constant/BaseConstantList'

import TimeLineBar from './TimeLineBar';

function PositionWrapper({ children }) {
  return (
    <div style={{ height: '75px', position: 'relative' }}>
      {children}
    </div>
  )
}

export default {
  component: TimeLineBar,
};

function hideBarDetail({ k, i, toggleTo = false }) {
  const toggleProps = {
    ...TimeLineBarDataToneSet.good,
    showAllQuantiles: true,
    timeLineBarDetailList: {
      ...STAT_BAR_DETAIL_LIST,
      quantileNumber: true,
      min: true,
      max: true,
      fatLines: false,
    }
  }
  const barDataLens = lensPath(['barData'])
  const barData = view(barDataLens, toggleProps)
  const newBarData = {
    ...barData,
    tone: TONE_KEY_LIST[(i + 1) % 5],
    min: (barData.min - 3) + (i * 3) % 7,
    max: (barData.max - 13) + (i * 7) % 17,
    label: `${k} ${toggleTo ? 'shown' : 'hidden'} `,
  }
  return pipe(
    set(lensPath(['timeLineBarDetailList', k]), toggleTo),
    set(barDataLens, newBarData),
  )(toggleProps)
}

export const Good = {
  render: () => {
    return (<PositionWrapper><TimeLineBar {...TimeLineBarDataToneSet.good} /></PositionWrapper>)
  }
};

export const HiddenThings = {
  render: () => keys(STAT_BAR_DETAIL_LIST).map((k, i) => {
    const props = k === 'fatLines'
      ? hideBarDetail({ k, i, toggleTo: true })
      : hideBarDetail({ k, i })
    return (<PositionWrapper><TimeLineBar {...props} /></PositionWrapper>)
  })
}

export const NotGood = {
  render: () => {
    return (<PositionWrapper><TimeLineBar {...TimeLineBarDataToneSet.notGood} /></PositionWrapper>)
  }
};

export const Bad = {
  render: () => {
    return (<PositionWrapper><TimeLineBar {...TimeLineBarDataToneSet.bad} /></PositionWrapper>)
  }
};

export const VeryBad = {
  render: () => {
    return (<PositionWrapper><TimeLineBar {...TimeLineBarDataToneSet.veryBad} /></PositionWrapper>)
  }
};

export const Neutral = {
  render: () => {
    return (<PositionWrapper><TimeLineBar {...TimeLineBarDataToneSet.neutral} /></PositionWrapper>)
  }
};
