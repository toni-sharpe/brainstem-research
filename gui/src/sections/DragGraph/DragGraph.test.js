import DragGraph from './DragGraph';

const baseDragGraphProps = {
  color: 'green',
  graphKey: 'dragGraphTest',
  heading: 'Graph Heading',
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
  ]
}

test('DragGraph', () => {
  render: () => {
    return (
      <div style={{...divWrapper}}>
        <DragGraph {...baseDragGraphProps} />
      </div>
    )
  }
})
