import {test, expect} from '@playwright/test';
import { PimPage } from '../pages/pim.page';
import { AuthPage } from '../pages/auth.page';

test.beforeEach(async ({page}) =>
{
    const auth = new AuthPage(page);
    await auth.goto();
    await auth.login('Admin', 'admin123');
    await expect(page).toHaveURL(/\/dashboard\//);
});

test('TC-005: Edit employee personal details', async ({page}) =>
{
    const pim = new PimPage(page);
    await pim.gotoList();
    await pim.searchByName('Akshaya');
    await pim.openFirstRow();

    const editBtn = page.getByRole('button', { name: /^edit$/i}).first();
    if(await editBtn.isVisible())
        await editBtn.click();

    const marital = page.getByLabel(/Marital Status/).or(page.getByPlaceholder(/marital status/i)
    .or(page.locator('.oxd-input-group:has(label:has-text("Marital Status")) .oxd-select-text')));

    await marital.click();
    await page.getByRole('option', { name: /married/i }).first().click();
    

    const saveBtn = page.getByRole('button', { name: /^save$/i }).first();
    await saveBtn.click();

    const success = page.getByText(/success|updated/i).first();
    await expect(success).toBeVisible();


})