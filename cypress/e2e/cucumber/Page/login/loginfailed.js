import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given('User is at the login Failed', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})
When('User enters username as {string} and password as {string} Failed', (Admin123, admin) => {
    cy.get('input[name="username"]').type(Admin123)
    cy.get('input[name="password"]').type(admin)
})
Then('User clicks on login button Failed', () => {
    cy.get('.oxd-button').click()
})
Then('User is able to successfully login failed to the Website', () => {
    cy.get('.oxd-alert').contains('Invalid credentials')
})