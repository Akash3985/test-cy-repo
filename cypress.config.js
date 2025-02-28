
const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 7000,

  env: {

      url: "https://rahulshettyacademy.com"

  },

  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});


