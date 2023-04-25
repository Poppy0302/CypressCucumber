import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor"

Given('User is at the login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

When('User enters username as {string} and password as {string}', (Admin, admin123) => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Admin)
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(admin123)
    // cy.get('.oxd-button').click()
})

Then('User clicks on login button', () => {
    cy.get('.oxd-button').click()
})

Then('User is able to successfully login to the Website', () => {
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible', {timeout: 10000})
})