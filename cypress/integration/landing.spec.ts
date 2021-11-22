describe('Landing Page', () => {
  it('opens all sections', () => {
    cy.visit('/')

    // page is rendered
    cy.findByText('Experience').should('be.visible')
    // swiper needs some time to initialize
    cy.wait(500)

    cy.percySnapshot('Landing Page', { widths: [700, 1200] })
  })

  it('scrolls to an anchor section', () => {
    cy.visit('/#media')

    cy.get('#media ~ h2').should('be.visible')
  })
})
