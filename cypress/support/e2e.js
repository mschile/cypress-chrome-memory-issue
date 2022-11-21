afterEach(() => {
  if (window.top.gc && Cypress.env('FORCE_GC') === true) {
    for (let index = 0; index < 5; index++) {
      window.top.gc()
    }
  }
})
