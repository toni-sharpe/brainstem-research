import i18next from 'util/i18next/i18next'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { concat, indexOf, remove, type } from 'ramda'

import AlignPropType from 'prop-types/Align.prop-type'
import AxisPropType from 'prop-types/Axis.prop-type'
import CurrentAxisSelectionPropType from 'prop-types/CurrentAxisSelection.prop-type'
import Button from 'components/Button/Button'
import MenuButton from 'components/MenuButton/MenuButton'
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
  hueFn,
  primaryMark,
  setCurrentAxisSelection,
  showDurationOptions,
}) {
  const [isOpen, setIsOpen] = useState(false)

  const axis = axs.toUpperCase()
  const axisOptions = showDurationOptions && !defineDurationOptions
    ? concat(axsOptions, DURATION_MAP)
    : axsOptions
  const hiddenBorderAligner = { borderRight: '24px solid var(--white)' }
  const openClass = isOpen ? 'open' : ''
  const axisSelectorClassNameList = `axis-selector column-layout space-children--column-wide ${align} ${openClass}`
  const axisSelectorHeading = i18next.t(`${i18nBase}.axis${axis}`)

  let selectedCount = 0

  function makeButton({ i, k }) {
    const isPrimaryMarked = primaryMark === k
    const abbrevLabel = i18next.t(`CommonClinicalResponses.${k}_abbrev`)
    const fullLabel = i18next.t(`CommonClinicalResponses.${k}`)
    const primaryMarkAriaExtra = isPrimaryMarked
      ? `, ${i18next.t(`${i18nBase}.primaryMark`)}`
      : ''
    const ariaLabel = `${fullLabel} ${i18next.t(`${i18nBase}.shownOn${axis}`)}${primaryMarkAriaExtra}`
    const isSelected = isOrIsInArray({ arr: currentAxisSelection, k })

    const primaryMarkClass = isPrimaryMarked
      ? `axis-selector__primary--${align}`
      : null

    const barColor =
      hueFn
        ? !isPrimaryMarked && isSelected
          ? {
              borderRight: `24px solid ${
                hueFn({
                  aLevel: 1,
                  i: selectedCount,
                  total: currentAxisSelection.length,
                })
              }`
          }
          : hiddenBorderAligner
        : null

    if (isSelected) {
      selectedCount++
    }

    const buttonProps = {
      ariaLabel,
      extraClass: 'axis-selector__button',
      isDisabled: isOrIsInArray({ arr: disabledSelection, k }),
      isPrimaryMarked,
      isSelected,
      label: abbrevLabel,
      onClick: () => makeSelectionFn({
        currentAxisSelection,
        setCurrentAxisSelection,
      })(k),
      size: 'small',
      style: barColor,
      title: fullLabel,
    }

    return (
      <li key={k} className={primaryMarkClass}>
        <Button {...buttonProps} />
      </li>
    )
  }

  return (
    <div
      aria-label={`axis selector for ${axisSelectorHeading}`}
      className={axisSelectorClassNameList}
      role='region'
    >
      { !isOpen && (
        <div className='axis-selector__open-button'>
          <MenuButton
            label={i18next.t(`${i18nBase}.open`)}
            onClick={() => setIsOpen(true)}
          />
        </div>
      ) }
      { isOpen && (
        <div className='axis-selector__close-button'>
          <MenuButton
            label='X'
            onClick={() => setIsOpen(false)}
            title={i18next.t(`${i18nBase}.close`)}
          />
        </div>
      ) }
      { React.createElement(
        `h${headingLevelStart}`, {
          children: axisSelectorHeading,
          className: 'axis-selector__heading',
          style: hueFn ? hiddenBorderAligner : null
        }
      ) }
      <ul className={`axis-selector__list column-layout space-children--column ${align}`}>
        { defineDurationOptions
          && (
            <>
              <li>
                { React.createElement(`h${headingLevelStart + 1}`, { children: 'Durations' }) }
              </li>
              { DURATION_MAP.map(([k, _], i) => makeButton({ i, k })) }
              <li>
                <hr className='axis-selector__break-line' />
              </li>
              <li>
                { React.createElement(`h${headingLevelStart + 1}`, { children: 'Single measures' }) }
              </li>
            </>
          )
        }
        { axisOptions.map(([k, _], i) => makeButton({ i, k })) }
      </ul>
    </div>
  )
}

AxisSelector.defaultProps = {
  align: 'left',
  axisOptions: USER_FACING_SET,
  axis: 'x',
  currentAxisSelection: [],
  headingLevelStart: 2,
  hueFn: null,
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
  hueFn: PropTypes.func,
  primaryMark: ClinicalResponsePropType,
  setCurrentAxisSelection: PropTypes.func,
  showDurationOptions: PropTypes.bool,
}

export default AxisSelector
