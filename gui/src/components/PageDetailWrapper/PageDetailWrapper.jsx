import i18next from 'util/i18next/i18next'
import React from 'react'
import PropTypes from 'prop-types'

import LanguageToggle from 'components/LanguageToggle/LanguageToggle'
import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'

import './PageDetailWrapper.scss'

function PageDetailWrapper({
  children,
  count,
  heading: headingProp,
  i18nBase,
  secondaryNav,
  subHeading,
}) {
  const heading = headingProp?.length
    ? headingProp
    : i18next.t(`MainPageHeading.${i18nBase}`)

  return ( 
    <article className='page-detail-wrapper column-layout space-children--wide-column'>
      <header className='row-layout page-detail-wrapper__header'>
        <div className='row-layout space-children--wide'>
          <h1 className='page-detail-wrapper__heading'>{heading}</h1>
          <section className='page-detail-wrapper__secondary row-layout space-children--wide-with-border'>
            {subHeading && (<div><h2>{subHeading}</h2></div>)}
            {secondaryNav && (<div>{secondaryNav}</div>)}
          </section>
        </div>
        <div className='row-layout space-children--wide-with-border'>
          <span className='page-detail-wrapper__full-count'>
            <span><i>N</i>={count}</span>
          </span>
          <LanguageToggle />
        </div>
      </header>
      {children}
    </article>
  )
} 

PageDetailWrapper.defaultProps = {
  count: 0,
  secondaryNav: null,
  subHeading: null,
}

function HeadingOrI18nBasePropType(props) {
  if (!props.heading && !props.i18nBase) {
    return new Error('either heaing or i18nBase must be provided to the PageDetailWrapper component')
  }
}

PageDetailWrapper.propTypes = {
  children: PropTypes.node,
  count: NumberOrStringPropType,
  heading: HeadingOrI18nBasePropType,
  i18nBase: HeadingOrI18nBasePropType,
  secondaryNav: PropTypes.node,
  subHeading: PropTypes.string,
}

export default PageDetailWrapper
