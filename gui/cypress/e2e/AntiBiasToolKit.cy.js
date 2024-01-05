const urlSlug = 'AntiBiasToolKit'

export default describe(`${urlSlug} - `, () => {
  it('visits', () => {
    cy.visit(urlSlug)
  })
})
