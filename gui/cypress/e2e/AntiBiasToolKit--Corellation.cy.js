const urlSlug = 'AntiBiasToolKit'

export default describe(`${urlSlug} - `, () => {
  it('vists Biased correlation simulation', () => {
    cy.visit(urlSlug)
    cy.contains('Correlation sim.').click()
  })
})
