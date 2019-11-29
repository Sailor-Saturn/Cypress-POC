/// <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage';
describe('My Second Test Suite', function () {
    before(function () {
        cy.fixture('example').then(function(data){
            this.data=data;
        });
        cy.visit("https://rahulshettyacademy.com/angularpractice");
    });
    it('My FirstTest case', function () {
        cy.get(':nth-child(1) > .form-control').type(this.data.name);
        cy.get('select').select(this.data.gender);
        cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name);
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2');
        cy.get('#inlineRadio3').should('be.disabled');
        cy.pause();
        cy.get(':nth-child(2) > .nav-link').click();

        this.data.productName.forEach(function(element){
            console.log(element);
            cy.selectProduct(element);
        });
    });
});
