describe('BMI Calculator', () => {
  it('calculates BMI correctly', () => {
    // Visit the page
    cy.visit('http://localhost:5500/index.html')

    // Enter valid weight and height values
    cy.get('#weight').type('70') // Example weight value
    cy.get('#height').type('170') // Example height value

    // Click the "Calculate BMI" button
    cy.get('#calculateBtn').click()

    // Verify that the result is displayed and contains the calculated BMI
    cy.get('#result').should('contain', 'Your BMI is:')
  })
})
