Cypress.Commands.add('completeRegistration', (firstName, lastName, address, city, state, zipCode, phoneNumber, ssn, username, password) => {
  cy.visit('https://parabank.parasoft.com/parabank/index.htm');
  cy.get('#loginPanel > :nth-child(3) > a').click();
  cy.get('#customer\\.firstName').clear().type(firstName);
  cy.get('#customer\\.lastName').clear().type(lastName);
  cy.get('#customer\\.address\\.street').clear().type(address);
  cy.get('#customer\\.address\\.city').clear().type(city);
  cy.get('#customer\\.address\\.state').clear().type(state);
  cy.get('#customer\\.address\\.zipCode').clear().type(zipCode);
  cy.get('#customer\\.phoneNumber').clear().type(phoneNumber);
  cy.get('#customer\\.ssn').clear().type(ssn);
  cy.get('#customer\\.username').clear().type(username);
  cy.get('#customer\\.password').clear().type(password);
  cy.get('#repeatedPassword').clear().type(password);
  cy.get('[colspan="2"] > .button').click();
});

describe('template spec', () => {
  it('passes', () => {
    cy.completeRegistration('Nombre Ingreso', 'Last Name', 'Address', 'City', 'Texas', '121212', '3208764567', '12334543', 'diegof08', 'diegof08');
  });
});