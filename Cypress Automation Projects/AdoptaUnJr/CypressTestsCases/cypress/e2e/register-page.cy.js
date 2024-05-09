import { MainPage } from "../Page-objects/main-page.js";
import { RegisterPage } from "../Page-objects/register-page.js";

describe('Pruebas de Register Page', () => {

    const mainPage = new MainPage();
    const registerPage = new RegisterPage();

    beforeEach(() => {

        mainPage.visitMainPage();
        mainPage.clickRegister();

    });

    it('Registrar Usuario Válido', () => {

        registerPage.clickJunior();
        registerPage.enterEmail("mdosantiago2@gmail.com"); // ¿? como se usa el FakerJs
        registerPage.clickAcceptTermsandConditions();
        registerPage.clickRegistrateAhora();
        // crear POM de a donde se REDIRIGE?
    });

    it('Ya tienes cuenta', () => {

        //registerPage.clickJunior();
        registerPage.clickYaTienesCuenta();
        
    });

    /*
    CREAR TEST
    it('Recordar contraseña por 24hs', () => {
        
    });
    */

});