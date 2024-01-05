const urlSlug = 'CorrelationHeatmap'

export default describe(`${urlSlug} - `, () => {
  it('visits CorrelationHeatmap', () => {
    cy.visit(urlSlug)
  })
})