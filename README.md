## Prerequisites:

1. Node installed (v16.18.0 was used in testing)
2. Chromium browser v107 installed

## Steps to reproduce:

1. Install dependencies
```bash
npm install
```
2. Run Cypress tests and observe memory crash in Chromium 104+

###### Headless browser:
```
npm run cypress:run
```
###### Headed:
```
npm run cypress:open
```
* Select `spec.cy.js` to run the test

## Force garbage collection

Forcing garbage collection through `HeapProfiler.collectGarbage` allows the tests to pass on Chromium 104+:

###### Headless browser:
```
npm run cypress:run:force:gc
```

###### Headed:
```
npm run cypress:open:force:gc
```
* Select `spec.cy.js` to run the test
