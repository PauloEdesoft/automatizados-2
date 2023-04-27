Cypress.on('uncaught:exception', (err, runnable) => { 
  // returning false here prevents Cypress from 
  // failing the test 
  return false 
})

describe('Login com Sucesso', () => {
  it('passes', () => {
    cy.visit('http://192.168.0.13/unilabnote/homol/#!/operacao/Composicoes');
    cy.get('#login').type('uni\\ali_searahmg');
    cy.get('#password').type('1');
    cy.get('#mob-button-login').click()
  })
})

describe('AL-SEA - Pesquisa Por Data', () => {
  it('passes', () => {
    cy.visit('http://192.168.0.13/unilabnote/homol/#!/operacao/Composicoes');
    cy.get('#login').type('uni\\ali_searahmg');
    cy.get('#password').type('1');
    cy.get('#mob-button-login').click();
    cy.get(':nth-child(1) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get('.child-item-search > .k-primary').click()
  })
})