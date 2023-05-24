
describe('Prueba login - Parabank',()=>{
    beforeEach(()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    });

    it('Campos Vacios de usuario y password',()=>{
        cy.get(':nth-child(5) > .button').click();
        cy.get('.error').should('have.text','Please enter a username and password.');
    });
    it.only('Camino Feliz',()=>{
        cy.get(':nth-child(2) > .input').type('edyedNotch');
        cy.get(':nth-child(4) > .input').type('Prueba123');
        cy.get(':nth-child(5) > .button').click();
        cy.get('.ng-scope > :nth-child(1) > .ng-binding').should('have.text','13788');
    });
})