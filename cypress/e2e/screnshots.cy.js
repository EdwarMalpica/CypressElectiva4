
describe('ASSERTIONS DEMO', () => {
  beforeEach(()=>{
    cy.visit('https://www.demoblaze.com/');
  });
  it.only('Screenshots', () => {
    cy.log('Tomar captura pantalla');
    cy.screenshot('Pantalla inicial');
  });

  it.only('Screenshots Login', () => {
    cy.log('Tomar captura pantalla login');
    cy.get('#login2').click();
    cy.wait(2000);
    cy.get('#loginusername').type('edwar');
    cy.get('#loginpassword').type('edwar123');
    cy.wait(500);

    cy.screenshot('Pantalla login',{blackout:['#loginusername'],capture:'viewport'});
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(2000);
    cy.screenshot('Pantalla login succces');

  });
});