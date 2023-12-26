// MonthBlock.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'
import MonthBlock from './MonthBlock';

export default {
  component: MonthBlock,
};

const baseMonthBlockProps = {
  children: null,
  colorVal: null,
  currentMonth: '03',
  currentYear: '2022',
  monthType: null,
}

export const BlocksTogether = {
  render: () => {
    const futureProps =    { ...baseMonthBlockProps, monthText: 'Future', monthType: 'future' }
    const janProps =       { ...baseMonthBlockProps, currentMonth: '01', monthType: 'event-free' }
    const janClassProps =  { ...baseMonthBlockProps, currentMonth: '01', monthText: 'Year start this month', monthType: 'this-month' }
    const janColorProps =  { ...baseMonthBlockProps, currentMonth: '01', colorVal:  '41', monthText: 'Year start badly' }
    const eventFreeProps = { ...baseMonthBlockProps, monthText: 'Event free', monthType: 'event-free' }
    const thisMonthProps = { ...baseMonthBlockProps, monthText: 'This Month', monthType: 'this-month' }
    const defaultYearProps = { ...baseMonthBlockProps, currentMonth: '01', currentYear: undefined, monthText: 'This year - uses default', monthType: 'event-free' }

    const noText     =       { ...baseMonthBlockProps, colorVal: '201' }
    const lightProps =       { ...baseMonthBlockProps, colorVal: '201', monthText: 'Light' }
    const mediumProps =      { ...baseMonthBlockProps, colorVal: '161', monthText: 'Medium' }
    const heavyProps =       { ...baseMonthBlockProps, colorVal: '121', monthText: 'Heavy' }
    const veryHeavyProps =   { ...baseMonthBlockProps, colorVal:  '81', monthText: 'Very Heavy' }
    const exceptionalProps = { ...baseMonthBlockProps, colorVal:  '41', monthText: 'Exceptional' }
    const frighteningProps = { ...baseMonthBlockProps, colorVal:   '0', monthText: 'Frightening' }

    return (
      <StoryBookPaddedWrapper>
        <div className='column-layout space-children--wide-column'>
          <ul className='row-layout space-children--wide'>
            <MonthBlock {...futureProps} />
            <MonthBlock {...janProps} />
            <MonthBlock {...defaultYearProps} />
            <MonthBlock {...janClassProps} />
            <MonthBlock {...janColorProps} />
            <MonthBlock {...eventFreeProps} />
            <MonthBlock {...thisMonthProps} />
          </ul>
          <ul className='row-layout space-children--wide'>
            <MonthBlock {...noText} />
            <MonthBlock {...lightProps} />
            <MonthBlock {...mediumProps} />
            <MonthBlock {...heavyProps} />
            <MonthBlock {...veryHeavyProps} />
            <MonthBlock {...exceptionalProps} />
            <MonthBlock {...frighteningProps} />
          </ul>
        </div>
      </StoryBookPaddedWrapper>
    )
  }
};

export const FutureBlock = {
  render: () => {
    const props = {
      ...baseMonthBlockProps,
      monthType: 'future',
    }
    return (
      <ul><MonthBlock {...props} /></ul>
    )
  }
};

export const EventFreeBlockShowsYearTagToo = {
  render: () => {
    const props = {
      ...baseMonthBlockProps,
      monthType: 'event-free',
      currentMonth: '01',
    }
    return (
      <ul><MonthBlock {...props} /></ul>
    )
  }
};

export const ThisMonth = {
  render: () => {
    const props = {
      ...baseMonthBlockProps,
      monthType: 'this-month',
    }
    return (
      <ul><MonthBlock {...props} /></ul>
    )
  }
};

export const LightBlock = {
  render: () => {
    const props = {
      ...baseMonthBlockProps,
      colorVal: '201',
    }
    return (
      <ul><MonthBlock {...props} /></ul>
    )
  }
};

export const MediumBlock = {
  render: () => {
    const props = {
      ...baseMonthBlockProps,
      colorVal: '161',
    }
    return (
      <ul><MonthBlock {...props} /></ul>
    )
  }
};

export const HeavyBlock = {
  render: () => {
    const props = {
      ...baseMonthBlockProps,
      colorVal: '121',
    }
    return (
      <ul><MonthBlock {...props} /></ul>
    )
  }
};

export const VeryHeavyBlock = {
  render: () => {
    const props = {
      ...baseMonthBlockProps,
      colorVal: '81',
    }
    return (
      <ul><MonthBlock {...props} /></ul>
    )
  }
};

export const ExceptionalBlock = {
  render: () => {
    const props = {
      ...baseMonthBlockProps,
      colorVal: '41',
    }
    return (
      <ul><MonthBlock {...props} /></ul>
    )
  }
};

export const FrighteningBlock = {
  render: () => {
    const props = {
      ...baseMonthBlockProps,
      colorVal: '0',
    }
    return (
      <ul><MonthBlock {...props} /></ul>
    )
  }
};
