const { setHeadlessWhen } = require('@codeceptjs/configure');

const standDomain = 'https://demoqa.com/'


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
    index: './pages/index.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs',
  plugins: {

  },

};


exports.config = config;