describe('Transações', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(() => {
        cy.visit("https://devfinance-agilizei.netlify.app", { failOnStatusCode: false })
        
        cy.get('#data-table', { timeout: 30000 }).should('be.visible')
    });

    it('Cadastrar uma entrada', () => {
        criarTransacao("Freela", 250)
        cy.get("tbody tr td.description").should("contain", "Freela")
    });

    it('Cadastrar uma saída', () => {
        criarTransacao("Cinema", -45)
        cy.get("tbody tr td.description").should("contain", "Cinema")
    });

    it('Excluir Transação', () => {
        criarTransacao("Freela", 100)
        criarTransacao("Mesada", 10)

        cy.contains(".description", "Freela")
            .parent()
            .find('img')
            .click()

        cy.get('tbody tr').should("have.length", 1)
    });
});

function criarTransacao(descricao, valor) {
    cy.contains("Nova Transação").should('be.visible').click()
    
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2023-02-15")
    
    cy.contains('button', 'Salvar').click()
}