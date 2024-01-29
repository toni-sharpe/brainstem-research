import {render, screen} from '@testing-library/react'
import i18next from 'util/i18next/i18next'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe'

import { secondaryNavProps } from 'util/UtilNav/UtilNav'
import Button from 'components/Button/Button'

import SecondaryNav from './SecondaryNav'


const i18nBase = 'StoryBook'


const user = userEvent.setup()
const setCurrentPanelMock = jest.fn()


const commonNavProps = {
  currentPanel: 'test-a',
  i18nBase,
  setCurrentPanel: setCurrentPanelMock,
}


test('SecondaryNav', async () => {
  render(
    <SecondaryNav ariaLabel={i18next.t(`${i18nBase}.secondaryNav`)}>
      <li><Button {...secondaryNavProps({ ...commonNavProps, k: 'test-a' })} /></li>
      <li><Button {...secondaryNavProps({ ...commonNavProps, k: 'test-b' })} /></li>
    </SecondaryNav>
  )

  const ariaOther = { current: false }
  const ariaCurrent = { current: 'page' }

  expect(screen.getByLabelText('Storybook secondary nav')).toBeTruthy()
  expect(screen.getByText('Test Panel A', ariaCurrent)).toBeTruthy()
  const panelBButton = screen.getByText('Test Panel B', ariaOther)
  expect(panelBButton).toBeTruthy()

  await user.click(panelBButton)

  expect(screen.getByLabelText('Storybook secondary nav')).toBeTruthy()
  expect(screen.getByText('Test Panel A', ariaOther)).toBeTruthy()
  expect(screen.getByText('Test Panel B', ariaCurrent)).toBeTruthy()
})


test('SecondaryNav with AXE', async () => {
  expect.extend(toHaveNoViolations)

  const { container: secondaryNav } = render(
    <SecondaryNav ariaLabel={i18next.t(`${i18nBase}.secondaryNav`)}>
      <li><Button {...secondaryNavProps({ ...commonNavProps, k: 'test-a' })} /></li>
      <li><Button {...secondaryNavProps({ ...commonNavProps, k: 'test-b' })} /></li>
    </SecondaryNav>
  )

  expect(await axe(secondaryNav)).toHaveNoViolations()
})
