import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button/Button'

import './MenuButton.scss'

function MenuButton({
  label,
  onClick,
  title,
}) {
  return (
    <Button
      extraClass='menu-button'
      label={label}
      onClick={onClick}
      title={title}
    />
  )
}

MenuButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
}

export default MenuButton
