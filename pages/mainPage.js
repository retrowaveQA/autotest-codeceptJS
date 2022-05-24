
const {I} = inject();


module.exports = {
    URL: 'https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where',

    resultTable: '[class*=ws-table-all]',
    runBtn: '[class*=ws-btn]',

    customersTabl: '//*[@id="yourDB"]/table/tbody/tr[2]/td[1]',
    customerID: '//*[@id="divResultSQL"]/div/table/tbody/tr[1]/th[1]',
    categoriesTabl: '//*[@id="yourDB"]/table/tbody/tr[3]/td[1]',
    categoryID: '//*[@id="divResultSQL"]/div/table/tbody/tr[1]/th[1]',
    employeesTabl: '//*[@id="yourDB"]/table/tbody/tr[4]/td[1]',
    employeeID: '//*[@id="divResultSQL"]/div/table/tbody/tr[1]/th[1]',
    orderDetailsTabl: '//*[@id="yourDB"]/table/tbody/tr[5]/td[1]',
    orderDetailID: '//*[@id="divResultSQL"]/div/table/tbody/tr[1]/th[1]',
    ordersTabl: '//*[@id="yourDB"]/table/tbody/tr[6]/td[1]',
    orderID: '//*[@id="divResultSQL"]/div/table/tbody/tr[1]/th[1]',
    productsTabl: '//*[@id="yourDB"]/table/tbody/tr[7]/td[1]',
    productID: '//*[@id="divResultSQL"]/div/table/tbody/tr[1]/th[1]',
    shippersTabl: '//*[@id="yourDB"]/table/tbody/tr[8]/td[1]',
    shipperID: '//*[@id="divResultSQL"]/div/table/tbody/tr[1]/th[1]',
    suppliersTabl: '//*[@id="yourDB"]/table/tbody/tr[9]/td[1]',
    supllierID: '//*[@id="divResultSQL"]/div/table/tbody/tr[1]/th[1]',
    restoreDataBaseBtn: '#restoreDBBtn',

    statementField: '#tryitform',
    runSqlBtn: '[class*=ws-btn]',

    clickRunSQLBtn() {
        I.waitForClickable(this.runBtn);
        I.click(this.runBtn);
        I.waitForVisible(this.resultTable);
    },

    async CheckAddressForName(rowAddress, rowName) {
        const loc1 = `//tr/td[contains(text(), "${rowAddress}")]`
        const loc2 = `//td[contains(text(), "${rowName}")]`
        const loc3 = `//td[contains(text(), '${rowName}')]/../td[1]`
        const loc4 = `//td[contains(text(), '${rowAddress}')]/../td[1]`
        const rowNub1 = await I.grabTextFrom(loc3)
        const rowNub2 = await I.grabTextFrom(loc4)
        console.log(rowNub1)
        console.log(rowNub2)

        if ( rowNub1 == rowNub2) {
            I.waitForVisible(loc1, 10);
            I.waitForVisible(loc2, 10);
        }


    },


    customersTablOpen() {
        I.seeElement(this.customersTabl)
        I.click(this.customersTabl)
        I.seeElement(this.customerID)
    },

    categoriesTablOpen() {

        I.seeElement(this.categoriesTabl)
        I.click(this.categoriesTabl)
        I.seeElement(this.categoryID)
    },

    employeesTablOpen() {
        I.seeElement(this.employeesTabl)
        I.click(this.employeesTabl)
        I.seeElement(this.employeeID)
    },

    orderDetailsTablOpen() {
        I.seeElement(this.orderDetailsTabl)
        I.click(this.orderDetailsTabl)
        I.seeElement(this.orderDetailID)
    },

    ordersTablOpen() {
        I.seeElement(this.ordersTabl)
        I.click(this.ordersTabl)
        I.seeElement(this.orderID)
    },

    productsTablOpen() {
        I.seeElement(this.productsTabl)
        I.click(this.productsTabl)
        I.seeElement(this.productID)
    },

    shippersTablOpen() {
        I.seeElement(this.shippersTabl)
        I.click(this.shippersTabl)
        I.seeElement(this.shipperID)
    },

    suppliersTablOpen() {
        I.seeElement(this.suppliersTabl)
        I.click(this.suppliersTabl)
        I.seeElement(this.supllierID)
    },

    sqlField(statementField) {
        I.seeElement(this.statementField)
        I.clearField(this.statementField)
        I.fillField(this.statementField)
        I.seeElement(this.runSqlBtn)
        I.click(this.runSqlBtn)
    },

    sqlBtn() {
        I.click(this.runSqlBtn)

    },

    restoreDataBase() {
        I.seeElement(this.restoreDataBaseBtn)
        I.click(this.restoreDataBaseBtn)
    },
}
