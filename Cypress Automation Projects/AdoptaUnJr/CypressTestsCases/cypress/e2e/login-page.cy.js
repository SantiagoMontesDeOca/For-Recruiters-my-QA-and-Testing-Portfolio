import { MainPage } from "../Page-objects/main-page.js";
import { LoginPage } from "../Page-objects/login-page.js";

// Aqui van todas las pruebas 
describe('Pruebas de Login Page', () => {

    // Creo una constante para llamar al PO creado.
    const mainPage = new MainPage();
    const loginPage = new LoginPage();

    // Se ejecuta antes de cada test (it)
    beforeEach(() => {

        mainPage.visitMainPage();
        mainPage.clickLogin();
        // Verifico que los elementos son visibles antes de los Test.
        loginPage.verifyElementVisible("#username");
        loginPage.verifyElementVisible("#password");
        loginPage.verifyElementVisible("input[type=radio]");
        loginPage.verifyElementVisible("button");

    });

    it('Login Nombre Usuario Válido', () => {

        loginPage.enterUserName("tomsmith");
        loginPage.enterPassword("SuperSecretPassword!");
        loginPage.clickLogin();
        // crear POM de a donde se REDIRIGE?
    });

    it('Login Nombre Usuario Válido + Recordarme', () => {

        loginPage.enterUserName("tomsmith");
        loginPage.enterPassword("SuperSecretPassword!");
        loginPage.clickRecordarme();
        loginPage.clickLogin();
        // crear POM de a donde se REDIRIGE?
    });
    /* CREAR TEST 
    it('Recuperar Contraseña', () => {
 
         loginPage.clickRecuperarContraseña
        
     });
    */

});
