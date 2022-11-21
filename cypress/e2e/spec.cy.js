/// <reference types="cypress" />
describe('page', () => {
  for (let index = 0; index < 12; index++) {
    it(`test ${index + 1}`, () => {
      for (let index = 0; index < 10; index++) {
        cy.visit('https://earth.google.com/web/')
      }
    })
  }
})
