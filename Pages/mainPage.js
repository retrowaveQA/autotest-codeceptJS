const { I } = inject();

module.exports = {
///Your Database - block
    customersTabl: '//*[@id="yourDB"]/table/tbody/tr[2]/td[1]'
    categoriesTabl: '//*[@id="yourDB"]/table/tbody/tr[3]/td[1]'
    employeesTabl: '//*[@id="yourDB"]/table/tbody/tr[4]/td[1]'
    orderDetailsTabl: '//*[@id="yourDB"]/table/tbody/tr[5]/td[1]'
    productsTabl: '//*[@id="yourDB"]/table/tbody/tr[7]/td[1]'
    shippersTabl: '//*[@id="yourDB"]/table/tbody/tr[8]/td[1]'
    suppliersTabl: '//*[@id="yourDB"]/table/tbody/tr[9]/td[1]'
    restoreDataBaseBtn: '#restoreDBBtn'
/// SQL Statement - field
    statementField: '//*[@id="tryitform"]/div/div[6]/div[1]'
    runSqlBtn: '/html/body/div[2]/div/div[1]/div[1]/button'


    restoreDataBase() {
        I.seeElement(this.restoreDataBaseBtn)
        I.click(this.restoreDataBaseBtn)
    },
}
