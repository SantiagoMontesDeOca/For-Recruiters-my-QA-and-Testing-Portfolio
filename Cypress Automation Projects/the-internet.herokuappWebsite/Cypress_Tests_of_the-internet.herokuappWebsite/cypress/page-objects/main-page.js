/// <reference types="cypress" />

export class MainPage {
   
    // Ingresar en la página de FormAuthentication.
    visitMainPage() {
        cy.visit('https://the-internet.herokuapp.com/')
    
    };

    clickAdd_remove_elements() {
        cy.get('ul > :nth-child(2) > a').click()

    };

  /*  clickShiftingContent()  {
        cy.get(':nth-child(39) > a').click()
    
    };
    */



};