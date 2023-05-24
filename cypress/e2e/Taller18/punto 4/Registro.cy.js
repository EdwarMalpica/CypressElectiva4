describe('Registro de usuario', () => {
  it('Completa el registro con éxito', () => {
    cy.intercept('POST', '/parabank/register.htm', (req) => {
      req.reply({
        status: 200,
        body: {
          success: true,
          message: 'Registro exitoso',
          customerId: '1234'
        }
      });
    }).as('registrationRequest');

    cy.completeRegistration('Nombre Ingreso', 'Last Name', 'Address', 'City', 'Texas', '121212', '3208764567', '12334543', 'diegof08', 'diegof08');
  });
});