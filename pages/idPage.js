const { I } = inject()

module.exports = {

    bookStoreCard: "//*[@id='app']/div/div/div[2]/div/div[6]",
    sideLoginBtn: "[class='btn btn-light active']",
    userNameField: "[placeholder='UserName']",
    passwordField: "[placeholder='Password']",
    loginConfirm: "[placeholder='Password']",
    idUserName: "#userName-value",


    selectBookStoreApp() {
        I.waitForVisible(this.bookStoreCard, 5)
        I.click(this.bookStoreCard)
    },
    setLogin() {
        I.waitForVisible(this.sideLoginBtn)
        I.click(this.sideLoginBtn)
    },
    inputUserName(UserName) {
        I.waitForVisible(this.userNameField)
        I.fillField(this.userNameField, UserName)
    },
    inputPassword(Password) {
        I.waitForVisible(this.passwordField)
        I.fillField(this.passwordField, Password)
    },
    checkLogin() {
        I.wait(5)
        I.seeElement(this.idUserName)
    },
}