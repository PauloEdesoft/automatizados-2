class analysisPage{

    elements = {
        inputInitialDate : ()=> cy.get('input[class="child-item-second uni-datepicker-readonly-mobile k-input"]'),
       // btnSearch : ()=> cy.get('.child-item-search > .k-primary'),
        btnSearch : ()=> cy.get('div[class="filter-composicoes-body k-widget k-header"] div[class="child-item-search"] button[class="k-button k-primary"]'),
        firstCheckBox : ()=> cy.get('div[class="k-grid-content k-auto-scrollable"] td[class="ellipsisClass"] input[class="k-checkbox"]'),
        secondCheckBox : ()=> cy.get('div[class="k-grid-content k-auto-scrollable"] td[class="ellipsisClass"] input[class="k-checkbox"]')[3],
        newComposition : ()=> cy.get('[ng-click="operacao.addNewComposition()"]'),
        btnChange : ()=> cy.get('[ng-click="operacao.openWindowCompositionsToChangeSelectedAnalysisComposition()"]'),
        btnChooseRowCompositionForChange : ()=> cy.get('div[class="k-grid k-widget k-grid-display-block"]'),
       
        successMessageNewComposition : ()=> cy.get('div [class="growl-message ng-binding"]'),
        btnCloseConfirmChangeAnalysis : ()=> cy.get('(div [class="k-button k-flat k-button-icon k-window-action"])'),
        confirmChangeAnalysis : ()=> cy.get("#myKendoWindowundefined"),
        btnOkWindowWarning : ()=> cy.get('#button-ok'),
        btnChangeCompositionOk : ()=> cy.get('#button-ok'),
        btnYesChangeComposition : ()=> cy.get('div[class="footer-change-composition"] button[class="k-button k-primary ng-binding ng-scope"]'),
        messageChangeCompositionSuccess : ()=> cy.get('div[class="ng-isolate-scope"] div[class="growl-container growl-fixed bottom-center"] div[class="grow-item alert ng-scope alert-success icon alert-dismissable"]'),

        //Elements btn Observação
        btnObservacao : ()=> cy.get('button[ng-click="operacao.addObservation()"]'),
        inputObservationType : ()=> cy.get('#filterText'),

        //Elements btn Corrigir
        btnToCorrect : ()=> cy.get('div[class="ng-scope"] button[ng-click="operacao.correctSelectedAnali()"]'),
        btnConfirmCorrection : ()=> cy.get('div[class="ng-scope"] button[ng-click="dialog.confirmar()"]'),

        //Elements Btn Resultados
        btnResults : ()=> cy.get('div[class="ng-scope"]  button[class="k-button toolbar-button"] span[class="fa fa-check toolbar-icon"]'),

        //Elements button options
        btnoptions : ()=> cy.get('div[class="k-overflow-anchor k-button"]'),
        btnIncludeAnalysis : ()=> cy.get('ul[class="k-overflow-container k-list-container k-popup k-group k-reset k-state-border-up"] button[ng-click="operacao.includeAnalyzes()"]'),    

        //Elements Choose Analyze

        firstCheckBoxChooseAnalyze : ()=> cy.get('div[kendo-grid="operacao.gdEscolhaAnali"] div[class="k-grid-content k-auto-scrollable"] td[role="gridcell"]'),
        btnConfirmChooseAnalyze : ()=> cy.get('button[ng-click="operacao.confirm()"]')

     }
}


module.exports = new analysisPage();