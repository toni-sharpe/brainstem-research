import React from 'react'

import './StyleGuideStoryBook.scss'

function StyleGuideStoryBook() {
  return (
    <section className='column-layout space-children--wide-column style-guide'>
      <h2>Colours</h2>
      <ol className='row-layout space-children style-guide__color-list'>
        <li className='style-guide__color-block style-guide__blue--dark' />
        <li className='style-guide__color-block style-guide__blue' />
        <li className='style-guide__color-block style-guide__blue--light' />
        <li className='style-guide__color-block style-guide__red--black' />
        <li className='style-guide__color-block style-guide__red--dark' />
        <li className='style-guide__color-block style-guide__red--medium' />
        <li className='style-guide__color-block style-guide__red--dulled-light' />
        <li className='style-guide__color-block style-guide__red--light' />
        <li className='style-guide__color-block style-guide__red--very-light' />
        <li className='style-guide__color-block style-guide__green--dark' />
        <li className='style-guide__color-block style-guide__green' />
        <li className='style-guide__color-block style-guide__orange--dark' />
        <li className='style-guide__color-block style-guide__orange' />
        <li className='style-guide__color-block style-guide__orange--light' />
        <li className='style-guide__color-block style-guide__black' />
        <li className='style-guide__color-block style-guide__grey--black' />
        <li className='style-guide__color-block style-guide__grey--dark' />
        <li className='style-guide__color-block style-guide__grey--dull-dark' />
        <li className='style-guide__color-block style-guide__grey--light' />
        <li className='style-guide__color-block style-guide__grey--very-light' />
        <li className='style-guide__color-block style-guide__grey--lightest' />
        <li className='style-guide__color-block style-guide__grey--white' />
      </ol>
    </section>

  )
}

export default StyleGuideStoryBook
