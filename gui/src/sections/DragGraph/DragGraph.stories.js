// DragGraph.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import severityCircleMapper from 'util/UtilPointData/severityCircleMapper'
import DragGraph from './DragGraph';

export default {
  component: DragGraph,
};

const divWrapper = { boxShadow: '0 0 100px 0 #000', height: '690px', width: '540px' }

const baseDragGraphProps = {
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

export const LayersOfPoints = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      includeExtreme: true,
      useDepth: true,
      scale: 1200,
      scaleR: 600,
      labelValList:
        [
          ['34a',    { careLevel:  34, length: 19, nonSevere: 16, severe:  3 }],
          ['19b',    { careLevel:  19, length: 11, nonSevere: 20, severe:  3 }],
          ['14c',    { careLevel:  14, length: 12, nonSevere: 40, severe:  1 }],
          ['23d',    { careLevel:  23, length: 51, nonSevere: 11, severe: 10 }],
          ['16e',    { careLevel:  16, length: 29, nonSevere: 10, severe: 19 }],
          ['41f',    { careLevel:  41, length:  5, nonSevere:  3, severe:  2 }],
          ['98g',    { careLevel:  98, length: 17, nonSevere: 12, severe:  5 }],
          ['31h',    { careLevel:  31, length:  7, nonSevere:  3, severe:  4 }],
          ['102i',   { careLevel: 102, length: 23, nonSevere: 15, severe:  8 }],
          ['29j',    { careLevel:  29, length: 27, nonSevere: 11, severe: 12 }],
          ['41k',    { careLevel:  41, length: 23, nonSevere: 15, severe:  8 }],
          ['31l',    { careLevel:  31, length: 41, nonSevere: 40, severe:  7 }],
          ['29m',    { careLevel:  29, length: 11, nonSevere:  7, severe:  4 }],
          ['39n',    { careLevel:  39, length: 19, nonSevere:  7, severe: 12 }],
          ['51o',    { careLevel:  51, length: 11, nonSevere:  8, severe:  3 }],
          ['33p',    { careLevel:  33, length: 39, nonSevere: 30, severe:  9 }],
          ['12aa',   { careLevel:  12, length: 19, nonSevere: 16, severe:  3 }],
          ['19bb',   { careLevel:  19, length: 23, nonSevere: 20, severe:  3 }],
          ['14cc',   { careLevel:  14, length: 41, nonSevere: 40, severe:  1 }],
          ['29dd',   { careLevel:  29, length: 31, nonSevere: 11, severe: 10 }],
          ['16ee',   { careLevel:  16, length: 29, nonSevere: 10, severe: 19 }],
          ['41ff',   { careLevel:  41, length:  5, nonSevere:  3, severe:  2 }],
          ['98gg',   { careLevel:  98, length: 17, nonSevere: 12, severe:  5 }],
          ['31hh',   { careLevel:  31, length:  7, nonSevere:  3, severe:  4 }],
          ['102ii',  { careLevel: 102, length: 23, nonSevere: 15, severe:  8 }],
          ['29jj',   { careLevel:  29, length: 27, nonSevere: 15, severe: 12 }],
          ['41kk',   { careLevel:  41, length: 23, nonSevere: 15, severe:  8 }],
          ['31ll',   { careLevel:  31, length: 41, nonSevere: 34, severe:  7 }],
          ['29mm',   { careLevel:  29, length: 11, nonSevere:  7, severe:  4 }],
          ['39nn',   { careLevel:  39, length: 19, nonSevere:  7, severe: 98 }],
          ['51oo',   { careLevel:  51, length: 11, nonSevere:  8, severe: 11 }],
          ['33pp',   { careLevel:  33, length: 39, nonSevere: 30, severe:  9 }],
          ['23aaa',  { careLevel:  23, length: 19, nonSevere: 16, severe:  3 }],
          ['20bbb',  { careLevel:  20, length: 23, nonSevere: 20, severe:  3 }],
          ['14ccc',  { careLevel:  14, length: 41, nonSevere: 40, severe:  1 }],
          ['10ddd',  { careLevel:  10, length: 31, nonSevere: 11, severe: 10 }],
          ['16eee',  { careLevel:  16, length: 29, nonSevere: 10, severe: 19 }],
          ['41fff',  { careLevel:  41, length:  5, nonSevere:  3, severe:  2 }],
          ['98ggg',  { careLevel:  98, length: 17, nonSevere: 12, severe:  5 }],
          ['31hhh',  { careLevel:  31, length:  7, nonSevere:  3, severe:  4 }],
          ['102iii', { careLevel: 102, length: 23, nonSevere: 15, severe:  8 }],
          ['29jjj',  { careLevel:  29, length: 27, nonSevere: 15, severe: 12 }],
          ['41kkk',  { careLevel:  41, length: 23, nonSevere: 15, severe:  8 }],
          ['31lll',  { careLevel:  31, length: 41, nonSevere: 34, severe:  7 }],
          ['29mmm',  { careLevel:  29, length: 16, nonSevere:  7, severe:  4 }],
          ['39nnn',  { careLevel:  39, length: 19, nonSevere:  7, severe: 12 }],
          ['51ooo',  { careLevel:  51, length: 11, nonSevere:  8, severe:  3 }],
          ['33ppp',  { careLevel:  33, length: 39, nonSevere: 30, severe:  9 }],
          ['12aaa4', { careLevel:  12, length: 29, nonSevere: 16, severe:  3 }],
          ['19bbb4', { careLevel:  19, length: 23, nonSevere: 20, severe:  3 }],
          ['14ccc4', { careLevel:  14, length: 41, nonSevere: 40, severe:  1 }],
          ['23ddd4', { careLevel:  23, length: 31, nonSevere: 11, severe: 10 }],
          ['16eee4', { careLevel:  16, length: 29, nonSevere: 10, severe: 19 }],
          ['3fff4',  { careLevel:   3, length:  5, nonSevere:  3, severe:  2 }],
          ['98ggg4', { careLevel:  98, length: 17, nonSevere: 12, severe:  5 }],
          ['31lll4', { careLevel:  31, length: 41, nonSevere: 34, severe:  7 }],
          ['237aa',  { careLevel:  23, length: 19, nonSevere: 16, severe:  3 }],
          ['197',    { careLevel:  19, length: 11, nonSevere: 20, severe:  3 }],
          ['11mmm4', { careLevel:  11, length: 51, nonSevere:  7, severe:  4 }],
          ['417k',   { careLevel:  41, length: 23, nonSevere: 15, severe:  8 }],
          ['33ppp4', { careLevel:  33, length: 39, nonSevere: 30, severe:  9 }],
          ['167e',   { careLevel:  16, length: 29, nonSevere: 10, severe: 19 }],
          ['237',    { careLevel:  23, length: 51, nonSevere: 11, severe: 10 }],
          ['517o',   { careLevel:  51, length: 11, nonSevere:  8, severe: 11 }],
          ['417f',   { careLevel:  41, length:  5, nonSevere:  3, severe:  2 }],
          ['297j',   { careLevel:  29, length: 27, nonSevere: 15, severe: 12 }],
          ['317l',   { careLevel:  31, length: 41, nonSevere: 34, severe:  7 }],
          ['29iii4', { careLevel:  29, length: 23, nonSevere: 15, severe:  8 }],
          ['397n',   { careLevel:  39, length: 19, nonSevere:  7, severe: 98 }],
          ['337p',   { careLevel:  33, length: 39, nonSevere: 30, severe:  9 }],
          ['987g',   { careLevel:  98, length: 17, nonSevere: 12, severe:  5 }],
          ['39nnn4', { careLevel:  39, length: 19, nonSevere:  7, severe: 12 }],
          ['147',    { careLevel:  14, length: 12, nonSevere: 40, severe:  1 }],
          ['41kkk4', { careLevel:  41, length: 23, nonSevere: 15, severe:  8 }],
          ['29jjj4', { careLevel:  29, length: 27, nonSevere: 15, severe: 12 }],
          ['417',    { careLevel:  41, length:  5, nonSevere:  3, severe:  2 }],
          ['167',    { careLevel:  16, length: 29, nonSevere: 10, severe: 19 }],
          ['317h',   { careLevel:  31, length:  7, nonSevere:  3, severe:  4 }],
          ['31hhh4', { careLevel:  31, length:  7, nonSevere:  3, severe:  4 }],
          ['1027i',  { careLevel: 102, length: 23, nonSevere: 15, severe:  8 }],
          ['51ooo4', { careLevel:  51, length: 11, nonSevere:  8, severe:  3 }],
          ['297m',   { careLevel:  29, length: 11, nonSevere:  7, severe:  4 }],
          ['297d',   { careLevel:  29, length: 31, nonSevere: 11, severe: 10 }],
          ['147c',   { careLevel:  14, length: 41, nonSevere: 40, severe:  1 }],
          ['197b',   { careLevel:  19, length: 23, nonSevere: 20, severe:  3 }],
          ['127a',   { careLevel:  12, length: 19, nonSevere: 16, severe:  3 }],
          ['337',    { careLevel:  33, length: 39, nonSevere: 30, severe:  9 }],
          ['517',    { careLevel:  51, length: 11, nonSevere:  8, severe:  3 }],
          ['397',    { careLevel:  39, length: 19, nonSevere:  7, severe: 12 }],
          ['297',    { careLevel:  29, length: 11, nonSevere:  7, severe:  4 }],
          ['317',    { careLevel:  31, length: 41, nonSevere: 40, severe:  7 }],
          ['417',    { careLevel:  41, length: 23, nonSevere: 15, severe:  8 }],
          ['297',    { careLevel:  29, length: 27, nonSevere: 11, severe: 12 }],
          ['1027',   { careLevel: 102, length: 23, nonSevere: 15, severe:  8 }],
          ['317',    { careLevel:  31, length:  7, nonSevere:  3, severe:  4 }],
          ['987',    { careLevel:  98, length: 17, nonSevere: 12, severe:  5 }],
          ['207bb',  { careLevel:  20, length: 23, nonSevere: 20, severe:  3 }],
          ['147cc',  { careLevel:  14, length: 41, nonSevere: 40, severe:  1 }],
          ['107dd',  { careLevel:  10, length: 31, nonSevere: 11, severe: 10 }],
          ['167ee',  { careLevel:  16, length: 29, nonSevere: 10, severe: 19 }],
          ['417ff',  { careLevel:  41, length:  5, nonSevere:  3, severe:  2 }],
          ['987gg',  { careLevel:  98, length: 17, nonSevere: 12, severe:  5 }],
          ['317hh',  { careLevel:  31, length:  7, nonSevere:  3, severe:  4 }],
          ['1027ii', { careLevel: 102, length: 23, nonSevere: 15, severe:  8 }],
          ['297jj',  { careLevel:  29, length: 27, nonSevere: 15, severe: 12 }],
          ['417kk',  { careLevel:  41, length: 23, nonSevere: 15, severe:  8 }],
          ['317ll',  { careLevel:  31, length: 41, nonSevere: 34, severe:  7 }],
          ['297mm',  { careLevel:  29, length: 16, nonSevere:  7, severe:  4 }],
          ['397nn',  { careLevel:  39, length: 19, nonSevere:  7, severe: 12 }],
          ['517oo',  { careLevel:  51, length: 11, nonSevere:  8, severe:  3 }],
          ['337pp',  { careLevel:  33, length: 39, nonSevere: 30, severe:  9 }],
          ['127aa4', { careLevel:  12, length: 29, nonSevere: 16, severe:  3 }],
          ['197bb4', { careLevel:  19, length: 23, nonSevere: 20, severe:  3 }],
          ['147cc4', { careLevel:  14, length: 41, nonSevere: 40, severe:  1 }],
          ['237dd4', { careLevel:  23, length: 31, nonSevere: 11, severe: 10 }],
          ['167ee4', { careLevel:  16, length: 29, nonSevere: 10, severe: 19 }],
          ['37ff4',  { careLevel:   3, length:  5, nonSevere:  3, severe:  2 }],
          ['987gg4', { careLevel:  98, length: 17, nonSevere: 12, severe:  5 }],
          ['317hh4', { careLevel:  31, length:  7, nonSevere:  3, severe:  4 }],
          ['297ii4', { careLevel:  29, length: 23, nonSevere: 15, severe:  8 }],
          ['297jj4', { careLevel:  29, length: 27, nonSevere: 15, severe: 12 }],
          ['417kk4', { careLevel:  41, length: 23, nonSevere: 15, severe:  8 }],
          ['317ll4', { careLevel:  31, length: 41, nonSevere: 34, severe:  7 }],
          ['117mm4', { careLevel:  11, length: 51, nonSevere:  7, severe:  4 }],
          ['397nn4', { careLevel:  39, length: 19, nonSevere:  7, severe: 12 }],
          ['517oo4', { careLevel:  51, length: 11, nonSevere:  8, severe:  3 }],
          ['337pp4', { careLevel:  33, length: 39, nonSevere: 30, severe:  9 }],
        ]
      }
    return (
      <div style={{...{ boxShadow: '0 0 100px 0 #000', height: '1200px', width: '1200px' }}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

