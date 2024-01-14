import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { getByLabelText, render, screen, waitFor } from '@testing-library/react'

import APIPrimeSymptomListData from 'example-data/APIPrimeSymptomList.example-data'

import PrimeSymptomList from './PrimeSymptomList'

test('PrimeSymptomList - ', async () => {
  render(
    <PrimeSymptomList
      data={APIPrimeSymptomListData}
    />
  )


  /*
   * Base screen tests, has it rendered
   */
  expect(screen.getByText('Prime Symptom')).toBeTruthy()
  expect(screen.getByText('EN')).toBeTruthy()
  expect(screen.getByText('DE')).toBeTruthy()


  /*
   * Simple tests of on screen specifics, not always needed
   */
  expect(screen.getByLabelText('Tools and feedback to interact with the graph')).toBeTruthy()
  expect(screen.getByText('NB: this graph always counts from the first entry made, therefore filtering may return numbers that don\'t immediately make sense')).toBeTruthy()
  expect(screen.getByText('Prime symptom bar graph with non fatal columns factored by 1.22')).toBeTruthy()
  expect(screen.getByText('Increase data as added')).toBeTruthy()
  expect(screen.getByText('Outcome column summary')).toBeTruthy()
  expect(screen.getByText('Factor is on')).toBeTruthy()
  expect(screen.getByText('Total:')).toBeTruthy()
  expect(screen.getByText('Fatal: 11')).toBeTruthy()
  expect(screen.getByText('Non Fatal: 9')).toBeTruthy()
  expect(screen.getByText('Unknown:')).toBeTruthy()
})
