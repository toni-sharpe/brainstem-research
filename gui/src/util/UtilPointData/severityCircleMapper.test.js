import severityCircleMapper from './severityCircleMapper'

const data = [
  ['a', { severe: 2, nonSevere: 6 }],
  ['b', { severe: 3, nonSevere: 4 }],
]

const mapper = severityCircleMapper({ data, zoom: 1 })

test('mapper() returns structure with an array of points', () => {
  const result = [[1, 2], [5, 8]].map(mapper)
  expect(result.length).toEqual(data.length)
})
