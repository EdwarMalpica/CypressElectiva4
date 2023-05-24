// Importa los fixtures
import validCredentials from '../fixtures/validCredentials.json';
import invalidCredentials from '../fixtures/invalidCredentials.json';

Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  cy.get(':nth-child(2) > .input').clear().type(username);
  cy.get(':nth-child(4) > .input').clear().type(password);
  cy.get(':nth-child(5) > .button').click();
});

describe('Inicio de sesión', () => {
  it('Inicia sesión con éxito utilizando credenciales válidas', () => {
    // Utiliza el fixture de credenciales válidas para iniciar sesión
    cy.fixture('validCredentials.json').then(credentials => {
      cy.login(credentials.username, credentials.password);
    });
  });

  it('No inicia sesión con credenciales inválidas', () => {
    // Utiliza el fixture de credenciales inválidas para intentar iniciar sesión
    cy.fixture('invalidCredentials.json').then(credentials => {
      cy.login(credentials.username, credentials.password);
    });
  });
});