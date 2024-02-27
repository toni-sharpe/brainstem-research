import React from 'react'

import { boolean, number } from '@storybook/addon-knobs'
import PropTypes from 'prop-types'

import CopyButton from '../../components/copy-button/copy-button'
import { storyBackgroundStyles } from '../../lib/css-utils/storybook'
import DarkThemeProvider from '../../theme/dark-theme-provider'
import ThemeProvider from '../../theme/provider'

const StorybookDomContainerDOM = ({
  backgroundColor,
  children,
  copy,
  height,
  propTypes,
  showEdge,
  title,
  width,
  withPadding,
}) => {
  const componentEdge = boolean('Show component edge', showEdge)
  const darkTheme = boolean('Dark theme', false)

  const containerWidth = number('Container width', width, {
    range: true,
    min: 1,
    max: 3000,
    step: 1,
  })

  const containerHeight = height
    ? number('Container height', height, {
      range: true,
      min: 1,
      max: 3000,
      step: 1,
    })
    : 'auto'

  const container = (
    <div style={storyBackgroundStyles(darkTheme)}>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          width: containerWidth,
        }}
      >
        { title && <h3 style={{ fontSize: '16px', fontWeight: 'normal', marginTop: 0, marginBottom: '10px' }}>{title}</h3> }
        { copy && <CopyButton copyValue={title} />}
      </div>
      <div style={{
        backgroundColor,
        boxShadow: componentEdge ? '0 0 2px 2px #ccc' : 'none',
        height: containerHeight,
        padding: withPadding ? '8px' : '0px',
        width: containerWidth,
      }}>
        {children}
      </div>
    </div>
  )

  return React.createElement(
    darkTheme ? DarkThemeProvider : ThemeProvider,
    { children: container },
  )
}

StorybookDomContainerDOM.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.any,
  copy: PropTypes.bool,
  height: PropTypes.number,
  propTypes: PropTypes.object,
  showEdge: PropTypes.bool,
  title: PropTypes.string,
  width: PropTypes.number,
  withPadding: PropTypes.bool,
}

StorybookDomContainerDOM.defaultProps = {
  copy: false,
  showEdge: false,
  width: 500,
  height: null,
}

export default StorybookDomContainerDOM

storybook-dom-container copy.txt
Displaying storybook-dom-container copy.txt.