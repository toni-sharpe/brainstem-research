// DragGraph.story.js
import DragGraph from './DragGraph';

export default {
  component: DragGraph,
};

const baseDragGraphProps = {
  color: 'green',
  valList: [5, 17, 7, 23, 27, 23, 41, 11, 19],
}

export const Primary = {
  render: () => {
    return (
      <div style={{ boxShadow: '0 0 100px 0 #000', height: '300px', width: '300px' }}>
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
      valList: [7, 13],
    }
    return (
      <div style={{ boxShadow: '0 0 100px 0 #000', height: '300px', width: '300px' }}>
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
      valList: [7, 13, 9],
    }
    return (
      <div style={{ boxShadow: '0 0 100px 0 #000', height: '300px', width: '300px' }}>
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
      valList: [7, 13, 3, 5],
    }
    return (
      <div style={{ boxShadow: '0 0 100px 0 #000', height: '300px', width: '300px' }}>
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
      valList: [19, 23, 41, 31, 29],
    }
    return (
      <div style={{ boxShadow: '0 0 100px 0 #000', height: '300px', width: '300px' }}>
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
      valList: [19, 23, 41, 31, 29, 5, 17, 7, 23, 27, 23, 41, 11, 19, 11, 39, 51, 7, 7, 33, 27, 43],
    }
    return (
      <div style={{ boxShadow: '0 0 100px 0 #000', height: '300px', width: '300px' }}>
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
      valList: [19, 1001, 1, 517, 307, 219, 137, 998],
    }
    return (
      <div style={{ boxShadow: '0 0 100px 0 #000', height: '300px', width: '300px' }}>
        <DragGraph {...props} />
      </div>
    )
  }
};

export const Smaller = {
  render: () => {
    return (
      <div style={{ boxShadow: '0 0 100px 0 #000', height: '180px', width: '180px' }}>
        <DragGraph {...baseDragGraphProps} />
      </div>
    )
  }
};

export const Tiny = {
  render: () => {
    return (
      <div style={{ boxShadow: '0 0 100px 0 #000', height: '50px', width: '50px' }}>
        <DragGraph {...baseDragGraphProps} />
      </div>
    )
  }
};
