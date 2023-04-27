import login from "./login"
import visitPage from "./access"
import pageAnalysis from "./analysisPage"

Cypress.on('uncaught:exception', (err, runnable) => { 
  // returning false here prevents Cypress from 
  // failing the test 
  return false 
})

//describe('Login Válido', () => {
//  it('passes', () => {
//    cy.visit('http://192.168.0.13/unilabnote/homol/#!/operacao/Composicoes');
//    cy.get('#login').type('uni\\COMACESSO');
//    cy.get('#password').type('1');
//    cy.get('#mob-button-login').click()
//  })
//})

//describe('Login Inválido', () => {
//  it('passes', () => {
//    cy.visit('http://192.168.0.13/unilabnote/homol/#!/operacao/Composicoes');
//    cy.get('#login').type('uni\\SEMACESSO');
//    cy.get('#password').type('1');
//    cy.get('#mob-button-login').click()
//  })
//})


describe('AL-SEA -  Consulta Filtro Data', () => {
  it('passes', () => {
    cy.visit('http://192.168.0.13/unilabnote/homol/#!/operacao/Composicoes');
    cy.get('#login').type('uni\\ali_searahmg');
    cy.get('#password').type('1');
    cy.get('#mob-button-login').click();
    cy.wait(20000)
    cy.get(':nth-child(1) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get('.child-item-search > .k-primary').click();
  })
})


describe('AL-SEA - Filtro Análise', () => {
  it('passes', () => {
    cy.visit('http://192.168.0.13/unilabnote/homol/#!/operacao/Composicoes');
    cy.get('#login').type('uni\\ali_searahmg');
    cy.get('#password').type('1');
    cy.get('#mob-button-login').click();
    cy.wait(20000)
    cy.get(':nth-child(1) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get('.k-multiselect-wrap > .k-input').type('Temperatura média');
    cy.get('.child-item-search > .k-primary').click();
 })
})

describe('AL-SEA - Filtro Amostra/Frasco', () => {
  it('passes', () => {
    cy.visit('http://192.168.0.13/unilabnote/homol/#!/operacao/Composicoes');
    cy.get('#login').type('uni\\ali_searahmg');
    cy.get('#password').type('1');
    cy.get('#mob-button-login').click();
    cy.wait(20000)
    cy.get(':nth-child(1) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get('#input-sample > .k-icon').click();
    cy.get('#filter-window-input').type('1234');
    cy.get('.k-window-actions > .k-button').click();
    cy.get('.child-item-search > .k-primary').click();
 })
})

describe('AL-SEA - Filtro Planilha', () => {
  it('passes', () => {
    cy.visit('http://192.168.0.13/unilabnote/homol/#!/operacao/Composicoes');
    cy.get('#login').type('uni\\ali_searahmg');
    cy.get('#password').type('1');
    cy.get('#mob-button-login').click();
    cy.wait(20000)
    cy.get(':nth-child(1) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get('#input-spreadsheet > .k-icon').click();
    cy.get('.k-window-actions > .k-button').click();
    cy.get('.child-item-search > .k-primary').click();
 })
})

describe('AL-SEA - Tipo de Data', () => {
  it('passes', () => {
    cy.visit('http://192.168.0.13/unilabnote/homol/#!/operacao/Composicoes');
    cy.get('#login').type('uni\\ali_searahmg');
    cy.get('#password').type('1');
    cy.get('#mob-button-login').click();
    cy.wait(20000)
    cy.get(':nth-child(1) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get(':nth-child(2) > :nth-child(1) > .k-widget > .k-dropdown-wrap > .k-input').type('Data de Coleta');
    cy.get('.child-item-search > .k-primary').click();
 })
})

describe('AL-SEA - Somente Pendentes', () => {
  it('passes', () => {
    cy.visit('http://192.168.0.13/unilabnote/homol/#!/operacao/Composicoes');
    cy.get('#login').type('uni\\ali_searahmg');
    cy.get('#password').type('1');
    cy.get('#mob-button-login').click();
    cy.wait(20000)
    cy.get(':nth-child(1) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get('#filtro-somente-pendente').click();
    cy.get('.child-item-search > .k-primary').click();
 })
})

describe('AL-SEA - Limpar Filtros', () => {
  it('passes', () => {
    cy.visit('http://192.168.0.13/unilabnote/homol/#!/operacao/Composicoes');
    cy.get('#login').type('uni\\ali_searahmg');
    cy.get('#password').type('1');
    cy.get('#mob-button-login').click();
    cy.wait(20000)
    cy.get(':nth-child(1) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get('[ng-click="composicoesFilter.clearFilters()"]').click();
    cy.get('.child-item-search > .k-primary').click();
 })
})


describe('AL-SEA -  Lista Exclusão Composição', () => {
  it('passes', () => {
    cy.visit('http://192.168.0.13/unilabnote/homol/#!/operacao/Composicoes');
    cy.get('#login').type('uni\\ali_searahmg');
    cy.get('#password').type('1');
    cy.get('#mob-button-login').click();
    cy.wait(20000)
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get('[ng-click="operacao.openWindowCompositionsToDeleteComposition()"]').click();
    //cy.get('.k-window-actions > .k-button').click();
  })
})



//describe('AL-SEA -  Nova  Composição', () => {
//  it('passes', () => {
//    cy.visit('http://192.168.0.13/unilabnote/homol/#!/operacao/Composicoes');
//    cy.get('#login').type('uni\\ali_searahmg');
//    cy.get('#password').type('1');
//    cy.get('#mob-button-login').click();
//    cy.wait(20000)
//    cy.get(':nth-child(2) > .k-state-selected').click();
//    cy.get(':nth-child(2) > .k-state-selected').click();
//    cy.get(':nth-child(2) > .k-state-selected').click();
//    cy.get('.child-item-search > .k-primary').click();
//    cy.wait(20000)
//    cy.get('div[class="k-grid-content k-auto-scrollable"] td[class="ellipsisClass"] input[class="k-checkbox"]').first().click();
//    cy.get('[ng-click="operacao.addNewComposition()"]').click();
    
//  })
//})
/// testing 1

describe('AL-SEA -  Legenda', () => {
  beforeEach(() => {
    visitPage.visitUnicorpPage()
    login.clickOnSignin()
    cy.wait(10000)
    login.elements.btnRowCentralAlimento().click();
    cy.wait(10000)
    login.elements.btnRowSeaFisicoQuimica().click({ force: true });   
    cy.wait(10000)
    login.elements.btnRowFisicoQuimicaSea().click();
    cy.wait(40000)
    pageAnalysis.elements.inputInitialDate().first().clear()
    pageAnalysis.elements.inputInitialDate().first().type("01/01/2022")
    cy.wait(5000)
  });

    it('Observacao de resultados', () => {
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
        cy.log("Sucesso")
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

  it('Pesquisa Data', () => {
    pageAnalysis.elements.btnSearch().click()
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
});
////testing 2
describe('AL-SEA -  Alterar Composição', () => {
  it('passes', () => {
    cy.visit('http://192.168.0.13/unilabnote/homol/#!/operacao/Composicoes');
    cy.get('#login').type('uni\\ali_searahmg');
    cy.get('#password').type('1');
    cy.get('#mob-button-login').click();
    cy.wait(20000)
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get('.child-item-search > .k-primary').click();
    cy.wait(20000)
    cy.get('div[class="k-grid-content k-auto-scrollable"] td[class="ellipsisClass"] input[class="k-checkbox"]').first().click();
    cy.get('[ng-click="operacao.openWindowCompositionsToChangeSelectedAnalysisComposition()"]').click();
    cy.get('.k-window-actions > .k-button').click();
  })
})

describe('AL-SEA -  Legenda', () => {
  it('passes', () => {
    cy.visit('http://192.168.0.13/unilabnote/homol/#!/operacao/Composicoes');
    cy.get('#login').type('uni\\ali_searahmg');
    cy.get('#password').type('1');
    cy.get('#mob-button-login').click();
    cy.wait(20000)
    cy.get(':nth-child(1) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get('#composicoes-grid > .k-toolbar > div > .k-button').click();
    cy.get('.k-window-actions > .k-button').click();
  })
})

//Funcionando seleção do grid  -Não usar
//describe('AL-SEA -  Selecionar Registro do Grid e Alterar', () => {
//  it('passes', () => {
//    cy.visit('http://192.168.0.13/unilabnote/homol/#!/operacao/Composicoes');
//    cy.get('#login').type('uni\\ali_searahmg');
//    cy.get('#password').type('1');
//    cy.get('#mob-button-login').click();

//    cy.wait(20000)
//    cy.get(':nth-child(1) > .k-state-selected').click();
//    cy.get(':nth-child(2) > .k-state-selected').click({ force: true });
//    cy.get(':nth-child(2) > .k-state-selected').click();
//    cy.get('.child-item-search > .k-primary').click();
    
//    cy.wait(20000)
//    cy.get('div[class="k-grid-content k-auto-scrollable"] td[class="ellipsisClass"] input[class="k-checkbox"]').first().click();
    //cy.get('[ng-click="operacao.addNewComposition()"]').click();   
//  })
//})


describe('AL-SEA -  Composição', () => {
    it('passes', () => {
    cy.visit('http://192.168.0.13/unilabnote/homol/#!/operacao/Composicoes');
    cy.get('#login').type('uni\\ali_searahmg');
    cy.get('#password').type('1');
    cy.get('#mob-button-login').click();

    cy.wait(20000)
    cy.get(':nth-child(1) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click({ force: true });
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get('.child-item-search > .k-primary').click();
    
    cy.wait(20000)
    cy.get('div[class="k-grid-content k-auto-scrollable"] td[class="ellipsisClass"] input[class="k-checkbox"]').first().click();
    cy.get('[ng-click="operacao.openWindowCompositionsToDeleteComposition()"]').click();
    cy.get('.confirm-footer > .ng-scope').click();

  })
})

describe('AL-SEA -  Resultados  - Corrigir' , () => {
  it('passes', () => {
    cy.visit('http://192.168.0.13/unilabnote/homol/#!/operacao/Composicoes');
    cy.get('#login').type('uni\\ali_searahmg');
    cy.get('#password').type('1');
    cy.get('#mob-button-login').click();

    cy.wait(20000)
    cy.get(':nth-child(1) > .k-state-selected').click();
    cy.get(':nth-child(2) > .k-state-selected').click({ force: true });
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get('.child-item-search > .k-primary').click();
    
    cy.wait(20000)
    cy.get('div[class="k-grid-content k-auto-scrollable"] td[class="ellipsisClass"] input[class="k-checkbox"]').first().click();
    cy.contains('Corrigir').click();
    //cy.get('.confirm-footer > .k-button').click();
  })    
})


describe('AL-SEA -  Resultado da Análise Calcular' , () => {
  it('passes', () => {
    cy.visit('http://192.168.0.13/unilabnote/homol/#!/operacao/Composicoes');
    cy.get('#login').type('uni\\ali_searahmg');
    cy.get('#password').type('1');
    cy.get('#mob-button-login').click();

    cy.wait(20000)
    cy.get(':nth-child(1) > .k-state-selected').click();
    //cy.get('li[class="k-state-selected k-state-active ng-binding"] span[class="k-icon k-i-check ng-hide"]').contains('AL-SEA - Laboratório Central de Alimentos Seara ');
    cy.get(':nth-child(2) > .k-state-selected').click({ force: true });
    cy.get(':nth-child(2) > .k-state-selected').click();
    cy.get('.child-item-search > .k-primary').click();
    
    cy.wait(20000)
    cy.get('div[class="k-grid-content k-auto-scrollable"] td[class="ellipsisClass"] input[class="k-checkbox"]').first().click();
    //Botão Resultado da análise
    cy.contains('Resultado da análise').click();
    //Calcular
    cy.wait(20000)
    cy.get('[ng-click="operacao.calcFormula()"]').click();
    //Confirma Valores
    cy.wait(20000)
    cy.get('[ng-click="operacao.confirmValues(false)"]').click();
    //Confirmar valores nessa análise
    //cy.wait(20000)
    //cy.get('[ng-click="operacao.confirmValues(true)"]').click();


    //Conectar instrumentos
    //cy.get('#connection-serial-btn').click()
    //Etiqueta
    //cy.get('[ng-click="operacao.openTagPrinterWindow()"]').click()
    //confirmar valores
    //cy.get('[ng-click="operacao.confirmValues(false)"]').click();
    //cy.get('.k-widget.k-state-focused > .ng-isolate-scope > :nth-child(1) > [k-window-transclude=""] > #window-confirm > .confirm-footer > .k-button').click();
    //Replicar Valores
    //cy.get('[ng-click="operacao.replicateValuesWithCalc()"]').click();
    //Legenda
    //cy.get('#valores-intermediarios-legenda').click();
    
  })
})

