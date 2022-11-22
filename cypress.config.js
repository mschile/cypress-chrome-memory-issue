module.exports = {
  numTestsKeptInMemory: 0,
  video: false,
  e2e: {
    baseUrl: 'https://earth.google.com/web/',
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' || browser.name === 'chromium') {    
          launchOptions.args.push('--js-flags=--expose-gc')
          // launchOptions.args.push('--enable-logging=stderr')
          // launchOptions.args.push('--v=1')
        }

        return launchOptions
      })
    },
  },
}
