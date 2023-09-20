describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('should have a title', () => {
    cy.getByData('title').contains(
      'Encontre o café perfeito para qualquer hora do dia',
    )
  })

  it('should have a subtitle', () => {
    cy.getByData('subtitle').contains(
      'Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora',
    )
  })
})
