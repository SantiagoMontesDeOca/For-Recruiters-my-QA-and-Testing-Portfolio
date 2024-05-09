/// <reference types="cypress" />

export class MainPage {

    // Ingresar en la página HOME de AUJ.
    visitMainPage() {
        cy.visit('http://localhost:3000/') // http://localhost:3000/ https://adoptaunjunior.es/
        cy.wait(1000)
        cy.url().should('eq', 'http://localhost:3000/') // http://localhost:3000/

    };

    clickLogoAUJ() {
        cy.get('nav a img')
            .should('have.attr', 'alt', 'Logo Adopta un Junior')
            .first()
            .click()
            .url().should('eq', 'http://localhost:3000/') // http://localhost:3000/

    };

    // Hacer click en Sobre nosotros
    clickAboutUs() {
        cy.get('nav a')
            .contains("Sobre Nosotros")
            .click()
            .url().should('match', /nosotros/)

    };

    // Hacer click en Juniors
    clickJuniors() {
        cy.get('nav a')
            .contains("Juniors")
            .click()
            .url().should('match', /juniors/)

    };
    // Hacer click en Empresas
    clickEmpresas() {
        cy.get('nav a')
            .contains("Empresas")
            .click()
            .url().should('match', /empresas/)

    };

    // Hacer click en Escuelas
    clickEscuelas() {
        cy.get('nav a')
            .contains("Escuelas")
            .click()
            .url().should('match', /escuelas/)

    };

    // Hacer click en Iniciar Sesion
    clickLogin() {
        cy.get('nav a')
            .contains("Inicia sesión")
            .click()
            .url().should('match', /login/)

    };

    // Hacer click en Registrate
    clickRegister() {
        cy.get('nav a')
            .contains("Regístrate")
            .click()
            .url().should('match', /registro/)

    };

    // Hacer click en Boton "Sé Parte de la  Revolucion Tech"
    clickButtonSeParte() {
        cy.get('div a button')
            .contains('Sé parte de la #RevoluciónTech')
            .click()
            .url().should('match', /registro/)

    };




};