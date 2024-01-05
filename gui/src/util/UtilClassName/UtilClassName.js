export function bemWithExtraClass({ bemBase, extraClass }) {
  return extraClass?.length
    ? `${bemBase} ${bemBase}--${extraClass}`
    : bemBase
}
