

describe('My third test suite',function()
{

it('My third testcase', function()  
{


// child window handling
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")


cy.get('#opentab').invoke('removeAttr','target').click()
cy.origin("https://www.qaclickacademy.com",()=>
// 

{
    // actions on the child page is written here now
    cy.get("#navbarSupportedContent a[href*='about']").click();
    cy.get(".mt-50 h2").should('contain','QAClick Academy');

})

})
})