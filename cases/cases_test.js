Feature('test task')

const SQL = "'SELECT * FROM Customers WHERE ContactName = 'Giovanni Rovelli' AND Address = 'Via Ludovico il Moro 22'"

Scenario('task1', ({ I, mainPage }) => {
    I.amOnPage('https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_where')
    I.executeScript(`window.editor.doc.setValue('${SQL}')`)
    pause()
    });

