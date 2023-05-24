describe('Inicio de sesión', () => {
  it('Inicia sesión con éxito', () => {
    cy.intercept('POST', '/parabank/login.htm', (req) => {
      req.reply({
        status: 200,
        body: {
          success: true,
          message: 'Inicio de sesión exitoso',
          token: 'abcd1234'
        }
      });
    }).as('loginRequest');

    cy.login('fernando04', 'fernando04');


  });
});

