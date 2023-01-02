describe('Main tricks page', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/tricks', { fixture: 'stub-tricks-data.json' })
    cy.visit('http://localhost:3000/')
  })

  it('should confirm true is true', () => {
    expect(true).to.equal(true)
  })

  it('should show four tricks on page load', () => {
    cy.get('.card').should('length', 4)

    cy.get('.card').first().contains('Japan Air')
    cy.get('.card').eq(1).contains('Laserflip')
    cy.get('.card').eq(2).contains('FS Noseblunt')
    cy.get('.card').last().contains('Indy Backflip')
  })

  it('should be able to select a stance', () => {
    cy.get('select[name="stance"]').select('switch')
    cy.get('select[name="stance"]').should('have.value', 'switch')
  })

  it('should be able to enter a trick name', () => {
    cy.get('input[name="name"]').type('Wowza')
    cy.get('input[name="name"]').should('have.value', 'Wowza')
  })

  it('should be able to select an obstacle', () => {
    cy.get('select[name="obstacle"]').select('Rail')
    cy.get('select[name="obstacle"]').should('have.value', 'rail')
  })

  it('should be able to enter a tutorial link', () => {
    cy.get('input[name="tutorial"]').type('https://www.youtube.com/watch?v=qsxcVsFDDoA')
    cy.get('input[name="tutorial"]').should('have.value', 'https://www.youtube.com/watch?v=qsxcVsFDDoA')
  })

  it('should be able to add new tricks', () => {
    cy.get('select[name="stance"]').select('regular')
    cy.get('input[name="name"]').type('Neato Trick')
    cy.get('select[name="obstacle"]').select('pool')
    cy.get('input[name="tutorial"]').type('https://www.youtube.com/watch?v=wvbkedBysw8')
    cy.get('.submit').click()

    cy.get('.card').should('length', 5)
    cy.get('.card').last().contains('Neato Trick')
  })
})