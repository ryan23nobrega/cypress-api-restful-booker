Cypress.Commands.add('createBooking', (bookingData) => {
  return cy.request({
    method: 'POST',
    url: '/booking',
    body: bookingData
  })
})

Cypress.Commands.add('generateToken', (authData) => {
  return cy.request({
    method: 'POST',
    url: '/auth',
    body: authData
  })
})

Cypress.Commands.add('updateBooking', (bookingId, token, updateData) => {
  return cy.request({
    method: 'PUT',
    url: `/booking/${bookingId}`,
    headers: {
      Cookie: `token=${token}`
    },
    body: updateData
  })
})

Cypress.Commands.add('deleteBooking', (bookingId, token) => {
  return cy.request({
    method: 'DELETE',
    url: `/booking/${bookingId}`,
    headers: {
      Cookie: `token=${token}`
    }
  })
})