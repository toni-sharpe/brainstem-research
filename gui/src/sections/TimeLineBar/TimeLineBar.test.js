import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import { TimeLineBarDataToneSet } from 'example-data/TimeLineBar.example-data'
import { SCALE_DEFAULT, STAT_BAR_DETAIL_LIST, TONE_KEY_LIST } from 'util/Constant/BaseConstantList'

import TimeLineBar from './TimeLineBar'


test('TimeLineBar', async () => {
  render(
    <TimeLineBar
      {...TimeLineBarDataToneSet.good}
      timeLineBarDetailList={STAT_BAR_DETAIL_LIST}
    />
  )

  expect(screen.getByText('Recovery responses')).toBeTruthy()

  expect(screen.getByText('=61')).toBeTruthy()

  expect(screen.getByText('lo | MDA | hi')).toBeTruthy()
  expect(screen.getByText('Mean | Medn')).toBeTruthy()
  expect(screen.getByText('Skew')).toBeTruthy()
})
