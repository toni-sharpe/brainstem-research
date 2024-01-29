import { DRAG_GRAPH_MIN_TO_MAX_MULTIPLIER } from 'util/Constant/BaseConstantList'

export function isFullMax({ max = Math.infinity, v = 0 } = {}) {
  return v === max
}
export function isWithinMultiplier({ min, v }) {
  return v <= min * DRAG_GRAPH_MIN_TO_MAX_MULTIPLIER
}
