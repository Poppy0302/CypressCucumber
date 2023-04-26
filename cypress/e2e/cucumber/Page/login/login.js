import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given('User is at the login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})
When('User enters username as {string} and password as {string}', (Admin, admin123) => {
    cy.get('input[name="username"]').type(Admin)
    cy.get('input[name="password"]').type(admin123)
})
Then('User clicks on login button', () => {
    cy.get('.oxd-button').click()
})
Then('User is able to successfully login to the Website', () => {
    cy.get('.oxd-text').eq(11).contains('Dashboard')
})

