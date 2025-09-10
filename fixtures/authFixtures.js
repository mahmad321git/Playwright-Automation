import { test as base } from '@playwright/test';

const test = base.extend({
  loggedInPage: async ({ page }, use) => {
    // Step 1: Go to website
    await page.goto('https://www.demoblaze.com/');

    // Step 2: Open login modal
    await page.click('#login2'); // "Log in" button opens modal

    // Step 3: Fill login details
    await page.fill('#loginusername', 'abc321321');   // use your test creds
    await page.fill('#loginpassword', 'abc');

    // Step 4: Submit form
    await page.click('button[onclick="logIn()"]');

    // Step 5: Wait until login succeeds (username displayed in navbar)
    await page.waitForSelector('#nameofuser');

    // Provide the logged-in page to the test
    await use(page);
  },
});

export default test;
export { expect } from '@playwright/test';