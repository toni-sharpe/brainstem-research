import React from 'react'

import KeyHintLetterPropType from 'prop-types/KeyHintLetter.prop-type'
import KeyHintPositionStylePropType from 'prop-types/KeyHintPositionStyle.prop-type'

import './KeyHint.scss'

function KeyHint({ letter, positionStyle }) {
  return (
    <div
      className={`js-key-hint-${letter} key-hint hide`}
      style={positionStyle}
    >
      <span>{letter}</span>
    </div>
  )
}

KeyHint.propTypes = {
  letter: KeyHintLetterPropType,
  positionStyle: KeyHintPositionStylePropType,
}

export default KeyHint;
