import { PRIME_SYMPTOM_MINIMUM_COUNT } from 'util/Constant/BaseConstantList'

function onClickHandler({
  currentDisplayedDataPoints,
  minimumAllowed = PRIME_SYMPTOM_MINIMUM_COUNT,
  setCurrentDisplayedDataPoints,
  totalAvailableDataPoints,
}) {
  return function({ pointChange }) {
    let newPoints = currentDisplayedDataPoints + pointChange

    if (newPoints < minimumAllowed)
      newPoints = minimumAllowed
    if (newPoints > totalAvailableDataPoints)
      newPoints = totalAvailableDataPoints

    setCurrentDisplayedDataPoints(newPoints)
  }
}

export default onClickHandler
