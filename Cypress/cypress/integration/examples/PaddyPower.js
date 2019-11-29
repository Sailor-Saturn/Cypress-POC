/// <reference types="Cypress"/>
describe('My Fourth Test',function (){
    it('Does not do much', function(){
        cy.visit("https://www.paddypower.com/bet");
        //cy.visit("https://www.qa.com.paddypower/bet");
        //y.visit('https://sdspp.qa.paddypower.com/')
        //cy.visit('http://localhost:3000');


        cy.scrollTo(0, 500);
        cy.get(':nth-child(1) > race-card-inner > .race-card-inner > .bettable-runners > :nth-child(1) > racing-runner > .racing-runner > .racing-runner__line > :nth-child(1) > .racing-runner__button > .btn-odds > .button > .button__background').click();
        cy.get('.my-bets-tabs > :nth-child(1)').click();
        cy.get('.input-text').click();
        cy.get('.input-text').type(55);
        // cy.get('.button button--highlighted button--transitionable button--big').click();
        // cy.get('.my-bets-tabs__tab').click();
        // cy.get('.input-text ng-pristine ng-valid ng-empty ng-touched').type(55);
    })
})