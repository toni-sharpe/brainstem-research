import React from 'react'
import PropTypes from 'prop-types'

import CurrentUrlPropType from 'prop-types/CurrentUrl.prop-type'

import './MenuItem.scss'

export function MenuItem({ currentUrl, label, url }) {
  const isSelected = currentUrl === url

  const menuItemProps = {
    'aria-current': isSelected ? 'page' : false,
    className: `menu-item ${ isSelected ? 'menu-item--current' : ''}`,
    href: `/${url}`,
    role: 'menuitem',
  }

  return (<a {...menuItemProps}>{label}</a>)
}

MenuItem.propTypes = {
  currentUrl: CurrentUrlPropType,
  label: PropTypes.string.isRequired,
  url: CurrentUrlPropType
}

export default MenuItem
