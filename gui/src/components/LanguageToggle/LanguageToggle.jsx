import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'

import Button from 'components/Button/Button'
import { setLocalStorage } from 'util/UtilLocalStorage/UtilLocalStorage'

import './LanguageToggle.scss'

const i18nBase = 'LanguageToggle'

function LanguageToggleButton({ languageKey }) {
  const currentLanguage = i18next.language
  const isSelected = languageKey === currentLanguage

  return (
    <Button
      aria-label={i18next.t(`${i18nBase}.${'languageKey'}`)}
      isSelected={isSelected}
      extraClass={'button--medium'}
      label={i18next.t(`${i18nBase}.${languageKey}`)}
      onClick={() => {
        i18next.changeLanguage(languageKey)
        setLocalStorage({ k: 'currentLanguage', v: languageKey })
      }}
    />
  )
}

LanguageToggleButton.defaultProps = {
  languageKey: 'en',
}

LanguageToggleButton.propTypes = {
  languageKey: PropTypes.oneOf(['en', 'de']),
}

function LanguageToggle() {
  return (
    <nav
      aria-label={i18next.t(`${i18nBase}.languageToggle`)}
      className='row-layout space-children language-toggle'
    >
      <ol className='row-layout space-children'>
        <li key='de'><LanguageToggleButton languageKey='de' /></li>
        <li key='en'><LanguageToggleButton languageKey='en' /></li>
      </ol>
    </nav>
  )
}

export default LanguageToggle
