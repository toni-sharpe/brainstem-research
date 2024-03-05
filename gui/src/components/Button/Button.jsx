import React from 'react'
import PropTypes from 'prop-types'

import ButtonSizePropType from 'prop-types/ButtonSize.prop-type'
import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'
import OnClickPropType from 'prop-types/OnClick.prop-type'

import './Button.scss'

function Button({
  ariaLabel,
  extraClass,
  isDisabled,
  isPrimaryMarked,
  isSelected,
  label,
  onClick,
  onKeyDown,
  size,
  style,
  title,
}) {
  const disabledClass = isDisabled ? ' is-disabled' : ''
  const selectedClass = isSelected ? ' is-selected' : ''

  const className = `${size ? `button--${size} ` : ''}${extraClass || ''}${selectedClass}${disabledClass}`

  const buttonProps = {
    'aria-disabled': isDisabled,
    'aria-label': ariaLabel,
    'aria-pressed': isSelected,
    disabled: isDisabled,
    className,
    onClick: isDisabled
      ? null
      : onClick,
    onKeyDown: isDisabled
      ? null
      : onKeyDown,
    style,
    title: `${title ? title : ''}${isDisabled ? ' (is currently disabled)' : ''}${isPrimaryMarked ? ' - primary' : ''}`,
  }

  return (
    <button { ...buttonProps }>
      <span>{label}</span>
    </button>
  )
}

Button.defaultProps = {
  ariaLabel: null,
  isDisabled: false,
  isSelected: false,
  label: "Label needs to be set!",
  size: null,
  title: undefined,
}

Button.propTypes = {
  ariaLabel: PropTypes.string,
  extraClass: PropTypes.string,
  isDisabled: PropTypes.bool,
  isPrimaryMarked: PropTypes.bool,
  isSelected: PropTypes.bool,
  label: NumberOrStringPropType,
  onClick: OnClickPropType,
  size: ButtonSizePropType,
  title: PropTypes.string,
}

export default Button
