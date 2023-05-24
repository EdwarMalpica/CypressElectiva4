//Taller Sesion 17

describe('template spec', () => {
  it('Test Proyecto', () => {
    //Ingresar usuario, es posible que no funcione debido a que la pagina no almacena los registros
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get(':nth-child(2) > .input').type('Edwar')
    cy.get(':nth-child(4) > .input').type('edwarUptc123')
    cy.get(':nth-child(5) > .button').click()
    cy.get('#leftPanel > ul > :nth-child(1) > a').click()
    
    cy.get('#leftPanel > ul > :nth-child(1) > a').click();
    cy.get('#type').select('1');
    cy.get('form.ng-valid > div > .button').click();
   

    //Abrir cuenta
    cy.get('.ng-submitted > div > .button').click();
    cy.get('#leftPanel > ul > :nth-child(2) > a').click();
    cy.get(':nth-child(1) > :nth-child(1) > .ng-binding').click();
    cy.get('#month').select('April');
    cy.get(':nth-child(3) > :nth-child(2) > .button').click();
  
    cy.get('#leftPanel > ul > :nth-child(4) > a').click();
    cy.get('input[name="payee.phoneNumber"]').type('1234567890');

    
    cy.get(':nth-child(1) > [width="20%"] > .input').clear('Payee Name');
    cy.get(':nth-child(1) > [width="20%"] > .input').type('Payee Name');
    cy.get(':nth-child(2) > [width="20%"] > .input').clear('as');
    cy.get(':nth-child(2) > [width="20%"] > .input').type('asas');
    cy.get(':nth-child(3) > [width="20%"] > .input').clear('as');
    cy.get(':nth-child(3) > [width="20%"] > .input').type('asas');
    cy.get(':nth-child(4) > [width="20%"] > .input').clear('as');
    cy.get(':nth-child(4) > [width="20%"] > .input').type('asasas');
    cy.get(':nth-child(5) > [width="20%"] > .input').clear('123');
    cy.get(':nth-child(5) > [width="20%"] > .input').type('1233434');
    cy.get(':nth-child(8) > :nth-child(2) > .input').clear('42870');
    cy.get(':nth-child(8) > :nth-child(2) > .input').type('42870');
    cy.get(':nth-child(9) > [width="20%"] > .input').click();
    cy.get('tbody > :nth-child(8)').click();
    cy.get(':nth-child(8) > :nth-child(2) > .input').clear();
    cy.get(':nth-child(8) > :nth-child(2) > .input').type('13899');
    cy.get(':nth-child(9) > [width="20%"]').click();
    cy.get(':nth-child(9) > [width="20%"] > .input').clear('1');
    cy.get(':nth-child(9) > [width="20%"] > .input').type('13899');
    cy.get(':nth-child(11) > [width="20%"] > .input').clear('12');
    cy.get(':nth-child(11) > [width="20%"] > .input').type('1212');
    cy.get(':nth-child(13) > :nth-child(2) > .input').select('13788');
    cy.get(':nth-child(14) > :nth-child(2) > .button').click();

    cy.get('#leftPanel > ul > :nth-child(3) > a').click();
    cy.get('#leftPanel > ul > :nth-child(5) > a').click();
    cy.get('#criteria\\.transactionId').clear('1');
    cy.get('#criteria\\.transactionId').type('13899');
    cy.get(':nth-child(5) > .button').click();
    cy.get('#leftPanel > ul > :nth-child(5) > a').click();
    cy.get('#criteria\\.onDate').clear('2');
    cy.get('#criteria\\.onDate').type('04-27-2023');
    cy.get(':nth-child(9) > .button').click();
    cy.get('#leftPanel > ul > :nth-child(5) > a').click();
    cy.get('#criteria\\.fromDate').clear('0');
    cy.get('#criteria\\.fromDate').type('04-26-2023');
    cy.get('#criteria\\.toDate').clear('0');
    cy.get('#criteria\\.toDate').type('04-28-2023');
    cy.get(':nth-child(13) > .button').click();
    cy.get('#leftPanel > ul > :nth-child(5) > a').click();
    cy.get('#criteria\\.amount').clear('1');
    cy.get('#criteria\\.amount').type('13899');
    cy.get(':nth-child(17) > .button').click();
    //Encontrar transacciones
    cy.get('#leftPanel > ul > :nth-child(7) > a').click();
    cy.get('#amount').clear('23');
    cy.get('#amount').type('232123');
    cy.get('#downPayment').clear('213');
    cy.get('#downPayment').type('2132132');
    cy.get('[colspan="2"] > .button').click();

  })
  
})