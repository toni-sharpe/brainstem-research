const urlSlug = 'AntiBiasToolKit'

export default describe(`${urlSlug} - `, () => {
  it('vists Biased judgement simulation', () => {
    cy.visit(urlSlug)
    cy.contains('Biased judgement simulation').click()
  })
})
