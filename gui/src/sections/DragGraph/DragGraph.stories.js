// DragGraph.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import severityCircleMapper from 'util/UtilPointData/severityCircleMapper'
import DragGraph from './DragGraph';

export default {
  component: DragGraph,
};

const divWrapper = { boxShadow: '0 0 100px 0 #000', height: '690px', width: '540px' }

const baseDragGraphProps = {
  color: 'green',
  dragGraphZoomList: [1, 2, 3, 4],
  graphKey: 'dragGraphStoryBook',
  heading: 'Graph Heading',
  includeExtreme: false,
  labelValList: [
    ['a', { careLevel:  13, length: 5 , nonSevere:  3, severe:  2 }],
    ['b', { careLevel: 101, length: 17, nonSevere:  6, severe: 11 }],
    ['c', { careLevel:  87, length: 7 , nonSevere:  6, severe:  1 }],
    ['d', { careLevel:  53, length: 23, nonSevere: 13, severe: 10 }],
    ['e', { careLevel:  54, length: 27, nonSevere: 13, severe: 14 }],
    ['f', { careLevel:  56, length: 23, nonSevere:  7, severe: 16 }],
    ['g', { careLevel:  87, length: 41, nonSevere: 27, severe: 14 }],
    ['h', { careLevel: 123, length: 11, nonSevere:  8, severe:  3 }],
    ['i', { careLevel:  87, length: 19, nonSevere: 18, severe:  1 }],
  ],
  pointDataMapper: severityCircleMapper,
  z: 1,
}

export const Primary = {
  render: () => {
    return (
      <div style={{...divWrapper}}>
        <DragGraph {...baseDragGraphProps} />
      </div>
    )
  }
};

export const DifferentZoom = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      dragGraphZoomList: [0.5, 1],
    }

    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const IncludeExtremeAsDefault = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      includeExtreme: true,
    }

    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const ScaleDifference = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      scale: 400,
      scaleR: 200,
    }

    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const LabelPositioningUsingScale = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      scaleToLabelRatio: 3,
    }

    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const HideExtremeButtonAndZoomLabelForSmallSpaces = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      showExtremeButton: false,
      showZoomLabel: false,
    }

    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const TwoPoints = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      color: 'red',
      includeExtreme: true,
      labelValList: [
        ['a', { careLevel:  13, length: 7 , nonSevere:  3, severe:  4 }],
        ['b', { careLevel:  15, length: 13, nonSevere:  3, severe: 10 }],
      ]
    }
    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const ThreePoints = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      color: '#9900cc',
      includeExtreme: true,
      labelValList: [
        ['a', { careLevel:  23, length: 7 , nonSevere:  2, severe:  5 }],
        ['b', { careLevel:  24, length: 13, nonSevere:  1, severe: 12 }],
        ['c', { careLevel:  27, length: 9 , nonSevere:  3, severe:  6 }],
      ],
    }
    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const FourPoints = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      color: 'red',
      includeExtreme: true,
      labelValList: [
        ['a', { careLevel:  45, length: 7 , nonSevere:  3, severe:  4 }],
        ['b', { careLevel:  23, length: 13, nonSevere: 11, severe:  2 }],
        ['c', { careLevel:  78, length: 3 , nonSevere:  3, severe:  0 }],
        ['d', { careLevel:  44, length: 5 , nonSevere:  3, severe:  2 }],
      ],
    }
    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const FivePoints = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      color: 'blue',
      includeExtreme: true,
      labelValList: [
        ['a', { careLevel:  12, length: 19, nonSevere:  3, severe: 13 }],
        ['b', { careLevel:  14, length: 23, nonSevere: 17, severe:  6 }],
        ['c', { careLevel:  16, length: 41, nonSevere: 33, severe:  8 }],
        ['d', { careLevel:  98, length: 31, nonSevere: 23, severe:  8 }],
        ['e', { careLevel: 102, length: 29, nonSevere: 23, severe:  6 }]
      ],
    }
    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const LotsOfPoints = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      color: '#0055bb',
      includeExtreme: true,
      labelValList: [
        ['a', { careLevel:  12, length: 19, nonSevere: 16, severe:  3 }],
        ['b', { careLevel:  19, length: 23, nonSevere: 20, severe:  3 }],
        ['c', { careLevel:  14, length: 41, nonSevere: 40, severe:  1 }],
        ['d', { careLevel:  23, length: 31, nonSevere: 11, severe: 10 }],
        ['e', { careLevel:  16, length: 29, nonSevere: 10, severe: 19 }],
        ['f', { careLevel:  41, length:  5, nonSevere:  3, severe:  2 }],
        ['g', { careLevel:  98, length: 17, nonSevere: 12, severe:  5 }],
        ['h', { careLevel:  31, length:  7, nonSevere:  3, severe:  4 }],
        ['i', { careLevel: 102, length: 23, nonSevere: 15, severe:  8 }],
        ['j', { careLevel:  29, length: 27, nonSevere: 15, severe: 12 }],
        ['k', { careLevel:  41, length: 23, nonSevere: 15, severe:  8 }],
        ['l', { careLevel:  31, length: 41, nonSevere: 34, severe:  7 }],
        ['m', { careLevel:  29, length: 11, nonSevere:  7, severe:  4 }],
        ['n', { careLevel:  39, length: 19, nonSevere:  7, severe: 12 }],
        ['o', { careLevel:  51, length: 11, nonSevere:  8, severe:  3 }],
        ['p', { careLevel:  33, length: 39, nonSevere: 30, severe:  9 }],
        ['q', { careLevel:  27, length: 51, nonSevere: 45, severe:  6 }],
        ['r', { careLevel:  43, length:  7, nonSevere:  4, severe:  3 }],
        ['s', { careLevel: 101, length:  7, nonSevere:  2, severe:  5 }],
        ['t', { careLevel: 103, length: 33, nonSevere: 20, severe: 13 }],
        ['u', { careLevel:  11, length: 27, nonSevere:  7, severe: 20 }],
        ['v', { careLevel:  19, length: 43, nonSevere: 29, severe: 14 }],
      ],
    }
    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const BigRange = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      color: '#333',
      includeExtreme: true,
      labelValList: [
        ['a', { careLevel:   1, length: 19,   nonSevere:  3, severe: 10 }],
        ['b', { careLevel:   1, length: 1001, nonSevere:  3, severe: 10 }],
        ['c', { careLevel:   1, length: 1,    nonSevere:  3, severe: 10 }],
        ['d', { careLevel:   1, length: 517,  nonSevere:  3, severe: 10 }],
        ['e', { careLevel:   1, length: 307,  nonSevere:  3, severe: 10 }],
        ['f', { careLevel:   1, length: 219,  nonSevere:  3, severe: 10 }],
        ['g', { careLevel:   1, length: 137,  nonSevere:  3, severe: 10 }],
        ['h', { careLevel:   1, length: 998,  nonSevere:  3, severe: 10 }],
      ],
    }
    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const NoData = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      labelValList: undefined,
    }
    return (
      <DragGraph {...props} />
    )
  }
};

export const NotAnArray = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      labelValList: 1,
    }
    return (
      <DragGraph {...props} />
    )
  }
};

export const NotEnoughData = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      labelValList: [1],
    }
    return (
      <DragGraph {...props} />
    )
  }
};
