describe('API Auth', () => {
  let bookingData

  before(() => {
    cy.fixture('bookingData').then((data) => {
      bookingData = data
    })
  })

  it('Deve gerar token com sucesso', () => {
    cy.generateToken(bookingData.authData).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('token')
      expect(response.body.token).to.not.be.empty
    })
  })
})