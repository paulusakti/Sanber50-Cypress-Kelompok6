
class homePage {
    elements = {
        signInBtn: () => cy.getClass("header links").contains(/sign in/i),
        createAnAccount: () => cy.getClass("header links").contains(/create an account/i),
        searchProdut: () => cy.getId("search"),
        shoppingCart: () => cy.getClass("minicart-wrapper"),
        womenNavBar: () => cy.getId('ui-id-4').contains(/women/i),
        womenTopsNavBar: () => cy.getId('ui-id-9').contains(/tops/i),
        womenPantsNavBar: () => cy.getId('ui-id-10').contains(/bottoms/i),
        menNavBar: () => cy.getId('ui-id-5').contains(/men/i),
        gearNavBar: () => cy.getId('ui-id-6').contains(/gear/i),
        trainingNavBar: () => cy.getId('ui-id-7').contains(/training/i),
        saleNavBar: () => cy.getId('ui-id-8').contains(/sale/i),
    }

    clickOnSignin() {
        this.elements.signInBtn().click()
    }
    clickOnCreateAnAccount() {
        this.elements.createAnAccount().click()
    }
}
module.exports = new homePage();