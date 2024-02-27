// GanttChart.story.js
import APIGanttData from 'example-data/APIGantt.example-data'
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'
import { GANTT_SCALE_DEFAULT, GANTT_TOGGLE_LIST } from 'util/Constant/BaseConstantList'
import { calcInteractiveGantt } from 'util/UtilGanttScreen/UtilInteractiveGantt'

import GanttChart from './GanttChart';

export default {
  component: GanttChart,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper
        height={710}
        isScreenWidth
      >
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseGanttChartProps = {
  currentFilterList: [],
  ganttToggleList: GANTT_TOGGLE_LIST,
  maxOfAll: 390,
  scale: GANTT_SCALE_DEFAULT,
  statDataList: calcInteractiveGantt({
    currentGroupBy: 'mild_symptom_1',
    currentResponse: 'fatal_symptom_1',
    data: APIGanttData,
  }),
}

export const Primary = {
  render: () => {
    return (
      <GanttChart { ...baseGanttChartProps } />
    )
  },
};

export const FirstStep = {
  render: () => {
    const props = {
      ...baseGanttChartProps,
      scale: {
        ...baseGanttChartProps.scale,
        firstStep: 0,
        lastStep: 1,
      }
    }
    return (
      <GanttChart { ...props } />
    )
  },
};

export const LastStep = {
  render: () => {
    const props = {
      ...baseGanttChartProps,
      scale: {
        ...baseGanttChartProps.scale,
        firstStep: 3,
        lastStep: 4,
      }
    }
    return (
      <GanttChart { ...props } />
    )
  },
};

export const MiddleTwoSteps = {
  render: () => {
    const props = {
      ...baseGanttChartProps,
      scale: {
        ...baseGanttChartProps.scale,
        firstStep: 1,
        lastStep: 3,
      }
    }
    return (
      <GanttChart { ...props } />
    )
  },
};
