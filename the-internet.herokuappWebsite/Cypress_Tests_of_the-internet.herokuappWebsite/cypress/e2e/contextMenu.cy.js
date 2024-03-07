describe('Context Menu', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/');
      cy.get(':nth-child(21) > a').click();
      
    });
      
    it('1 login con usuario y contraseña válidos', () => {
      // Simular un clic derecho en un elemento que generará una alerta
        cy.get('tu-selector-aqui').rightclick();

        // Esperar a que aparezca la alerta y confirmarla
        cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('You selected a context menu'); // Ajusta el texto según tu caso
        // Puedes hacer más aserciones o acciones según sea necesario
        });
      
    });
           
  
  });

