describe('API Booking - Create', () => {
  let bookingData

  before(() => {
    cy.fixture('bookingData').then((data) => {
      bookingData = data
    })
  })

  it('Deve criar uma reserva com sucesso', () => {
    cy.createBooking(bookingData.createBooking).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('bookingid')
      expect(response.body.booking.firstname).to.eq(bookingData.createBooking.firstname)
      expect(response.body.booking.lastname).to.eq(bookingData.createBooking.lastname)
    })
  })
})