# Cypress API Testing - Restful Booker

Projeto de automação de testes de API com Cypress, utilizando a API pública Restful Booker como base para validação de fluxos funcionais e cenários negativos.

## Objetivo

Este projeto foi criado com foco em portfólio para vagas de QA, demonstrando na prática conhecimentos em:

- automação de testes de API
- organização de projeto
- uso de fixtures
- custom commands
- testes positivos e negativos
- integração contínua com GitHub Actions

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- GitHub Actions

## Estrutura do projeto

```text
cypress/
  e2e/
    api/
      auth.cy.js
      booking-create.cy.js
      booking-negative.cy.js
      booking-update-delete.cy.js
  fixtures/
    bookingData.json
  support/
    commands.js
    e2e.js

.github/
  workflows/
    cypress.yml

cypress.config.js
package.json
README.md