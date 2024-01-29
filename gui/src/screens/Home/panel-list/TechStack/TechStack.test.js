import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import TechStack from './TechStack'

test('TechStack - ', async () => {
  render(
    <TechStack />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('Tech Stack')).toBeTruthy()
  expect(screen.getByText('The website is a complete build, starting from SQL that builds and populates a database to the visual screens that display that data and allow user interaction. The full, detailed stack is as follows - not all of these are specific technologies, techniques and libraries etc. are included.')).toBeTruthy()


  /*
   * Simple tests of on screen specifics, not always needed
   */
})

test('TechStack with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: techStack } = render(
    <TechStack />
  )

  expect(await axe(techStack)).toHaveNoViolations()
})
