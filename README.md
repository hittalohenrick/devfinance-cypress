# 💸 DevFinance Automation

### 📋 Sobre o Projeto
Este repositório contém uma suíte de testes automatizados **End-to-End (E2E)** desenvolvida com **Cypress** do Curso **Cypress Direo ao Ponto - Agilizei**. O objetivo é garantir a qualidade e a funcionalidade das principais operações financeiras da aplicação web **DevFinance**.

O projeto valida fluxos críticos como cadastro de entradas, saídas e remoção de transações, assegurando que o cálculo de saldo e a interface respondam corretamente.

### 🛠 Tecnologias Utilizadas
* **Framework:** [Cypress](https://www.cypress.io/) (v12+)
* **Linguagem:** JavaScript
* **Ambiente:** Node.js

### 🧪 Cenários de Teste Cobertos
O arquivo principal `finances.cy.js` cobre os seguintes cenários:
1.  **Cadastrar Entrada:** Valida a inserção de uma transação positiva (ex: Salário/Freela).
2.  **Cadastrar Saída:** Valida a inserção de uma despesa (ex: Cinema/Contas).
3.  **Excluir Transação:** Valida a remoção de um item da tabela e o comportamento da interface.
4.  **Validação de Interface:** Garante que os elementos visuais (descrição, valores) estão sendo renderizados corretamente.

### 🚀 Como Executar o Projeto

#### Pré-requisitos
* Node.js instalado.

#### 1. Instalação
Clone o repositório e instale as dependências:
```bash
npm install

```

#### 2. Rodar Testes (Modo Headless)

Para rodar os testes no terminal (rápido, sem abrir navegador):

```bash
npm run cy:run

```

#### 3. Rodar Testes (Modo Interativo)

Para abrir o Cypress Test Runner e ver os testes acontecendo em tempo real:

```bash
npm run cy:open

```

### 📂 Estrutura do Projeto

```text
devfinance-cypress/
├── cypress/
│   ├── e2e/              # Arquivos de teste (*.cy.js)
│   ├── fixtures/         # Massas de dados estáticas (JSON)
│   └── support/          # Comandos customizados e configurações globais
├── cypress.config.js     # Configuração principal do Cypress
├── jsconfig.json         # Configuração do IntelliSense (VS Code)
├── package.json          # Dependências e Scripts
├── package-lock.json     # Versões exatas das dependências
└── README.md             # Documentação

```

### 🔗 Aplicação Alvo

* **DevFinance:** https://devfinance.netlify.app