import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import RealFullData from 'real-data/RealFull.data'

import PathologicalEventList from './PathologicalEventList'

test('PathologicalEventList - ', async () => {
  render(
    <PathologicalEventList data={RealFullData} />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('Pathological event list')).toBeTruthy()


  /*
   * Simple tests of on screen specifics, not always needed
   */
  expect(screen.getAllByText('Et\'ogy').length).toEqual(12)
})

test('PathologicalEventList with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: pathologicalEventList } = render(
    <PathologicalEventList />
  )

  expect(await axe(pathologicalEventList)).toHaveNoViolations()
})
