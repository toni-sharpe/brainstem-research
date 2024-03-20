import React from 'react'
import PropTypes from 'prop-types'

import CurrentUrlPropType from 'prop-types/CurrentUrl.prop-type'
import { setLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import './MenuItem.scss'

export function MenuItem({
  currentUrl,
  label,
  urlSlug,
}) {
  const isSelected = currentUrl === urlSlug

  const menuItemProps = {
    'aria-current': isSelected ? 'page' : false,
    className: `menu-item ${ isSelected ? 'menu-item--current' : ''}`,
    href: `/${urlSlug}`,
    onClick: () => setLocalStorage({ k: 'currentFocus', v: 'menuL1' }),
    role: 'menuitem',
  }

  return (<a {...menuItemProps}>{label}</a>)
}

MenuItem.propTypes = {
  currentUrl: CurrentUrlPropType,
  label: PropTypes.string.isRequired,
  urlSlug: CurrentUrlPropType
}

export default MenuItem
