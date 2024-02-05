import { isNil, isNotNil } from 'ramda'
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
}) {
  const heading = headingProp?.length
    ? headingProp
    : i18next.t(`MainPageHeading.${i18nBase}`)

  return ( 
    <article className='page-detail-wrapper column-layout space-children--column'>
      <header className='row-layout page-detail-wrapper__header'>
        <div className='page-detail-wrapper__left'>
          <h1 className='page-detail-wrapper__heading'>{heading}</h1>
          <section className='page-detail-wrapper__secondary row-layout space-children--wide-with-border'>
            {secondaryNav && (<div>{secondaryNav}</div>)}
          </section>
        </div>
        <div className='row-layout space-children'>
          { isNotNil(count)
            && (
              <span className='page-detail-wrapper__full-count'>
                {
                  <span>
                    <i>N</i>={count}
                  </span>
                }
              </span>
            )
          }
          <LanguageToggle />
        </div>
      </header>
      {children}
    </article>
  )
} 

PageDetailWrapper.defaultProps = {
  count: null,
  secondaryNav: null,
}

function HeadingOrI18nBasePropType(props) {
  if (!props.heading && isNil(props.i18nBase)) {
    return new Error('either heading or i18nBase must be provided to the PageDetailWrapper component')
  }
}

PageDetailWrapper.propTypes = {
  children: PropTypes.node,
  count: NumberOrStringPropType,
  heading: HeadingOrI18nBasePropType,
  i18nBase: HeadingOrI18nBasePropType,
  secondaryNav: PropTypes.node,
}

export default PageDetailWrapper
