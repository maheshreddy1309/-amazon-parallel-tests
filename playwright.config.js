const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  timeout: 90000,
  use: {
    browserName: 'chromium',
    headless: false
  }
});
