import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'

import CurrentUrlPropType from 'prop-types/CurrentUrl.prop-type'
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
        {rootMenuSlugs.map(urlSlug => {
          return (
            <li key={urlSlug}>
              <MenuItem
                currentUrl={currentUrl}
                url={urlSlug}
                label={i18next.t(`MainPageHeading.${urlSlug}`)}
              />
            </li>
          )
        })}
      </ul>
    </nav>
  )  
}

Menu.defaultProps = {
  currentUrl: 'scatter',
  rootMenuSlugs: ROOT_MENU_SLUGS,
}

Menu.propTypes = {
  currentUrl: CurrentUrlPropType,
  rootMenuSlugs: PropTypes.arrayOf(CurrentUrlPropType)
}

export default Menu;
