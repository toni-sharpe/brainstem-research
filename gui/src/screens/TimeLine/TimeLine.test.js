import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'

import APITimeLineData from 'example-data/APITimeLine.example-data'

import TimeLine from './TimeLine'

test('TimeLine - ', async () => {
  render(
    <TimeLine
      data={APITimeLineData}
    />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('Time Line')).toBeTruthy()
  expect(screen.getByLabelText('A set of options for the months')).toBeTruthy()
  expect(screen.getByText('English')).toBeTruthy()
  expect(screen.getByText('Deutsche')).toBeTruthy()


  /*
   * Simple tests of on screen specifics, not always needed
   */
  expect(screen.queryByText('2030')).toBeNull()
  expect(screen.queryByText('2029')).toBeNull()
  expect(screen.queryByText('2028')).toBeNull()
  expect(screen.queryByText('2027')).toBeNull()
  expect(screen.queryByText('2026')).toBeNull()
  expect(screen.queryByText('2025')).toBeNull()
  expect(screen.getByText('2024')).toBeTruthy()
  expect(screen.getByText('2023')).toBeTruthy()
  expect(screen.getByText('2022')).toBeTruthy()
  expect(screen.getByText('2018')).toBeTruthy()
  expect(screen.getByText('2000')).toBeTruthy()
  expect(screen.queryByText('1999')).toBeNull()
})
