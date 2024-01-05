const urlSlug = 'HistogramMaker'

export default describe(`${urlSlug} - `, () => {
  it('visits', () => {
    cy.visit(urlSlug)
  })
})