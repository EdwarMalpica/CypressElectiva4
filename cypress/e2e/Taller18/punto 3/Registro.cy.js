import validRegistration from '../fixtures/validRegistration1.json';
import invalidRegistration from '../fixtures/invalidRegistration1.json';

describe('Registro de usuario', () => {
  it('Registra un usuario exitosamente con datos válidos', () => {
    cy.completeRegistration(
      validRegistration.firstName,
      validRegistration.lastName,
      validRegistration.address,
      validRegistration.city,
      validRegistration.state,
      validRegistration.zipCode,
      validRegistration.phoneNumber,
      validRegistration.ssn,
      validRegistration.username,
      validRegistration.password
    );
  });

  it('Muestra mensajes de error al ingresar datos inválidos', () => {
    cy.completeRegistration(
      invalidRegistration.firstName,
      invalidRegistration.lastName,
      invalidRegistration.address,
      invalidRegistration.city,
      invalidRegistration.state,
      invalidRegistration.zipCode,
      invalidRegistration.phoneNumber,
      invalidRegistration.ssn,
      invalidRegistration.username,
      invalidRegistration.password
    );
  });
});