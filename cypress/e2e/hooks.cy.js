//Hooks de moka, setear condiciones

/**
 * 1.Before, Una vez al principio 
 * 2. Beforeeach -> antes de cada text
 * Test Execution
 * 3. AfterEach -> Despues de cada test
 *  beforeEach
 * 4. after() -> Una vez al final
 * 3. 
 *
 */

describe('Demo de hooks',()=>{

    before(()=>{
        cy.log('Before');
    });
    beforeEach(()=>{
        cy.log('BeforeEach');
    });

    it('should be text #1',()=>{
        console.log('Test #1');
    });
    it('should be text #2',()=>{
        console.log('Test #2');
    });
    it('should be text #3',()=>{
        console.log('Test #3');
    });

    afterEach(()=>{
        cy.log('AfterEach');
    })
    after(()=>{
        cy.log('After');
    })
});