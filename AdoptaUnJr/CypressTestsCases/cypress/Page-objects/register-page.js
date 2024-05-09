/// <reference types="cypress"/>

// Hacer Registro de Usuario.
export class RegisterPage {

    // Elegir si eres Junior
    clickJunior() {
        cy.get("div > img > p")
            .contains("Junior")
            .click()
    };

    // Ingresar Correo Electronico.
    enterEmail(text) {
        cy.get("#email")
            .click()
            .type(text)
    };

    // Aceptar Términos y Condiciones.
    clickAcceptTermsandConditions() {
        cy.get('input[type="radio"][name="terms"]')
            .should('not.be.checked')
            .check()
            .should('be.checked')
    };

    // Leer Términos y Condiciones.
    clickLeerTermsandConditions() {
        cy.get('a')
            .should('have.text', 'Términos y Condiciones')
            .click()
    };
    /*clickTerms() {
        cy.get('input [type=radio name=terms]')
            .should('be.disable')
            .click()
            .should('be.anable')

    };
*/
    clickRegistrateAhora() {
        cy.get("button")
            .contains("Regístrate ahora")
            .click()
    };

    clickYaTienesCuenta() {
        cy.get("a")
            .contains("Inicia sesión aquí")
            .click()
            .url()
            .should('include', '/login');
    };

    //Test de continua con Google
    //Test de continua con Github
    //Test de continua con con Apple
    // Ya tiene cuenta click en Inicia Sesion Aqui
    //Click en Junior
    //Click en Empresa
    //Click en Escuela

};
