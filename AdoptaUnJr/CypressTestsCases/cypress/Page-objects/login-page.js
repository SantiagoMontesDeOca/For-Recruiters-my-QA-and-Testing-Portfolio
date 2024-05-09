/// <reference types="cypress"/>

export class LoginPage {


     clickJunior() {
          cy.get("ul li")
               .should('be.visible')
               .contains("Junior")
               .click();
     };

     enterUserName(text) {
          cy.get("#username")
               .should('be.visible')
               .click()
               .type(text);

     };

     enterPassword(text) {
          cy.get('#password')
               .should('be.visible')
               .type(text);
     };

     clickRecordarme() {
          cy.get('input[type="radio"][name="storageAccount"]')
               .should('not.be.checked')
               .check()
               .should('be.checked')
     };

     clickLogin() {
          cy.get('button')
               .should('be.visible')
               .contains("Ingresar")
               .click();
     };

     //
     clickRecuperarContraseña() {
          cy.get('a.text-gray.underline')
               .should('have.text', 'Recuperar')
               .click();
     };

     verifyElementVisible(elementSelector) {
          cy.get(elementSelector)
               .should('be.visible');
     };

     /* CREAR Test y commprobat que la contraseña de muestra y oculta
          clickMostrarContraseña() {
               cy.get(svg)
                    .click(); 
          };
     */

};