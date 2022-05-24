Feature('test task')


const SQL1 = 'SELECT * FROM Customers';

Scenario('task1', async ({ I, mainPage }) => {
    I.amOnPage(mainPage.URL);
    I.executeScript(`window.editor.doc.setValue('${SQL1}')`);
    mainPage.clickRunSQLBtn();
    await mainPage.CheckAddressForName('Giovanni Rovelli','Via Ludovico il Moro 22');
    // pause();
    });

/*
1. Вывести все строки таблицы *Customers* и убедиться, что запись с ContactName равной ‘СGiovanni Rovelli’ имеет Address = ‘Via Ludovico il Moro 22’.
2. Вывести только те строки таблицы *Customers*, где city=‘London’. Проверить, что в таблице ровно 6 записей.
3. Добавить новую запись в таблицу *Customers* и проверить, что эта запись добавилась.
4. Обновить все поля (кроме CustomerID) в любой записи таблицы *Customers*и проверить, что изменения записались в базу.
5. Придумать собственный автотест и реализовать (тут все ограничивается только вашей фантазией).
 */