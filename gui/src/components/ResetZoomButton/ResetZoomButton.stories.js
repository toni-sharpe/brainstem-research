// ResetZoomButton.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import ResetZoomButton from './ResetZoomButton';

export default {
  component: ResetZoomButton,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper info='The button is either grey and disabled when zoom is default, or a red X reset when it is resetable'>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseResetZoomButtonProps = {
  extraStateFn: () => {},
  graphOffset: [0, 0],
  setGraphOffset: () => {},
  setZoom:  () => {},
  buttonSize: 'medium',
  zDefault: 1,
  zoom: 1,
}

export const ZoomIsAtDefaultNoReset = {
  render: () => {
    return (
      <ResetZoomButton
        {...baseResetZoomButtonProps}
      />
    )
  }
};

export const ZoomNotAtDefaultSoReset = {
  render: () => {
    const props = {
      ...baseResetZoomButtonProps,
      zoom: 2,
    }
    return (
      <ResetZoomButton
        {...props}
      />
    )
  }
};
