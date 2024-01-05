import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import { STAT_BAR_DETAIL_LIST } from 'util/Constant/BaseConstantList'

import TimeLineBarDetailToggleList from './TimeLineBarDetailToggleList'


const user = userEvent.setup()

const baseTimeLineBarDetailToggleListProps = {
  setTimeLineBarDetailList: () => {},
  timeLineBarDetailToggleList: STAT_BAR_DETAIL_LIST,
}

test('TimeLineBarDetailToggleList', async () => {
  render(
    <TimeLineBarDetailToggleList
      {...baseTimeLineBarDetailToggleListProps}
    />
  )

  expect(screen.getByText('MDA Deviation')).toBeTruthy()
  expect(screen.getByText('Label')).toBeTruthy()
  expect(screen.getByText('Stats')).toBeTruthy()
  expect(screen.getByText('Quantile')).toBeTruthy()
  expect(screen.getByText('Quantile Numbers')).toBeTruthy()
  expect(screen.getByText('Mean')).toBeTruthy()
  expect(screen.getByText('Median')).toBeTruthy()
  expect(screen.getByText('Range')).toBeTruthy()
  expect(screen.getByText('Min')).toBeTruthy()
  expect(screen.getByText('Max')).toBeTruthy()
  expect(screen.getByText('Fat lines')).toBeTruthy()
})
