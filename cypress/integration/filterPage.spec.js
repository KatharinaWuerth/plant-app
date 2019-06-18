describe('Test FilterPage', () => {
  it('Finds page of PlantMatch', () => {
    cy.visit('http://localhost:3000')
  })
  it('Selects options', () => {
    cy.contains('Wohnungspflanze')
      .click()
      .should('have.css', 'background-color')
      .and('eq', 'rgb(203, 225, 194)')
    cy.contains('Gartenpflanze')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(255, 255, 255)')
  })
  it('Deselects option', () => {
    cy.contains('Gartenpflanze')
      .click()
      .should('have.css', 'background-color')
      .and('eq', 'rgb(203, 225, 194)')
    cy.contains('Wohnungspflanze')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(255, 255, 255)')
  })
  it('Button at the end directs to /matched page', () => {
    cy.get('a').click()
    cy.url().should('include', '/matched')
    cy.get('header').contains('Unsere Vorschläge')
  })
})
