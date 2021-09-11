/// <reference types="cypress" />
// we test user STORIES

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('Diaplay a character card', () => {
    // https://on.cypress.io/type
    cy.get('[data-cy=link-character-card-${people.id}]').click()
 
  })
})
