const urlSlug = 'Gantt'

export default describe(`${urlSlug} - `, () => {
  it('visits', () => {
    cy.visit(urlSlug)
  })
})