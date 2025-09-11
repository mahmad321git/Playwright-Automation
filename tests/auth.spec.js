const {test, expect} =  require('@playwright/test');
const {AuthPage} = require('../pages/auth.page.js');

test('TC-001: Login with Valid Credentials', async ({page}) => 
{
    const auth = new AuthPage(page);
    await auth.goto();
    await auth.login('Admin','admin123');
    await expect(page).toHaveURL(/dashboard/);
});

test('TC-002: Login with invalid Password', async ({page}) =>
{
    const auth = new AuthPage(page);
    await auth.goto();
    await auth.login('Admin', 'Wrong');
    const error = page.getByText('Invalid credentials');
    await expect(error).toBeVisible();
});