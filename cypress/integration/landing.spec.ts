const SMOOTH_SCROLL_TIME = 500

describe('Landing', () => {
  it('opens all sections', () => {
    cy.visit('/')

    cy.percySnapshot('Landing - initial state', { widths: [700, 1200] })

    cy.get('a[href="/#experience"]').click()
    cy.wait(SMOOTH_SCROLL_TIME)
    cy.percySnapshot('Landing - experience section', { widths: [700, 1200] })

    cy.get('a[href="/#education"]').click()
    cy.wait(SMOOTH_SCROLL_TIME)
    cy.percySnapshot('Landing - education section', { widths: [700, 1200] })

    cy.get('a[href="/#media"]').click()
    cy.wait(SMOOTH_SCROLL_TIME)
    cy.percySnapshot('Landing - media section', { widths: [700, 1200] })

    cy.scrollTo('bottom')
    cy.percySnapshot('Landing - footer', { widths: [700, 1200] })
  })

  it('scrolls to an anchor section', () => {
    cy.visit('/#media')

    cy.get('#media ~ h2').should('be.visible')
  })
})
