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

test('TC-006: Delete employee and confirm removal', async ({page}) =>
{
    const pim = new PimPage(page);
    await pim.gotoList();
    await pim.searchByName('Ash J');
    await pim.deleteByName('Ash J');
    await pim.searchByName('Ash J');
    const empty =  page.getByText(/no records found|no data| not found/i).first();
    await expect(empty).toBeVisible();

})