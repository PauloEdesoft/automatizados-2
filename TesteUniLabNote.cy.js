import login from "./login"
import visitPage from "./access"
import pageAnalysis from "./analysisPage"


//describe('AL-SEA -  Consulta Filtro Data', () => {
//  it('passes', () => {
//    visitPage.visitUnicorpPage()
//    login.clickOnSignin()
//    login.elements.btnRowCentralAlimento().click();
//    login.elements.btnRowSeaFisicoQuimica().click({ force: true });   
//    login.elements.btnRowFisicoQuimicaSea().click();
//    pageAnalysis.elements.inputInitialDate().first().clear()
//    pageAnalysis.elements.inputInitialDate().first().type("01/01/2023")
//    cy.wait(5000)
//    pageAnalysis.elements.btnSearch().click()
//  })
//})

describe('AL-SEA -  Filtros de Pesquisa', () => {
  context('Dado que acesso a página do Sistema UniCorp', () => {
    beforeEach(() => {
      visitPage.visitUnicorpPage()
      login.clickOnSignin()
      login.elements.btnRowCentralAlimento().click();
      login.elements.btnRowSeaFisicoQuimica().click({ force: true });   
      login.elements.btnRowFisicoQuimicaSea().click();
    })

    it('Quando Informo uma Data de Pesquisa e seleciono um item da Lista', () => {    
       pageAnalysis.elements.inputInitialDate().first().clear({ force: true })
       cy.wait(5000)
       pageAnalysis.elements.inputInitialDate().first().type("01/01/2023")
       cy.wait(5000)
       pageAnalysis.elements.btnSearch().click()
       cy.get('div[class="k-grid-content k-auto-scrollable"] td[class="ellipsisClass"] input[class="k-checkbox"]').first().click();
       cy.contains("Gerar amostras para calcular a Adição de Padrão").click()
       
       cy.wait(30000)
       //Incluir analise
       pageAnalysis.elements.firstCheckBox().first().click();
       pageAnalysis.elements.btnoptions().click();
       pageAnalysis.elements.btnIncludeAnalysis().click()
       cy.wait(5000)
       pageAnalysis.elements.firstCheckBoxChooseAnalyze().first().click()
       pageAnalysis.elements.btnConfirmChooseAnalyze().click()
       cy.wait(5000)
       //Gerar amostras para calcular a Adição de Padrão
       //cy.contains("Gerar amostras para calcular a Adição de Padrão").click()
      });
      
  })
})