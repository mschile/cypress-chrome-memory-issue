let count = 0
afterEach(() => {
  count++
  if (Cypress.env('FORCE_GC') && count % 10 === 0) {
    Cypress.automation('remote:debugger:protocol', { command: 'HeapProfiler.collectGarbage' })
  }
})
