// GanttBarWrapper.story.js
import GanttBar from 'sections/GanttBar/GanttBar'
import { GanttBarDataToneSet } from 'example-data/GanttBar.example-data'
import GanttBarWrapper from './GanttBarWrapper';

export default {
  component: GanttBarWrapper,
};

const ganttBarWrapperBaseProps = {
  currentFilterList: {
    severe: true,
    nonSevere: true,
  }
}

const buildBars = ({ props }) => {
  return (
    <ul>
      <GanttBarWrapper {...props} key='key-1' i={1} k='notGood' >
        <GanttBar {...GanttBarDataToneSet.notGood} />
      </GanttBarWrapper>
      <GanttBarWrapper {...props} key='key-2' i={2} k='bad' >
        <GanttBar {...GanttBarDataToneSet.bad} />
      </GanttBarWrapper>
      <GanttBarWrapper {...props} key='key-3' i={3} k='good' >
        <GanttBar {...GanttBarDataToneSet.good} />
      </GanttBarWrapper>
      <GanttBarWrapper {...props} key='key-4' i={4} k='veryBad' >
        <GanttBar {...GanttBarDataToneSet.veryBad} />
      </GanttBarWrapper>
      <GanttBarWrapper {...props} key='key-5' i={5} k='neutral' >
        <GanttBar {...GanttBarDataToneSet.neutral} />
      </GanttBarWrapper>
    </ul>
  )
}

export const Primary = {
  render: () => {
    return (buildBars({ props: ganttBarWrapperBaseProps }))
  }
};
