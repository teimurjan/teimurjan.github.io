describe('Landing Page', () => {
  it('opens all sections', () => {
    cy.visit('/')

    // all the images are loaded
    cy.get('img[data-placeholder-image]').should('not.be.visible')
    // swiper is initialized
    cy.get('.swiper-initialized[data-breakpoint]').should('be.visible')

    cy.percySnapshot('Landing Page', { widths: [700, 1200] })
  })

  it('scrolls to an anchor section', () => {
    cy.visit('/#media')

    cy.get('#media ~ h2').should('be.visible')
  })
})
