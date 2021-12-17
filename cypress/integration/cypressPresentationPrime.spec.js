// cypressPresentationPrime.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Prime Digital Academy Basic Functionality Testing', function () {
    it('Validates Prime Digital Academy webpage', function () {
        cy.visit('https://www.primeacademy.io/')
        cy.get('hs-menu-item hs-menu-depth-1 hs-item-has-children')
  .should('have.value', 'FULL STACK ENGINEERING')
    })
    });
