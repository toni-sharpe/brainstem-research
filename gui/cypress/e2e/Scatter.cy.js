const urlSlug = 'Scatter'

export default describe(`${urlSlug} - `, () => {
  it('visits', () => {
    cy.visit(urlSlug)
  })
})


