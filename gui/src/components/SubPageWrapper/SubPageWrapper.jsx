import React from 'react'
import PropTypes from 'prop-types'

import HeadingLevelPropType from 'prop-types/HeadingLevel.prop-type'

import './SubPageWrapper.scss'

function SubPageWrapper({ children, heading, headingLevel }) {
  return (
    <section className='sub-page-wrapper column-layout space-children--wide-column'>
      {heading
        &&
        React.createElement(
          headingLevel, {
            children: heading,
            className: `sub-page-wrapper__${headingLevel}`
          }
        )
      }
      <div className='sub-page-wrapper__child-wrapper row-layout space-children--with-border'>
        {children}
      </div>
    </section>
  )
}

SubPageWrapper.defaultProps = {
  headingLevel: 'h2',
}

SubPageWrapper.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
  headingLevel: HeadingLevelPropType,
}

export default SubPageWrapper
