const waitAllImagesToLoad = () =>
  cy
    .get('img', { includeShadowDom: true })
    .filter('[src]')
    .filter(':visible')
    .should(($images) =>
      $images.map((_, image: HTMLImageElement) =>
        expect(image.naturalWidth).to.be.greaterThan(0)
      )
    )

describe('Landing Page', () => {
  it('opens all sections', () => {
    cy.visit('/')

    waitAllImagesToLoad()

    cy.percySnapshot('Landing Page', { widths: [700, 1200] })
  })

  it('scrolls to an anchor section', () => {
    cy.visit('/#media')

    cy.get('#media ~ h2').should('be.visible')
  })
})
