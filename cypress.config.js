module.exports = {
  e2e: {
    baseUrl: 'https://google.com/',
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' || browser.name === 'chromium') {    
          launchOptions.args.push('--js-flags=--expose-gc')
        }

        return launchOptions
      })
    },
  },
}
