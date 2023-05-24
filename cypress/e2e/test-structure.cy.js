
let sum = (a,b)=> a+b;
let subtract = (a,b)=> a-b;
let divide = (a,b)=> a/b;
let multiply = (a,b)=> a*b;


describe('Unit testing for our dummy',()=>{
    context('Math with POsitive numbers',()=>{
        it('should add positive numbers',()=>{
            expect(sum(1,2)).to.eq(3);
        });  
        it('should add positive numbers',()=>{
            expect(subtract(4,2)).to.eq(2);
        });  
        it('should add positive numbers',()=>{
            expect(divide(4,2)).to.eq(2);
        });  
        it('should add positive numbers',()=>{
            expect(multiply(4,2)).to.eq(8);
        });    
    });
    context('Math with decimals numbers',()=>{
        it('should add positive numbers',()=>{
            expect(sum(1.5,2)).to.eq(3.5);
        });  
        it('should add positive numbers',()=>{
            expect(subtract(4,2.5)).to.eq(1.5);
        });  
        it('should add positive numbers',()=>{
            expect(divide(4,2)).to.eq(2);
        });  
        it('should add positive numbers',()=>{
            expect(multiply(4,2)).to.eq(8);
        });    
    });
});