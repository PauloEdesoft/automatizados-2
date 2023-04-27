import login from "./login"
import visitPage from "./access"
import pageAnalysis from "./analysisPage"
//cypress\integration\page_objects

describe('AL-SEA -  Sistema Unicorp', () => {
  beforeEach(() => {
    visitPage.visitUnicorpPage()
    login.clickOnSignin()
    cy.wait(1000)
    login.elements.btnRowCentralAlimento().click();
    cy.wait(1000)
    login.elements.btnRowSeaFisicoQuimica().click({ force: true });   
    cy.wait(10000)
    login.elements.btnRowFisicoQuimicaSea().click();
    cy.wait(10000)
    //pageAnalysis.elements.inputInitialDate().first().clear()
    //pageAnalysis.elements.inputInitialDate().first().type("01/01/2022")
    cy.wait(10000)
  });

    it('Pesquisar por Data', () => {
      pageAnalysis.elements.inputInitialDate().first().clear()
      pageAnalysis.elements.inputInitialDate().first().type("01/01/2022")
      pageAnalysis.elements.btnSearch().click()
    });

    it('Filtro Análises', () => {
      cy.get('.k-multiselect-wrap > .k-input').type('Temperatura média');
      cy.get('.child-item-search > .k-primary').click();
    });
  
    it('Filtro Amostra/Frasco', () => {
      cy.get('#filter-window-input').type('1234');
      cy.get('.k-window-actions > .k-button').click();
      cy.get('.child-item-search > .k-primary').click();
    });
  
    it('Filtro Planilha', () => {
      cy.get('#input-spreadsheet > .k-icon').click();
      cy.get('.k-window-actions > .k-button').click();
      cy.get('.child-item-search > .k-primary').click();
    });

    it('Filtro somente pendentes', () => {
      cy.get('#filtro-somente-pendente').click();
      cy.get('.child-item-search > .k-primary').click();
    });

    it('Limpar Filtros', () => {
      cy.get('[ng-click="composicoesFilter.clearFilters()"]').click();
      cy.get('.child-item-search > .k-primary').click();
    });

    it('Lista exclusão de composição', () => {
      cy.get('[ng-click="operacao.openWindowCompositionsToDeleteComposition()"]').click();
      //cy.get('.k-window-actions > .k-button').click();
    });


   it('Resultados', () => {
      //Ao clicar no botão Resultados está aparecendo uma tela diferente da tela de Resultados (Status da Análise diferente do esperado(Roxo))
      pageAnalysis.elements.btnSearch().click()
      cy.wait(20000)
      pageAnalysis.elements.firstCheckBox().first().click();
      pageAnalysis.elements.btnResults().click()
      cy.wait(8000)
    });

    it('Incluir Analises', ()=> {
      pageAnalysis.elements.btnSearch().click()
      cy.wait(30000)
      pageAnalysis.elements.firstCheckBox().first().click();
      pageAnalysis.elements.btnoptions().click();
      pageAnalysis.elements.btnIncludeAnalysis().click()
      cy.wait(5000)
      pageAnalysis.elements.firstCheckBoxChooseAnalyze().first().click()
      pageAnalysis.elements.btnConfirmChooseAnalyze().click()
      cy.wait(5000)
    });


    it('Corrigir Analise', () => {
      pageAnalysis.elements.btnSearch().click()
      cy.wait(9000)
      pageAnalysis.elements.firstCheckBox().first().click();
      pageAnalysis.elements.btnToCorrect().click();
      cy.wait(5000)

      cy.on('uncaught:exception', () => {
        cy.contains("A(s) análise(s) selecionada(s) já foram realizada(s). Deseja realmente alterá-la(s)?").should('exist')
        pageAnalysis.elements.btnConfirmCorrection().click()
        cy.wait(9000)
        cy.contains("Análise(s) voltaram para pendente com sucesso")
        
        done()
        cy.log("sucesso")
          return false
      })

      //if (cy.contains("A(s) análise(s) selecionada(s) já foram realizada(s). Deseja realmente alterá-la(s)?").should('exist')) {
      //  pageAnalysis.elements.btnConfirmCorrection().click()
      //  cy.wait(9000)
      //  cy.contains("Análise(s) voltaram para pendente com sucesso")
        
      //} else {
      //  print("teste123")
     // }
  });


  it('Nova Composicao', ()=>{
    pageAnalysis.elements.btnSearch().click()
    cy.wait(9000)
    pageAnalysis.elements.firstCheckBox().first().click();
    pageAnalysis.elements.newComposition().click();
      
    if (pageAnalysis.elements.confirmChangeAnalysis().should('exist')) {
        pageAnalysis.elements.btnOkWindowWarning().click()
        pageAnalysis.elements.firstCheckBox().first().click();
        pageAnalysis.elements.secondCheckBox()
    } else {
      pageAnalysis.elements.successMessageNewComposition().should('equal', 'criada com sucesso!')
      cy.contains('criada com sucesso!')
    };
  });    
    
  it('Alterar Composicao', ()=>{
    cy.wait(1000)
      pageAnalysis.elements.btnSearch().click()
    pageAnalysis.elements.firstCheckBox().first().click();
    pageAnalysis.elements.btnChange().click();
    cy.wait(1000)
    pageAnalysis.elements.btnChooseRowCompositionForChange().first().click()
    cy.wait(5000)
    pageAnalysis.elements.btnChangeCompositionOk().click()
    cy.wait(1000)
    pageAnalysis.elements.btnYesChangeComposition().first().click()
    cy.contains('Análises alteradas com sucesso!')
  });

  it('Observacao de resultados', () => {
    pageAnalysis.elements.inputInitialDate().first().clear()
    pageAnalysis.elements.inputInitialDate().first().type("01/01/2022")
    pageAnalysis.elements.btnSearch().click()
    pageAnalysis.elements.firstCheckBox().first().click();
    pageAnalysis.elements.btnObservacao().first().click();
    cy.wait(5000)
    pageAnalysis.elements.inputObservationType().type("Amostra Será coletada em outro dia da Semana")
    cy.wait(1000) 
    cy.contains("Amostra Será coletada em outro dia da Semana").click()
    cy.contains("OK").click()
    cy.contains("Observação inserida com sucesso!")
});

  it('Resutados Corrigir', () => {
    cy.get('div[class="k-grid-content k-auto-scrollable"] td[class="ellipsisClass"] input[class="k-checkbox"]').first().click();
    cy.contains('Corrigir').click();
    //cy.get('.confirm-footer > .k-button').click();
  }) ; 

  
});