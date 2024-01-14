import PropTypes from 'prop-types'
import React from 'react'

import './SecondaryNav.scss'

function SecondaryNav({ ariaLabel, children }) {
  return (
    <nav aria-label={ariaLabel}>
      <ol className='secondary-nav row-layout space-children'>
        {children}
      </ol>
    </nav>
  )
}

SecondaryNav.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default SecondaryNav
