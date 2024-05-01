/// <reference types="cypress"/>

describe('Teste de input de dados', () => {
    it ('Teste positivo com dados pessoais',() => {
        cy.visit('https://api.new.mentorama.com.br/storage/media-files/QA1/M4/tarefa_1.html')
        cy.get('input[name="name"]').type('Renan');
        cy.get('input[name="height"]').type('175');
        cy.get('input[name="weight"]').type('90');
        cy.get('button').click();
    })

    // it('Preencho o nome', () => {
    //     cy.get('input[name="name"]').type('Renan');
    // })

    // it('Preencho meu email', () => {
    //     cy.get('input[name="height"]').type('175');
    // })

    // it('Preencho meu telefone', () => {
    //     cy.get('input[name="weight"]').type('90');
    // })

    // it('Clico no botão Calcular', () =>{
    //     cy.get('button').click();
    // })
})