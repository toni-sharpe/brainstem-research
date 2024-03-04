// PageDetailWrapper.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import ErrorOutput from 'components/ErrorOutput/ErrorOutput'
import StoryBookExampleBlock from 'components/StoryBookExampleBlock/StoryBookExampleBlock'
import { Primary } from 'sections/SecondaryNav/SecondaryNav.stories';

import PageDetailWrapper from './PageDetailWrapper';

export default {
  component: PageDetailWrapper,
};

export const HeadingOverridesWithSubHeading = {
  render: () => {
    return (
      <PageDetailWrapper
        count={190}
        heading='Demo page wrapper'
        i18nBase='Scatter'
        subHeading='This is a test sub-heading'
      >
        <StoryBookExampleBlock>
          Section 1
        </StoryBookExampleBlock>
        <StoryBookExampleBlock>
          Section 2
        </StoryBookExampleBlock>
      </PageDetailWrapper>
    )
  }
};

export const I18nVersionWithSecondaryNav = {
  render: () => {
    return (
      <PageDetailWrapper
        count={12456}
        i18nBase='Scatter'
        secondaryNav={Primary.render()}
      >
        <StoryBookExampleBlock>
          Section 1
        </StoryBookExampleBlock>
        <StoryBookExampleBlock>
          Section 2
        </StoryBookExampleBlock>
      </PageDetailWrapper>
    )
  }
};

export const SubHeadingAndSecondaryNav = {
  render: () => {
    return (
      <PageDetailWrapper
        count={10}
        heading='Demo page wrapper'
        subHeading='This is a test sub-heading'
        secondaryNav={Primary.render()}
      >
        <StoryBookExampleBlock>
          Section 1
        </StoryBookExampleBlock>
        <StoryBookExampleBlock>
          Section 2
        </StoryBookExampleBlock>
      </PageDetailWrapper>
    )
  }
};

export const WithExtraClass = {
  render: () => {
    return (
      <PageDetailWrapper
        count={10}
        extraClass='sb-page-detail-wrapper'
        heading='Demo page wrapper'
        subHeading='This is a test sub-heading'
        secondaryNav={Primary.render()}
      >
        <StoryBookExampleBlock>
          Section 1
        </StoryBookExampleBlock>
        <StoryBookExampleBlock>
          Section 2
        </StoryBookExampleBlock>
      </PageDetailWrapper>
    )
  }
};

export const ErrorsIfNeitherHeadingNorI18nProvided = {
  render: () => {
    return (
      <PageDetailWrapper>
        <StoryBookExampleBlock>
          <ErrorOutput message='SEE CONSOLE FOR ERROR' />
        </StoryBookExampleBlock>
      </PageDetailWrapper>
    )
  }
};
