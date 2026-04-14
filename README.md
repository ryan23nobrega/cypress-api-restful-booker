# 🚀 Cypress API Testing - Restful Booker

Projeto de automação de testes de API utilizando **Cypress**, validando os principais fluxos da API pública **Restful Booker**.

---

## 🎯 Sobre o projeto

Este projeto foi desenvolvido com foco em **portfólio para QA**, simulando cenários reais de testes em uma API REST.

O objetivo é demonstrar, na prática, habilidades essenciais como:

- Automação de testes de API
- Criação de cenários positivos e negativos
- Organização de testes
- Reutilização de código
- Integração contínua (CI/CD)

---

## 🛠️ Tecnologias utilizadas

- ⚡ Cypress
- 🟨 JavaScript
- 🟩 Node.js
- 🔁 GitHub Actions

---

## 📂 Estrutura do projeto

cypress/
  e2e/api/
    auth.cy.js
    booking-create.cy.js
    booking-update-delete.cy.js
    booking-negative.cy.js

  fixtures/
    bookingData.json

  support/
    commands.js
    e2e.js

.github/
  workflows/
    cypress.yml

---

## 🧪 Cenários automatizados

🔐 Autenticação  
- Geração de token válido  

📦 Booking  
- ✔ Criar reserva (POST)  
- ✔ Listar reservas (GET)  
- ✔ Atualizar reserva (PUT)  
- ✔ Deletar reserva (DELETE)  

⚠️ Cenários negativos  
- ❌ Buscar reserva inexistente (404)  
- ❌ Atualizar reserva sem token (403)  
- ❌ Deletar reserva sem autenticação (403)  

---

## ▶️ Como executar o projeto

📦 Instalar dependências
npm install

🖥️ Executar com interface gráfica
npx cypress open

⚡ Executar em modo headless
npm run cy:run

---

## 🔄 Integração contínua (CI/CD)

O projeto utiliza **GitHub Actions** para execução automática dos testes:

- 🚀 Executa a cada push na branch `master`
- 📊 Garante que os testes estão sempre válidos
- 🔁 Simula ambiente de integração contínua

👉 Acesse a aba **Actions** do repositório para visualizar as execuções.

---

## 🧠 Boas práticas aplicadas

- 📌 Separação de testes por responsabilidade  
- 📌 Uso de fixtures para dados de teste  
- 📌 Reutilização com custom commands  
- 📌 Testes independentes  
- 📌 Validação de status codes  
- 📌 Pipeline automatizado  

---

## 👨‍💻 Autor

Ryan Nóbrega  

GitHub: https://github.com/ryan23nobrega  
LinkedIn: (adicione seu link aqui)  

---

## ⭐ Considerações finais

Este projeto representa um fluxo completo de testes automatizados de API, incluindo:

- Estrutura profissional  
- Execução local e em CI/CD  
- Cobertura de cenários críticos  

Perfeito para demonstrar habilidades em processos de QA e automação.