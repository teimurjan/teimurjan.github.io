describe('Landing', () => {
  it('opens all sections', () => {
    cy.visit('/')

    cy.percySnapshot('Landing', { widths: [700, 1200] })
  })

  it('scrolls to an anchor section', () => {
    cy.visit('/#media')

    cy.get('#media ~ h2').should('be.visible')
  })
})
