class homePage{

    elements = {
        inputLogin : () => cy.get("#login"),
        passwordInput : () => cy.get("#password"),
        btnEntrar : ()=> cy.get("#mob-button-login"),
        btnRowCentralAlimento : ()=> cy.get(':nth-child(1) > .k-state-selected'),
        btnRowSeaFisicoQuimica : ()=> cy.get(':nth-child(2) > .k-state-selected'),
        btnRowFisicoQuimicaSea : ()=> cy.get(':nth-child(2) > .k-state-selected')
    }

    clickOnSignin(){
        this.elements.inputLogin().type('uni\\ali_searahmg')
        this.elements.passwordInput().type('1')
        this.elements.btnEntrar().click()
        cy.wait(10000)
    }
}


module.exports = new homePage();