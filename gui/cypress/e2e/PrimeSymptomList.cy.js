const urlSlug = 'PrimeSymptomList'

export default describe(`${urlSlug} - `, () => {
  it('visits', () => {
    cy.visit(urlSlug)
  })
})