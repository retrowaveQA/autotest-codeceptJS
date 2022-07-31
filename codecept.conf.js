
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
    idPage: './pages/idPage.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs',
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
  },

};


exports.config = config;