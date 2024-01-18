const urlSlug = 'Gantt'

export default describe(`${urlSlug} - `, () => {
  it('visits Interactive Gantt', () => {
    cy.visit(urlSlug)
    cy.contains('Interactive Gantt').click()
  })
})