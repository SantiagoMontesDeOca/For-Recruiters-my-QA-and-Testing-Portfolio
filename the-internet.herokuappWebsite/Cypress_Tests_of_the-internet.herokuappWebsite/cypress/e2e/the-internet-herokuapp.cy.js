describe('the-internet.herokuapp tests', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/');
        
  });

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
  
  /*it('Test Case ID: TC_3BasicAuth_001', () => {
      cy.get('ul > :nth-child(3) > a').click()
     
  });
  Acercamientos al codigo: 
    cy.get('form').submit()
•   cy.focused()

  */
  
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
    cy.get('div.large-10.columns, table')
      .should('exist')
      .find('tr') // Seleccionar las filas dentro del elemento encontrado
      .should('have.length', 11) // Verificar que hay 11 filas
      .find('td') // Seleccionar las celdas dentro de las filas
      .should('have.length', 70) // Verificar que hay 77 celdas (11 filas x 7 columnas)
      .find('a') // Seleccionar los elementos <a> dentro del div o table
      .should('have.length', 20 ); // Verificar que hay 20 elementos <a>


  });
  

});