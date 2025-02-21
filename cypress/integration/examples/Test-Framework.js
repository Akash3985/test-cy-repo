import HomePage from "../../support/PageObjects/HomePage"
import ProductPage from "../../support/PageObjects/ProductPage"
import ConfirmationPage from "../../support/PageObjects/ConfirmationPage"


describe('End to end ecommerce test', function () {

    before(function () {
        // It runs once before all tests in this block
        cy.fixture('example').then(function (data) {

            this.data = data

            this.homepage = new HomePage()
        })

    })



    it('Submit order', function () {


        const productname = this.data.productname


        this.homepage.goTo('https://rahulshettyacademy.com/loginpagePractise/#')


        const ProductPage = this.homepage.login(this.data.username, this.data.password)


        ProductPage.pageValidation()
        ProductPage.getCardCount().should('have.length', 4)
        ProductPage.selectProduct(productname)
        ProductPage.selectFirstProduct()
        const CartPage = ProductPage.goToCart()
        CartPage.sumOfProducts().then(function (sum) {

            expect(sum).to.be.lessThan(2000000)

        })

        const ConfirmationPage = CartPage.checkoutItems()
        ConfirmationPage.submitFormDetails()
        ConfirmationPage.getAlertMessage().should('contain','Success')










    })


})