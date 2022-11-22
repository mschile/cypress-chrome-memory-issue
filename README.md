## Steps to reproduce:

1. Install dependencies
```bash
npm install
```
2. Run Cypress tests and observe memory crash in Chromium 104+
```
npm run cypress:run
```

## Force garbage collection

Forcing garbage collection through `--enable-gc` flag and calling `window.gc()` allows the tests to pass on Chromium 104+:
```
npm run cypress:run:force:gc
```
