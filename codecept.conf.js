const { setHeadlessWhen } = require('@codeceptjs/configure');

const standDomain = 'https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all'


const config = {
  tests: './cases/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: standDomain,
      show: true,
      browser: 'chromium',
      windowSize: '1920x1080',
      wait: 5,
    },
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/mainPage.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs'

};


exports.config = config;