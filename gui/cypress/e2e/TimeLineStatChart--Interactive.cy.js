const urlSlug = 'TimeLineStatChart'

export default describe(`${urlSlug} - `, () => {
  it('visits Interactive TimeLine StatChart', () => {
    cy.visit(urlSlug)
    cy.contains('Interactive time line').click()
  })
})