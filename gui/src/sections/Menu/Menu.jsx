import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'

import CurrentUrlPropType from 'prop-types/CurrentUrl.prop-type'
import KeyHint from 'components/KeyHint/KeyHint'
import MenuItem from 'components/MenuItem/MenuItem'
import { ROOT_MENU_SLUGS } from 'util/Constant/BaseConstantList'

import './Menu.scss'

const i18nBase = 'Menu'

function Menu({
  currentUrl,
  rootMenuSlugs,
}) {
  return (
    <nav
      aria-label={i18next.t(`${i18nBase}.ariaLabel`)}
    >
      <ul role='menu' className='menu'>
        <li role='none'>
          <KeyHint
            letter='m'
            positionStyle={{ top: '-2px', left: '-2px' }}
          />
        </li>
        {rootMenuSlugs.map((urlSlug, i) => {
          return (
            <li
              className={i === 0 ? 'js-menu-first' : null}
              key={urlSlug}
              role='none'
            >
              <MenuItem
                currentUrl={currentUrl}
                label={i18next.t(`MainPageHeading.${urlSlug}`)}
                urlSlug={urlSlug}
              />
            </li>
          )
        })}
      </ul>
    </nav>
  )  
}

Menu.defaultProps = {
  rootMenuSlugs: ROOT_MENU_SLUGS,
}

Menu.propTypes = {
  currentUrl: CurrentUrlPropType,
  rootMenuSlugs: PropTypes.arrayOf(CurrentUrlPropType)
}

export default Menu;
