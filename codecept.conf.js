const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
    setHeadlessWhen(process.env.HEADLESS);
const standDomain = 'https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all'


const config = {
  tests: './Cases/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: standDomain,
      show: true,
      browser: 'chromium',
      windowSize: '1920x1080',
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