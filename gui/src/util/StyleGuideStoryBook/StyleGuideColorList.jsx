import React from 'react'

function StyleGuideColorList() {
  return (
    <section className='style-guide style-guide__color column-layout space-children--column'>
      <h3>Colours</h3>
      <ol className='column-layout space-children--column'>
        <li><h4>Blue</h4></li>
        <li>
          <ol className='row-layout space-children'>
            <li className='style-guide__color-block blue--dark' />
            <li className='style-guide__color-block blue' />
            <li className='style-guide__color-block blue--light' />
          </ol>
        </li>
      </ol>
      <ol className='column-layout space-children--column'>
        <li><h4>Red</h4></li>
        <li>
          <ol className='row-layout space-children'>
            <li className='style-guide__color-block red--black' />
            <li className='style-guide__color-block red--dark' />
            <li className='style-guide__color-block red--medium' />
            <li className='style-guide__color-block red--dulled-light' />
            <li className='style-guide__color-block red--light' />
            <li className='style-guide__color-block red--very-light' />
          </ol>
        </li>
      </ol>
      <ol className='column-layout space-children--column'>
        <li><h4>Orange</h4></li>
        <li>
          <ol className='row-layout space-children'>
            <li className='style-guide__color-block orange--dark' />
            <li className='style-guide__color-block orange' />
            <li className='style-guide__color-block orange--light' />
          </ol>
        </li>
      </ol>
      <ol className='column-layout space-children--column'>
        <li><h4>Green</h4></li>
        <li>
          <ol className='row-layout space-children'>
            <li className='style-guide__color-block green--dark' />
            <li className='style-guide__color-block green' />
          </ol>
        </li>
      </ol>
      <ol className='column-layout space-children--column'>
        <li><h4>Menu</h4></li>
        <li>
          <ol className='row-layout space-children'>
            <li className='style-guide__color-block menu--green' />
            <li className='style-guide__color-block menu--green-hover' />
          </ol>
        </li>
      </ol>
      <ol className='column-layout space-children--column'>
        <li><h4>Grey</h4></li>
        <li>
          <ol className='row-layout space-children'>
            <li className='style-guide__color-block black' />
            <li className='style-guide__color-block grey--black' />
            <li className='style-guide__color-block grey--dark' />
            <li className='style-guide__color-block grey--dull-dark' />
            <li className='style-guide__color-block grey--light' />
            <li className='style-guide__color-block grey--very-light' />
            <li className='style-guide__color-block grey--lightest' />
            <li className='style-guide__color-block grey--white' />
          </ol>
        </li>
      </ol>
    </section>
  )
}

export default StyleGuideColorList
