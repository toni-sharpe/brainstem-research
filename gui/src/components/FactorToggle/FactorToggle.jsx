import React from 'react'
import PropTypes from 'prop-types'
import i18next from 'util/i18next/i18next'

import SingleLabelButtonList from 'components/SingleLabelButtonList/SingleLabelButtonList'

const i18nBase = 'FactorToggle'

export function FactorToggle({
  currentFactorOn,
  setCurrentFactorOn,
}) {
  const state = currentFactorOn ? 'on' : 'off'
  const altState = state === 'on' ? 'off' : 'on'

  return (
    <SingleLabelButtonList label={i18next.t(`${i18nBase}.${state}`)}>
      <button
        aria-label={i18next.t(`${i18nBase}.ariaLabel`, { state, altState })}
        onClick={() => { setCurrentFactorOn(!currentFactorOn)} }
      >
        { currentFactorOn
          ? i18next.t(`${i18nBase}.turnOff`)
          : i18next.t(`${i18nBase}.turnOn`)
        }
      </button>
    </SingleLabelButtonList>
  )
}

FactorToggle.defaultProps = {
  currentFactorOn: true,
}

FactorToggle.propTypes = {
  currentFactorOn: PropTypes.bool,
  setCurrentFactorOn: PropTypes.func,
}

export default FactorToggle
