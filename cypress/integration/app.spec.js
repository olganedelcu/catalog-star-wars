/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('[data-cy=btn-hello]')
      // Delay each keypress by 0.1 sec
      .click()
  })
})
