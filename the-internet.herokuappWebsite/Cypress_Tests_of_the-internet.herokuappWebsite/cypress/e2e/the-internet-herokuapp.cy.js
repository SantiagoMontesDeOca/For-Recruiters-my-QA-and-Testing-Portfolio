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

    // Seleccionar el boton del div
    cy.get('a.button').first().should('exist');
    // Primer Botón
   // cy.get('a.button').find('.button').should('exist');

    // Último Botón
    //cy.get('.button button:last').should('do.exit');
    cy.get('a.button').last().should('exist');

    // Botón del Medio (si hay tres botones)
    //cy.get('.button button:eq(1)').should('do.exit');  
    cy.get('a.button').eq(1).should('exist');





  });
  

});