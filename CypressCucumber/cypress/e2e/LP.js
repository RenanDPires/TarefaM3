/// <reference types = "Cypress" />

import {Given, When,Then} from "@badeball/cypress-cucumber-preprocessor"

Given ("Que já acessei minha LP", ()=>{
    cy.visit("https://api.new.mentorama.com.br/storage/media-files/QA1/M3/2/tarefa_2.html")
})

When ("Preencher o campo DATA",()=>{
    cy.get('input[class="date"]').type('Teste data')
})

When ("Preencher o campo NOTA",()=>{
    cy.get('input[class="mark"]').type('Teste nota')
})

When ("Preencher o campo OPINIAO",()=>{
    cy.get('textarea').type('Teste opinião')
})

When ("clicar no botão enviar",()=>{
    cy.get('button').click()
})

Then ("Exibe mensagem de envio",()=>{
})