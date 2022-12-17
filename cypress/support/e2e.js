afterEach(() => {
  Cypress.automation('remote:debugger:protocol', { command: 'HeapProfiler.collectGarbage' })
})
