import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given('User is at the login page go to admin page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})
When('User complete username as {string} and password as {string}', (Admin, admin123) => {
    cy.get('input[name="username"]').type(Admin)
    cy.get('input[name="password"]').type(admin123)
})
Then('User click on login button', () => {
    cy.get('.oxd-button').click()
})
Then('User successfully login to the Website', () => {
    cy.get('.oxd-text').eq(11).contains('Dashboard')
})
Then('User go to Admin page', () => {
    cy.get('[href="/web/index.php/admin/viewAdminModule"]').click()
})
Then('User live Admin page', () => {
    cy.get('.oxd-topbar-header-title')
})