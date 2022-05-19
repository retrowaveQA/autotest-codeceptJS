Feature('test')

Scenario('test', ({ I, mainPage }) => {
    I.amOnPage('https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all')
    I.wait(5)
    mainPage.restoreDataBase()
    });

