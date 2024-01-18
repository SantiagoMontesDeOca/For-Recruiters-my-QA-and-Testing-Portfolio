describe('the-internet.herokuapp tests', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/');
        
  });
    
  it('TC_2AddRemoveElements_001', () => {

    // Click on ADD/Remove elements.
    cy.get('ul > :nth-child(2) > a ').click();
    
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
  
  it('TC_4BrokenImages_001', ()  => {
    // Click on Broken images.
    cy.get('ul > :nth-child(4) > a ').click();

    // Images are present and displayed on the page.
    cy.get('.example img').should('have.length', 3);

  });
  
  

});