const urlSlug = 'TimeLine'

export default describe(`${urlSlug} - `, () => {
  it('visits full page', () => {
    cy.visit(urlSlug)
  })
})