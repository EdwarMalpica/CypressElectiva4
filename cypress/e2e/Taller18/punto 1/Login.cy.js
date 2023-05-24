Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  cy.get(':nth-child(2) > .input').clear().type(username);
  cy.get(':nth-child(4) > .input').clear().type(password);
  cy.get(':nth-child(5) > .button').click();
});

describe('Inicio de sesión', () => {
  it('Inicia sesión con éxito', () => {
    cy.login('diegof08', 'diegof08');
    cy.url().should('include', '/overview.htm');
  });
});