const urlSlug = 'TimeLineStatChart'

export default describe(`${urlSlug} - `, () => {
  it('visits General TimeLine StatChart', () => {
    cy.visit(urlSlug)
    cy.contains('General clinical time line').click()
  })
})