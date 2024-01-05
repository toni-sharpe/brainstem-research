import { type } from 'ramda'
import i18next from 'util/i18next/i18next'

import { throwError } from 'util/Util/Util'


// These arev used all over to create sub-pages so get built in utils
export function secondaryNavProps({ currentPanel, i18nBase, k, setCurrentPanel }) {
  throwError({
    check: currentPanel && i18nBase && k && type(setCurrentPanel) === 'Function',
    i18nKey: 'secondaryNavProps',
  })

  return {
    isSelected: currentPanel === k,
    label: i18next.t(`${i18nBase}.${k}PanelLabel`),
    onClick: () => setCurrentPanel(k),
    size: 'medium',
  }
}
