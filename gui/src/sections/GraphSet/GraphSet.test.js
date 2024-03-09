import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import GraphSet from './GraphSet'

const user = userEvent.setup()

const setGraphSetStub = jest.fn()

const baseGraphSetProps = {
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
}

test('GraphSet', async () => {
  render(
    <GraphSet
      {...baseGraphSetProps}
    />
  )

  const dragGraphTab = screen.getByLabelText('tab to select drag graph for This is a test key')
  expect(dragGraphTab).toBeTruthy()

  await waitFor(() => {
    dragGraphTab.click()
  })

  expect(screen.getByLabelText('graph heading and controls for This is a test key'))

  const blockGraphTab = screen.getByLabelText('tab to select block graph for This is a test key')
  expect(blockGraphTab).toBeTruthy()

  await waitFor(() => {
    blockGraphTab.click()
  })

  expect(screen.getByLabelText('block graph shows drag graph data differently for This is a test key'))
})


test('GraphSet with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: ganttToggleList } = render(
    <GraphSet
      {...baseGraphSetProps}
    />
  )

  expect(await axe(ganttToggleList)).toHaveNoViolations()
})
