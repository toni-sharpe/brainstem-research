import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import APITimeLineData from 'example-data/APITimeLine.example-data'

import TimeLine from './TimeLine'

test('TimeLine - ', async () => {
  expect.extend(toHaveNoViolations)

  const { container: timeLine } = render(
    <TimeLine
      data={APITimeLineData}
    />
  )

  expect(await axe(timeLine)).toHaveNoViolations()


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('Time Line')).toBeTruthy()
  expect(screen.getByLabelText('A set of options for the months')).toBeTruthy()
  expect(screen.getByText('EN')).toBeTruthy()
  expect(screen.getByText('DE')).toBeTruthy()


  /*
   * Simple tests of on screen specifics, not always needed
   */
  expect(screen.queryByText('2030')).toBeNull()
  expect(screen.getByText('2024')).toBeTruthy()
})

// test('TimeLine with AXE', async () => {

//   const { container: timeLine } = render(
//     <TimeLine
//       data={APITimeLineData}
//     />
//   )
// })
