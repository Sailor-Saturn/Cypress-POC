/// <reference types="Cypress"/>
describe('My Third Test',function (){
    it('Does not do much', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // -----------------------Checkbox
        //check box
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');

        //uncheck box
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

        //check two boxes at the same time
        cy.get('input[type="checkbox"]').check(['option2','option3']);

        // -----------------------Dropdown
        cy.get('select').select('option2').should('have.value','option2');

        //Dynamic dropdowns
        cy.get('#autocomplete').type('ind');

        cy.get('.ui-menu-item div').each(($e1, index, $list) => {
 
            if($e1.text()==="India")
            {
                $e1.click()
            }
         
         
        });

        //autocomplete
        cy.get('#autocomplete').should('have.value','India');

        //visible invisible
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');

        //Testing the Alert
        cy.get('#alertbtn').click();
        cy.get('[value="Confirm"]').click();

        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        });

        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        });

        cy.get('#opentab').invoke('removeAttr','target').click();
    })
})