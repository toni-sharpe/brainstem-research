export function simplifiedScatterData({ a = 'test', b = 'chart' } = {}) {
  return ([
    { [a]: 9,    [b]: 9 },
    { [a]: 8,    [b]: 6 },
    { [a]: 7,    [b]: 9 },
    { [a]: 7,    [b]: 6 },
    { [a]: 6,    [b]: 8 },
    { [a]: 7,    [b]: 8 },
    { [a]: 9,    [b]: 8 },
    { [a]: 7,    [b]: 7 },
    { [a]: 9,    [b]: 8 },
    { [a]: null, [b]: 8 },
    { [a]: 7,    [b]: null },
    { [a]: null, [b]: null },
  ])
}

export const scatterChartStatListPointData = [
  { test: 9,    chart: 9 },
  { test: 8,    chart: 6 },
  { test: 7,    chart: 9 },
  { test: 7,    chart: 6 },
  { test: 6,    chart: 8 },
  { test: 7,    chart: 8 },
  { test: 9,    chart: 8 },
  { test: 7,    chart: 7 },
  { test: 9,    chart: 8 }
]
