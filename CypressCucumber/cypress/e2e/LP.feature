Feature: Landing Page

    Feature responsavel pela validação da Landing Page
    Scenario: Sucesso
        Given Que já acessei minha LP
        When Preencher o campo DATA
        When Preencher o campo NOTA
        When Preencher o campo OPINIAO
        When clicar no botão enviar
        Then Exibe mensagem de envio