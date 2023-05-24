describe('Ejemplo de métodos de localizadores en Cypress', () => {
  it('Utiliza métodos de localizadores', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    // Selecciona el enlace "Register" utilizando el método find() en lugar de encadenar selectores
    cy.get('#loginPanel').find('a').last().click();

    // Ingresa los datos del formulario de registro utilizando el método parent() para seleccionar el contenedor del input
    cy.get('#customer\\.firstName').type('Diego');
    cy.get('#customer\\.lastName').type('Fernando');
    cy.get('#customer\\.address\\.street').type('Calle 123');
    cy.get('#customer\\.address\\.city').type('Buenos Aires');
    cy.get('#customer\\.address\\.state').type('Buenos Aires');
    cy.get('#customer\\.address\\.zipCode').type('1234');
    cy.get('#customer\\.phoneNumber').type('011-12345678');
    cy.get('#customer\\.username').type('diego123');
    cy.get('#customer\\.password').type('password123');
    cy.get('#repeatedPassword').type('password123');
    cy.get('#customer\\.ssn').type('123-45-6789');

    // Envía el formulario utilizando el método submit() en lugar de hacer click en el botón
    cy.get('input[type="submit"][value="Register"]').click()

    // Selecciona algunos enlaces del menú utilizando el método filter() para seleccionar por texto parcial
    cy.get('#leftPanel a').filter(':contains("Overview")').click();
    cy.get('#leftPanel a').filter(':contains("Bill Pay")').click();
    cy.get('#leftPanel a').filter(':contains("Find Transactions")').click();
    cy.get('#leftPanel a').filter(':contains("Update Contact Info")').click();
  });
});