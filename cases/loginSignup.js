
Feature('Book store')

Scenario('login Book store', ({I, idPage}) => {
    I.amOnPage('/')
    idPage.selectBookStoreApp()
    idPage.setLogin()
    idPage.inputUserName("Bollywood")
    idPage.inputPassword("!VF8FDgkMn#EJb$")
    idPage.checkLogin()

})