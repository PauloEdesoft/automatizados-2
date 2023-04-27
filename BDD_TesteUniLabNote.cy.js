import login from "./login"
import visitPage from "./access"
import pageAnalysis from "./analysisPage"
//cypress\integration\page_objects


describe('Al SEA', () => {
  context('Dado que acesso o sistema Unicorp', () => {
    beforeEach(() => {
      visitPage.visitUnicorpPage()
    })

    context('Quando realizo o Login', () => {
      beforeEach(() => {
        login.clickOnSignin()
        cy.wait(1000)
      })

      it('Então acesso uma opção do menu', () => {
        login.elements.btnRowCentralAlimento().click();
        cy.wait(1000)
        login.elements.btnRowSeaFisicoQuimica().click({ force: true });   
        cy.wait(10000)
        login.elements.btnRowFisicoQuimicaSea().click();
        cy.wait(10000)
        pageAnalysis.elements.inputInitialDate().first().clear()
        pageAnalysis.elements.inputInitialDate().first().type("01/01/2022")
        cy.wait(10000)
        pageAnalysis.elements.btnSearch().click()
      })
    })

    context('Quando preencho uma data', () => {
      beforeEach(() => {
        pageAnalysis.elements.inputInitialDate().first().clear()
        pageAnalysis.elements.inputInitialDate().first().type("01/01/2022")
        cy.wait(10000)
        pageAnalysis.elements.btnSearch().click()
             
      })

      it('Então vejo uma lista de resultados sobre a data que procurei', () => {
        pageAnalysis.elements.btnSearch().click()
        cy.wait(10000)
      })
    })
  })
})


