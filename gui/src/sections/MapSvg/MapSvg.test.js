import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'

import blankMapData from 'example-data/WorldMap.example-data'

import MapSvg from './MapSvg'

const selectedCountryMapFnMock = jest.fn()

const baseMapSvgProps = {
  currentYear: 2024,
  mapDetailData: blankMapData,
  selectedCountryMapFn: selectedCountryMapFnMock,
  showLabelList: true,
}

test('MapSvg', async () => {
  render(
    <MapSvg
      {...baseMapSvgProps}
    />
  )

  expect(screen.getByLabelText('world map move and zoom')).toBeTruthy()
  expect(screen.getByLabelText('world map')).toBeTruthy()
})


test('MapSvg with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: ganttToggleList } = render(
    <MapSvg
      {...baseMapSvgProps}
    />
  )

  expect(await axe(ganttToggleList)).toHaveNoViolations()
})
