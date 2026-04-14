describe('API Booking - Update e Delete', () => {
  let bookingData
  let bookingId
  let token

  before(() => {
    return cy.fixture('bookingData')
      .then((data) => {
        bookingData = data
        return cy.createBooking(data.createBooking)
      })
      .then((bookingResponse) => {
        expect(bookingResponse.status).to.eq(200)
        bookingId = bookingResponse.body.bookingid
        return cy.generateToken(bookingData.authData)
      })
      .then((authResponse) => {
        expect(authResponse.status).to.eq(200)
        token = authResponse.body.token
      })
  })

  it('Deve atualizar uma reserva com sucesso', () => {
    cy.updateBooking(bookingId, token, bookingData.updateBooking).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.firstname).to.eq(bookingData.updateBooking.firstname)
      expect(response.body.lastname).to.eq(bookingData.updateBooking.lastname)
      expect(response.body.totalprice).to.eq(bookingData.updateBooking.totalprice)
    })
  })

  it('Deve deletar uma reserva com sucesso', () => {
    cy.deleteBooking(bookingId, token).then((response) => {
      expect(response.status).to.eq(201)
    })
  })
})