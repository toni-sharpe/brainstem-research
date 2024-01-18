const urlSlug = 'Gantt'

export default describe(`${urlSlug} - `, () => {
  it('visits Pathogenesis Gantt', () => {
    cy.visit(urlSlug)
    cy.contains('Pathogenesis Gantt').click()
  })
})