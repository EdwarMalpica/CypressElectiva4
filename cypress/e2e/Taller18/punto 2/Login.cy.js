describe('Ejemplo de métodos de localizadores en Cypress', () => {
  it('Utiliza métodos de localizadores', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm');

    // Utiliza el método get() para seleccionar el elemento de nombre de usuario
    cy.get('input[name="username"]').type('diego1234');
    cy.get('input[name="password"]').type('diego1234');

    // Utiliza el método get() para seleccionar el botón de inicio de sesión y hacer clic en él
    cy.get(':nth-child(5) > .button').click();

    // Utiliza el método find() para buscar el enlace de la página "Open New Account" dentro del panel izquierdo
    cy.get('#leftPanel')
      .find('a')
      .contains('Open New Account')
      .click();

    // Utiliza el método last() para seleccionar el último enlace del panel izquierdo
    cy.get('#leftPanel')
      .find('a')
      .last()
      .should('have.text', 'Log Out');

    // Utiliza el método parent() para seleccionar el elemento padre del botón "Log Out" y hacer clic en él
    cy.get('#leftPanel')
      .find('a')
      .contains('Log Out')
      .parent()
      .click();
  });
});