describe('API Booking - Negative', () => {
  it('Deve retornar 404 ao buscar uma reserva inexistente', () => {
    cy.request({
      method: 'GET',
      url: '/booking/99999999',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404)
    })
  })

  it('Deve retornar 403 ao tentar deletar reserva sem token', () => {
    cy.request({
      method: 'DELETE',
      url: '/booking/1',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(403)
    })
  })
})