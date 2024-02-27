// GanttBar.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import { keys, lensPath, pipe, set, view } from 'ramda'
import { GanttBarDataToneSet } from 'example-data/GanttBar.example-data'
import { GANTT_TOGGLE_LIST, TONE_KEY_LIST } from 'util/Constant/BaseConstantList'

import GanttBar from './GanttBar';

function PositionWrapper({ children }) {
  return (
    <div style={{ height: '75px', position: 'relative' }}>
      {children}
    </div>
  )
}

export default {
  component: GanttBar,
};

function hideBarDetail({ k, i, toggleTo = false }) {
  const toggleProps = {
    ...GanttBarDataToneSet.good,
    showAllQuantiles: true,
    ganttToggleList: {
      ...GANTT_TOGGLE_LIST,
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
    set(lensPath(['ganttToggleList', k]), toggleTo),
    set(barDataLens, newBarData),
  )(toggleProps)
}

export const Good = {
  render: () => {
    return (<PositionWrapper><GanttBar {...GanttBarDataToneSet.good} /></PositionWrapper>)
  }
};

export const HiddenThings = {
  render: () => keys(GANTT_TOGGLE_LIST).map((k, i) => {
    const props = k === 'fatLines'
      ? hideBarDetail({ k, i, toggleTo: true })
      : hideBarDetail({ k, i })
    return (<PositionWrapper><GanttBar {...props} /></PositionWrapper>)
  })
}

export const NotGood = {
  render: () => {
    return (<PositionWrapper><GanttBar {...GanttBarDataToneSet.notGood} /></PositionWrapper>)
  }
};

export const Bad = {
  render: () => {
    return (<PositionWrapper><GanttBar {...GanttBarDataToneSet.bad} /></PositionWrapper>)
  }
};

export const VeryBad = {
  render: () => {
    return (<PositionWrapper><GanttBar {...GanttBarDataToneSet.veryBad} /></PositionWrapper>)
  }
};

export const Neutral = {
  render: () => {
    return (<PositionWrapper><GanttBar {...GanttBarDataToneSet.neutral} /></PositionWrapper>)
  }
};
