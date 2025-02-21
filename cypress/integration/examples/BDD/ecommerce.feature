

Feature: End to end ecommerce validation

Scenario: Ecommerce products delivery

Given I am on ecommerce page
When I have to login to the app
And I add items to the cart and checkout
And validate the total price limit
Then select the country submit and verify Thankyou


