// MonthBlock.story.js
import StoryBookPaddedWrapper from 'components/StoryBookPaddedWrapper/StoryBookPaddedWrapper'


import MonthBlock from './MonthBlock';

export default {
  component: MonthBlock,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper isScreenWidth>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
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

    const noText =           { ...baseMonthBlockProps, colorVal: '201' }
    const lightProps =       { ...baseMonthBlockProps, colorVal: '201', monthText: 'Light' }
    const mediumProps =      { ...baseMonthBlockProps, colorVal: '161', monthText: 'Medium' }
    const heavyProps =       { ...baseMonthBlockProps, colorVal: '121', monthText: 'Heavy' }
    const veryHeavyProps =   { ...baseMonthBlockProps, colorVal:  '81', monthText: 'Very Heavy' }
    const exceptionalProps = { ...baseMonthBlockProps, colorVal:  '41', monthText: 'Exceptional' }
    const frighteningProps = { ...baseMonthBlockProps, colorVal:   '0', monthText: 'Frightening' }

    return (
      <div className='column-layout space-children--wide-column'>
        <div className='row-layout space-children--wide'>
          <MonthBlock {...futureProps} />
          <MonthBlock {...thisMonthProps} />
        </div>
        <div className='row-layout space-children--wide'>
          <MonthBlock {...janProps} />
          <MonthBlock {...defaultYearProps} />
          <MonthBlock {...janClassProps} />
          <MonthBlock {...janColorProps} />
          <MonthBlock {...eventFreeProps} />
          <MonthBlock {...noText} />
        </div>
        <div className='row-layout space-children--wide'>
          <MonthBlock {...lightProps} />
          <MonthBlock {...mediumProps} />
          <MonthBlock {...heavyProps} />
          <MonthBlock {...veryHeavyProps} />
          <MonthBlock {...exceptionalProps} />
          <MonthBlock {...frighteningProps} />
        </div>
      </div>
    )
  }
};

