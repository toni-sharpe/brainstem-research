// TimeLineBarWrapper.story.js
import TimeLineBar from 'sections/TimeLineBar/TimeLineBar'
import { TimeLineBarDataToneSet } from 'example-data/TimeLineBar.example-data'
import TimeLineBarWrapper from './TimeLineBarWrapper';

export default {
  component: TimeLineBarWrapper,
};

const dataBarWrapperBaseProps = {
  currentFilterList: {
    severe: true,
    nonSevere: true,
  }
}

const buildBars = ({ props }) => {
  return (
    <ul>
      <TimeLineBarWrapper {...props} key='key-1' i={1} k='notGood' >
        <TimeLineBar {...TimeLineBarDataToneSet.notGood} />
      </TimeLineBarWrapper>
      <TimeLineBarWrapper {...props} key='key-2' i={2} k='bad' >
        <TimeLineBar {...TimeLineBarDataToneSet.bad} />
      </TimeLineBarWrapper>
      <TimeLineBarWrapper {...props} key='key-3' i={3} k='good' >
        <TimeLineBar {...TimeLineBarDataToneSet.good} />
      </TimeLineBarWrapper>
      <TimeLineBarWrapper {...props} key='key-4' i={4} k='veryBad' >
        <TimeLineBar {...TimeLineBarDataToneSet.veryBad} />
      </TimeLineBarWrapper>
      <TimeLineBarWrapper {...props} key='key-5' i={5} k='neutral' >
        <TimeLineBar {...TimeLineBarDataToneSet.neutral} />
      </TimeLineBarWrapper>
    </ul>
  )
}

export const Primary = {
  render: () => {
    return (buildBars({ props: dataBarWrapperBaseProps }))
  }
};
