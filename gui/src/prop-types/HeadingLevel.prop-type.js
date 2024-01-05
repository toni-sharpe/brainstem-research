import PropTypes from 'prop-types'

export const HeadingLevelPropType = PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
export const HeadingLevelStartPropType = PropTypes.oneOf([1, 2, 3, 5, 6])

export default HeadingLevelPropType
