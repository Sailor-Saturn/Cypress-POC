/// <reference types="Cypress" />

describe('My Second Test Suite', function () {
    it('My FirstTest case', function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get('#opentab').then(function(el){
            const url = el.prop('href');
            cy.log(url);
            cy.visit(url); //this won't work since it's different domains.
        });
        //.prop() gets the property of the value (it's not cypress)
    });
});
