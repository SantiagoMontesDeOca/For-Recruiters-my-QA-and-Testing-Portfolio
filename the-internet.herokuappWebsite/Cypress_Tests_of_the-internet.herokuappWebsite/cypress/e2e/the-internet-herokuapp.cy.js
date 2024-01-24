describe('the-internet.herokuapp tests', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/');
        
  });

  /*

  it('TC_2AddRemoveElements_001', () => {

    // Click on ADD/Remove elements.
    cy.get('ul > :nth-child(2) > a ').should('contain', 'Add/Remove Elements').click();
    
    // Click the "Add Element" button.
    cy.get('button').contains('Add Element').click();

    // An element is added on the page.
    cy.get('button.added-manually').contains('Delete').should('be.visible');

    // Click the "Delete" button.
    cy.get('button.added-manually').contains('Delete').click();

    // The element is Deleted of the page.
    cy.get('button.added-manually').should('not.exist');

  });
  
 it('TC_4BrokenImages_001', () => {
    // Click on Broken images.
    cy.get('ul > :nth-child(4) > a ').should('contain', 'Broken Images').click();

    // Images are present and displayed on the page.
    cy.get('.example img').should('have.length', 3);

  });
  
  it('TC_5ChallengingDOM_001', () => {
    // Click on ChallengingDOM.
    cy.get('ul > :nth-child(5) > a ').should('contain', 'Challenging DOM').click();

    // Seleccionar el primer primer boton del div
    cy.get('a.button').first().should('exist');
   
    // Botón del Medio
    cy.get('a.button').eq(1).should('exist');

    // Last botton 
    cy.get('a.button').last().should('exist');
    
    // Existe una Tabla de 11 filas y 77 celdas
    cy.get('.large-10.columns, table')
      .should('exist')
      .find('tr') // Seleccionar las filas dentro del elemento encontrado
      .should('have.length', 11) // Verificar que hay 11 filas
      .find('td') // Seleccionar las celdas dentro de las filas
      .should('have.length', 70) // Verificar que hay 70 celdas 
      .find('a') // Seleccionar los elementos <a> dentro del div
      .should('have.length', 20 ); // Verificar que hay 20 elementos <a>

    });

    it('TC_6Checkboxes_001', () => {
      // Click on Checkboxes.
    cy.get('ul > :nth-child(6) > a ').should('contain', 'Checkboxes').click();

      //Find first checkbox, check it and check to be checked/unchecked.
      cy.get('[type="checkbox"]').first().check();
      cy.get('[type="checkbox"]').first().should('be.checked');

      cy.get('[type="checkbox"]').first().uncheck();
      cy.get('[type="checkbox"]').first().should('be.not.checked');

      //Find second checkbox, check it and check to be checked/unchecked.
      cy.get('[type="checkbox"]').last().check();
      cy.get('[type="checkbox"]').last().should('be.checked');

      cy.get('[type="checkbox"]').last().uncheck();
      cy.get('[type="checkbox"]').last().should('be.not.checked');

    });

    it('TC_7ContextMenu_001', () => {

      // Click on Context Menu.
      cy.get('ul > :nth-child(7) > a').should('contain', 'Context Menu').click();

      // Right click on the box .
      cy.get('#hot-spot').rightclick();

      // Verificar que el mensaje de alerta es 'You selected a context menu'.
      cy.on('window:alert', (alertText) => {
        
        expect(alertText).to.include('You selected a context menu');
      
      });
    })
*/
    
    it('TC_8DigestAuthentication_001', () => {

      // Click on Digest Authentication.
      cy.get('ul > :nth-child(8) > a').click();
      
    // Enviar solicitud GET con autenticación
    cy.request({
      method: 'GET',
      url: 'https://the-internet.herokuapp.com/digest_auth',
      auth: {
        username: 'admin',
        password: 'admin'
      },
      failOnStatusCode: false
    }).then((response) => {
      // Verificar el código de estado y otras condiciones según la respuesta
      expect(response.status).to.eq(200);
      // Agregar más verificaciones según la respuesta esperada
    });  
    
    
    });
   
  

});