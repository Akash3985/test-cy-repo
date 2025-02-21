import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../../../support/PageObjects/HomePage"
import HomePage from "../../../../support/PageObjects/HomePage"
const homePage = new HomePage()

Given('I am on ecommerce page',()=>


{
   

    this.homepage.goTo('https://rahulshettyacademy.com/loginpagePractise/#')


})



When("I have to login to the application",()=>

{
    const ProductPage = this.homepage.login(this.data.username, this.data.password)


    ProductPage.pageValidation()
    ProductPage.getCardCount().should('have.length', 4)


})