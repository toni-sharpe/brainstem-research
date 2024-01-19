// DragGraph.story.js
import DragGraph from './DragGraph';

export default {
  component: DragGraph,
};

const divWrapper = { boxShadow: '0 0 100px 0 #000', height: '500px', width: '400px' }

const baseDragGraphProps = {
  color: 'green',
  heading: 'Graph Heading',
  labelValList: [
    ['a', 5],
    ['b', 17],
    ['c', 7],
    ['d', 23],
    ['e', 27],
    ['f', 23],
    ['g', 41],
    ['h', 11],
    ['i', 19],
  ]
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

export const TwoPoints = {
  render: () => {
    const props = {
      ...baseDragGraphProps,
      color: 'red',
      labelValList: [
        ['a', 7],
        ['b', 13],
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
      labelValList: [
        ['a', 7],
        ['b', 13],
        ['c', 9],
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
      labelValList: [
        ['a', 7],
        ['b', 13],
        ['c', 3],
        ['d', 5],
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
      labelValList: [
        ['a', 19],
        ['b', 23],
        ['c', 41],
        ['d', 31],
        ['e', 29]
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
      labelValList: [
        ['a', 19],
        ['b', 23],
        ['c', 41],
        ['d', 31],
        ['e', 29],
        ['f', 5],
        ['g', 17],
        ['h', 7],
        ['i', 23],
        ['j', 27],
        ['k', 23],
        ['l', 41],
        ['m', 11],
        ['n', 19],
        ['o', 11],
        ['p', 39],
        ['q', 51],
        ['r', 7],
        ['s', 7],
        ['t', 33],
        ['u', 27],
        ['v', 43],
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
      labelValList: [
        ['a', 19],
        ['b', 1001],
        ['c', 1],
        ['d', 517],
        ['e', 307],
        ['f', 219],
        ['g', 137],
        ['h', 998],
      ],
    }
    return (
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const Smaller = {
  render: () => {
    return (
      <div style={{ boxShadow: '0 0 100px 0 #000', height: '275px', width: '180px' }}>
        <DragGraph {...baseDragGraphProps} />
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
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
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
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
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
      <div style={{...divWrapper}}>
        <DragGraph {...props} />
      </div>
    )
  }
};
