/// <reference types="Cypress"/>
describe('My First Test',function (){
    it('Does not do much', function(){
        //cy.visit("https://www.pcdiga.com/");
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');

        //You can get this directly from Cypress
        //cy.get('.search-keyword')
        
        //will change
        cy.wait(2000);
        //This assertion will fail
        //cy.get('.product').should('have.length',4); //should is from chai
        
        cy.get('.product:visible').should('have.length',4); //should is from chai

        cy.get('.products').as('productLocator')
        //Parent Child chaining
        cy.get('@productLocator').find('.product').should('have.length',4);

        //Getting from the cypress dashboard
        //cy.get('.products > :nth-child(2)');

        //------ How to add to the card but the position is hardcoded. Which means that the position of the product can be changed tomorrow ---
        //Get the second product (Carrot)
        //cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click();

        //Add to cart from Cypress dashboard
        cy.get(':nth-child(2) > .product-action > button').click();

        //Get product based on it's name:
        cy.get('@productLocator').find('.product').each(($e1,index,$list)=>{
            const textVeg = $e1.find('h4.product-name').text();
            if(textVeg.includes('Cashews')){
                $e1.find('button').click();
            }
        });

        // const logo=cy.get('.brand').then(function(logoelement){
            //     //.text doesnt exist in cypress but it does in jQuery
            //     cy.log(logoelement.text());
            // });
    
            // cy.log will be syncronous
            // console.log will be asyncronous
        //Asssert if logo test is correctly displayed
        cy.get('.brand').should('have.text','GREENKART');
    })
})