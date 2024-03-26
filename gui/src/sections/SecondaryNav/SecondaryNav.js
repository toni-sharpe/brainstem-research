import PropTypes from 'prop-types'
import React from 'react'

import KeyHint from 'components/KeyHint/KeyHint'

import './SecondaryNav.scss'

function SecondaryNav({
  ariaLabel,
  children,
  extraClass,
}) {
  return (
    <nav aria-label={ariaLabel}>
      <ol className={`${extraClass ? `${extraClass} ` : ''}secondary-nav row-layout space-children`}>
        <li>
          <KeyHint
            letter='n'
            positionStyle={{ top: '-12px', left: '-12px' }}
          />
        </li>
        {children}
      </ol>
    </nav>
  )
}

SecondaryNav.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  extraClass: PropTypes.string,
}

export default SecondaryNav
