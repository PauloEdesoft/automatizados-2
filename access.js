class accessPage{

    visitUnicorpPage(){
        cy.setCookie('uniMobserviceUrl', 'http://192.168.0.13:8092/mobservice');
        cy.visit('http://192.168.0.13/unilabnote/homol/#!/operacao/Composicoes');
    }
}
module.exports = new accessPage();