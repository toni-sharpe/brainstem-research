import { type } from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'

import ElementTypePropType from 'prop-types/ElementType.prop-type'
import NumberOrStringPropType from 'prop-types/NumberOrString.prop-type'

import './StoryBookPaddedWrapper.scss'

function StoryBookPaddedWrapper({
  children,
  elementType,
  forceAbsolute,
  heading,
  height,
  info,
  isScreenWidth,
  padding,
  wrapperElem,
  wrapperElemProps,
  widthSetTo100,
}) {
  const width = isScreenWidth || widthSetTo100 || elementType === 'screen'
    ? '100%'
    : 'auto'

  return (
    <article
      className='story-book-padded-wrapper'
      style={{
        padding,
        width,
      }}
    >
      { (
          elementType !== 'component'
          ||
          widthSetTo100
          ||
          info
        )
        &&
        (
          <header>
            { heading && (
              <h2 className='story-book-padded-wrapper__heading'>
                {heading}
              </h2>
            ) }
            { widthSetTo100 && (
              <span className='story-book-padded-wrapper__heading'>
                Width has been set to 100% in order to show this component
              </span>
            ) }
            { info && (
              <span className='story-book-padded-wrapper__heading'>
                {info}
              </span>
            ) }
          </header>
        )
      }
      <section
        className='story-book-padded-wrapper__main'
        style={{
          height,
          position: forceAbsolute ? 'absolute' : undefined,
          width,
        }}
      >
        {
          wrapperElem
            ? React.createElement(wrapperElem, wrapperElemProps, children)
            : children
        }
      </section>
    </article>
  )
}

StoryBookPaddedWrapper.defaultProps = {
  elementType: 'component',
  forceAbsolute: false,
  height: 'auto',
  isScreenWidth: false,
  padding: '4%',
  widthSetTo100: false,
  wrapperElemProps: {},
}

StoryBookPaddedWrapper.propTypes = {
  children: PropTypes.node,
  elementType: ElementTypePropType,
  forceAbsolute: PropTypes.bool, // there's always one
  heading: PropTypes.string,
  height: NumberOrStringPropType, // we need this for position: absolute, that takes the element out of the flow
                            // and therefore out of the height calculation.
  info: PropTypes.string,
  isScreenWidth: PropTypes.bool,
  padding: NumberOrStringPropType,
  widthSetTo100: PropTypes.bool, // set to 100% without implying its a screen
  wrapperElem: PropTypes.string, // sometimes things like li components need a ul as a wrapper, we can use this
  wrapperElemProps: PropTypes.object, // and the wrapper might need props
}

export default StoryBookPaddedWrapper
