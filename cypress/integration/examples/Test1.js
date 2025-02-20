

describe('My first test suite',function()
{

it('My first testcase', function()  
{


cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get('.search-keyword').type('ca')

cy.wait(2000)
cy.get('.product:visible').should('have.length',4)

//parent child chaining

cy.get('.products').as('productlocator')

cy.get('@productlocator').find('.product').should('have.length',4)
cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click()

cy.get('@productlocator').find('.product').each(($e1, index, $list)  =>  {

const textVeg=$e1.find('h4.product-name').text()
if(textVeg.includes("Cashews"))
{
    cy.wrap($e1).find('button').click()


}



})
// assert logo text
cy.get('.brand').should('have.text','GREENKART')




cy.get('.brand').then(function(logoelement)
{

cy.log(logoelement.text())


} )

} )






} )