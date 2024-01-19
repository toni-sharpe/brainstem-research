import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'

import APISVGData from 'example-data/APISVG.example-data'

import SVG from './SVG'

test('SVG - ', async () => {
  render(
    <SVG
      data={APISVGData}
    />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('SVG')).toBeTruthy()
  expect(screen.getByText('EN')).toBeTruthy()
  expect(screen.getByText('DE')).toBeTruthy()


  /*
   * Simple tests of on screen specifics, not always needed
   */
  expect(screen.getByText('This page is coming soon ...')).toBeTruthy()
})
