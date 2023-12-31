import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React from 'react'
import { concat, indexOf, remove, type } from 'ramda'

import AlignPropType from 'prop-types/Align.prop-type'
import AxisPropType from 'prop-types/Axis.prop-type'
import CurrentAxisSelectionPropType from 'prop-types/CurrentAxisSelection.prop-type'
import Button from 'components/Button/Button'
import ClinicalResponsePropType from 'prop-types/ClinicalResponse.prop-type'
import USER_FACING_SET, { DURATION_MAP } from 'util/Constant/FullDataPointList'
import { HeadingLevelStartPropType } from 'prop-types/HeadingLevel.prop-type'
import { isOrIsInArray } from 'util/Util/Util'

import './AxisSelector.scss'

const i18nBase = 'AxisSelector'

export function makeSelectionFn({
  currentAxisSelection,
  setCurrentAxisSelection,
}) {
  return type(currentAxisSelection) === 'Array'
    ? selection => {
        const newAxisSelection = currentAxisSelection.includes(selection)
          ? currentAxisSelection.length > 1
            ? remove(indexOf(selection, currentAxisSelection), 1, currentAxisSelection)
            : currentAxisSelection
          : [...currentAxisSelection, selection]
        setCurrentAxisSelection([...newAxisSelection])
      }
    : setCurrentAxisSelection
}

function AxisSelector({
  align,
  axisOptions: axsOptions,
  axis: axs,
  currentAxisSelection,
  defineDurationOptions,
  disabledSelection,
  headingLevelStart,
  primaryMark,
  setCurrentAxisSelection,
  showDurationOptions,
}) {
  const axis = axs.toUpperCase()
  const axisOptions = showDurationOptions && !defineDurationOptions
    ? concat(axsOptions, DURATION_MAP)
    : axsOptions
  const axisSelectorClassNameList = `axis-selector column-layout space-children--column ${align}`
  const axisSelectorHeading = i18next.t(`${i18nBase}.axis${axis}`)

  function makeButton({ k }) {
    const isPrimaryMarked = primaryMark === k
    const label = i18next.t(`CommonClinicalResponses.${k}`)
    const primaryMarkAriaExtra = isPrimaryMarked
      ? `, ${i18next.t(`${i18nBase}.primaryMark`)}`
      : ''
    const ariaLabel = `${label} ${i18next.t(`${i18nBase}.shownOn${axis}`)}${primaryMarkAriaExtra}`

    const buttonProps = {
      ariaLabel,
      extraClass: 'axis-selector__button',
      isDisabled: isOrIsInArray({ arr: disabledSelection, k }),
      isSelected: isOrIsInArray({ arr: currentAxisSelection, k }),
      label,
      onClick: () => makeSelectionFn({
        currentAxisSelection,
        setCurrentAxisSelection,
      })(k),
      size: 'small',
    }

    const primaryMarkClass = isPrimaryMarked
      ? `axis-selector__primary--${align}`
      : null

    return (
      <li key={k} className={primaryMarkClass}>
        <Button {...buttonProps} />
      </li>
    )
  }

  return (
    <div className={axisSelectorClassNameList}>
      { React.createElement(`h${headingLevelStart}`, { children: axisSelectorHeading, className: 'axis-selector__heading' }) }
      <ul className={axisSelectorClassNameList}>
        { defineDurationOptions
          && (
            <>
              <li>
                { React.createElement(`h${headingLevelStart + 1}`, { children: 'Durations' }) }
              </li>
              { DURATION_MAP.map(([k, _]) => makeButton({ k })) }
              <li>
                <hr className='axis-selector__break-line' />
              </li>
              <li>
                { React.createElement(`h${headingLevelStart + 1}`, { children: 'Single measures' }) }
              </li>
            </>
          )
        }
        { axisOptions.map(([k, _]) => makeButton({ k })) }
      </ul>
    </div>
  )
}

AxisSelector.defaultProps = {
  align: 'left',
  axisOptions: USER_FACING_SET,
  axis: 'x',
  headingLevelStart: 2,
  defineDurationOptions: false,
  showDurationOptions: true,
}

AxisSelector.propTypes = {
  align: AlignPropType,
  axis: AxisPropType,
  currentAxisSelection: CurrentAxisSelectionPropType,
  defineDurationOptions: PropTypes.bool,
  disabledSelection: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  headingLevelStart: HeadingLevelStartPropType,
  primaryMark: ClinicalResponsePropType,
  setCurrentAxisSelection: PropTypes.func,
  showDurationOptions: PropTypes.bool,
}

export default AxisSelector
