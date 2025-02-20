

describe('My third test suite',function()
{

it('My third testcase', function()  
{


//alerts
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()


//validating alerts
cy.on('window:alert',(str)=>

{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')

})


})
})