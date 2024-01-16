import React from 'react'
import PropTypes from 'prop-types'

import HeadingLevelPropType from 'prop-types/HeadingLevel.prop-type'

import './SubPageWrapper.scss'

function SubPageWrapper({
  children,
  extraClass,
  heading,
  headingLevel,
  withBorder,
}) {
  return (
    <section className={`sub-page-wrapper column-layout space-children--wide-column${extraClass ? ` ${extraClass}` : ''}`}>
      {heading
        &&
        React.createElement(
          headingLevel, {
            children: heading,
            className: `sub-page-wrapper__${headingLevel}`
          }
        )
      }
      <div className={`sub-page-wrapper__child-wrapper row-layout space-children${withBorder ? '--with-border' : ''}`}>
        {children}
      </div>
    </section>
  )
}

SubPageWrapper.defaultProps = {
  extraClass: undefined,
  headingLevel: 'h2',
  withBorder: true,
}

SubPageWrapper.propTypes = {
  children: PropTypes.node,
  extraClass: PropTypes.string,
  heading: PropTypes.string,
  headingLevel: HeadingLevelPropType,
  withBorder: PropTypes.bool,
}

export default SubPageWrapper
