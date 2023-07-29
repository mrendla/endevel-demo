describe('Endevel blog test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have 5 blog posts on homepage', () => {
    cy.get('.blog-container').should('have.length', 5)
  })

  it('should go to 2nd page and have 5 blog posts', () => {
    cy.get('button:contains(keyboard_arrow_right)').click()

    // Check if 2nd page is highlighted
    cy.get('.bg-purple:contains(2)').should('exist')

    cy.get('.blog-container').should('have.length', 5)
  })

  it('should open 1st blog post', () => {
    cy.get('.blog-container:first').click()

    // Check if there's a blog title
    cy.get('.text-h6').should('exist') 
  })

  it('should check and uncheck 1st tag in the sidebar', () => {
    // Select tag filter
    cy.get('.sidebar a:first').click()

    // Check if there's a selected tag
    cy.get('.q-item.selected').should('have.length', 1)
    
    // Cancel tag filter
    cy.get('.sidebar a:first').click()

    // Check if there's no selected tag
    cy.get('.q-item.selected').should('not.exist')
  })
})