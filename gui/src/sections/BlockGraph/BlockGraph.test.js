import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import BlockGraph from './BlockGraph'

const user = userEvent.setup()

const setBlockGraphStub = jest.fn()

const baseBlockGraphProps = {
  labelValList: [
    ['a', { careLevel:  13, length: 5 , nonSevere:  3, severe:  2, rgb: [100,  80, 160] }],
    ['b', { careLevel: 101, length: 17, nonSevere:  6, severe: 11, rgb: [ 80,  70, 170] }],
    ['c', { careLevel:  87, length: 7 , nonSevere:  6, severe:  1, rgb: [ 90,  70, 180] }],
    ['d', { careLevel:  53, length: 23, nonSevere: 13, severe: 10, rgb: [180, 100, 100] }],
    ['e', { careLevel:  54, length: 27, nonSevere: 13, severe: 14, rgb: [ 90,  70, 130] }],
    ['f', { careLevel:  56, length: 23, nonSevere:  7, severe: 16, rgb: [120, 100, 180] }],
    ['g', { careLevel:  87, length: 41, nonSevere: 27, severe: 14, rgb: [ 90,  70, 180] }],
    ['h', { careLevel: 123, length: 11, nonSevere:  8, severe:  3, rgb: [120, 100,  90] }],
    ['i', { careLevel:  87, length: 19, nonSevere: 18, severe:  1, rgb: [ 90,  70, 180] }],
  ],
  graphKey: 'testing',
  heading: 'Test block graph',
}

test('BlockGraph', async () => {
  render(
    <BlockGraph
      {...baseBlockGraphProps}
    />
  )

  expect(screen.getByLabelText('block graph shows drag graph data differently for Test block graph')).toBeTruthy()
  expect(screen.getByText('23.70%')).toBeTruthy()
  expect(screen.getByText('15.61%')).toBeTruthy()
  expect(screen.getAllByText('13.29%').length).toEqual(2)
  expect(screen.getByText('i : 19 : 10.98%')).toBeTruthy()
  expect(screen.getByText('b : 17 : 9.83%')).toBeTruthy()
  expect(screen.getByText('h : 11 : 6.36%')).toBeTruthy()
  expect(screen.getByText('c : 7 : 4.05%')).toBeTruthy()
  expect(screen.getByText('2.89%')).toBeTruthy()
})


test('BlockGraph with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: ganttToggleList } = render(
    <BlockGraph
      {...baseBlockGraphProps}
    />
  )

  expect(await axe(ganttToggleList)).toHaveNoViolations()
})
