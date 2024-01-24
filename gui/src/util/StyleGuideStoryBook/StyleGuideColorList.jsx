import React from 'react'

function StyleGuideColorList() {
  return (
    <section className='style-guide style-guide__color column-layout space-children--column'>
      <h3>Colours</h3>
      <ol className='column-layout space-children--column'>
        <li><h4>Blue</h4></li>
        <li>
          <ol className='row-layout space-children'>
            <li className='style-guide__color-block style-guide__blue--dark' />
            <li className='style-guide__color-block style-guide__blue' />
            <li className='style-guide__color-block style-guide__blue--light' />
          </ol>
        </li>
      </ol>
      <ol className='column-layout space-children--column'>
        <li><h4>Red</h4></li>
        <li>
          <ol className='row-layout space-children'>
            <li className='style-guide__color-block style-guide__red--black' />
            <li className='style-guide__color-block style-guide__red--dark' />
            <li className='style-guide__color-block style-guide__red--medium' />
            <li className='style-guide__color-block style-guide__red--dulled-light' />
            <li className='style-guide__color-block style-guide__red--light' />
            <li className='style-guide__color-block style-guide__red--very-light' />
          </ol>
        </li>
      </ol>
      <ol className='column-layout space-children--column'>
        <li><h4>Orange</h4></li>
        <li>
          <ol className='row-layout space-children'>
            <li className='style-guide__color-block style-guide__orange--dark' />
            <li className='style-guide__color-block style-guide__orange' />
            <li className='style-guide__color-block style-guide__orange--light' />
          </ol>
        </li>
      </ol>
      <ol className='column-layout space-children--column'>
        <li><h4>Green</h4></li>
        <li>
          <ol className='row-layout space-children'>
            <li className='style-guide__color-block style-guide__green--dark' />
            <li className='style-guide__color-block style-guide__green' />
          </ol>
        </li>
      </ol>
      <ol className='column-layout space-children--column'>
        <li><h4>Grey</h4></li>
        <li>
          <ol className='row-layout space-children'>
            <li className='style-guide__color-block style-guide__black' />
            <li className='style-guide__color-block style-guide__grey--black' />
            <li className='style-guide__color-block style-guide__grey--dark' />
            <li className='style-guide__color-block style-guide__grey--dull-dark' />
            <li className='style-guide__color-block style-guide__grey--light' />
            <li className='style-guide__color-block style-guide__grey--very-light' />
            <li className='style-guide__color-block style-guide__grey--lightest' />
            <li className='style-guide__color-block style-guide__grey--white' />
          </ol>
        </li>
      </ol>
    </section>
  )
}

export default StyleGuideColorList
