import { MainPage } from "../Page-objects/main-page.js";

describe('Pruebas de home-header', () => {

    const mainPage = new MainPage();

    beforeEach(() => {

        mainPage.visitMainPage();

    });

    it('Test de todo lo incluido en el Header', () => {

        mainPage.clickLogoAUJ();
        mainPage.clickAboutUs();
        mainPage.clickJuniors();
        mainPage.clickEmpresas();
        mainPage.clickEscuelas();
        mainPage.clickLogin();
        mainPage.clickRegister();

    });

    it('Test de todo lo que esta entre el Header y el Footer', () => {

        mainPage.clickButtonSeParte();

    });

    it('Test de todo lo que este en el footer', () => {



    });
});