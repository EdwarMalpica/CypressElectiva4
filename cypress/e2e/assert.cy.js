
describe('ASSERTIONS DEMO', () => {
  beforeEach(()=>{
    cy.visit('https://demoqa.com/radio-button')
  });
  it('TDD ASSERTIONS', () => {
    cy.log('LENGTH CHECK');
    cy.get('input[type ="radio"]').should('have.lenght',3);
  });
});