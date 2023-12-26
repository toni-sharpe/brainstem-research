import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { filter, pipe } from 'ramda'
import { render, screen } from '@testing-library/react'

import { simplifiedScatterData } from 'example-data/ScatterSimpleTest.example-data'

import ScatterChart from './ScatterChart'


function baseScatterChartProps() {
  return ({
    ariaLabel: 'Test chart name',
    domain: [0, 100],
    keyPair: { x: 'test', y: 'chart' },
    scatterData: simplifiedScatterData(),
  })
}


test('ScatterChart', async () => {
  render(
    <ScatterChart
      {...baseScatterChartProps()}
    />
  )

  expect(screen.getByLabelText('Test chart name')).toBeTruthy()
})


test('ScatterChart - with map function', async () => {
  function mapFn ({ chart, test }) {
    return {
      x: chart === 9 ? null : chart,
      y: test === 9 ? null : test,
    }
  }
  render(
    <ScatterChart
      {...baseScatterChartProps()}
      mapFn={mapFn}
    />
  )
})
