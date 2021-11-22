describe('Landing Page', () => {
  it('opens all sections', () => {
    cy.visit('/')

    cy.get('img[data-placeholder-image]').should('not.be.visible')

    cy.percySnapshot('Landing Page', { widths: [700, 1200] })
  })

  it('scrolls to an anchor section', () => {
    cy.visit('/#media')

    cy.get('#media ~ h2').should('be.visible')
  })
})
