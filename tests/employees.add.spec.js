import {test, expect} from '@playwright/test';
import { PimPage } from '../pages/pim.page';
import { EmployeeFormPage } from '../pages/employee-form.page';
import { AuthPage } from '../pages/auth.page';
const path = require('path');


test.describe('Employees', ()=>
{
    test.beforeEach(async ({page}) =>
    {
        const auth = new AuthPage(page);
        await auth.goto();
        await auth.login('Admin','admin123');
        await expect(page).toHaveURL(/\/dashboard\//);
    });

    test('TC-003: Add new employee with profile Picture', async ({page}) =>
    {
        const pim = new PimPage(page);
        const form = new EmployeeFormPage(page);

        await pim.gotoList();
        await pim.openAdd();

        await form.fillBasics({first:'Muhammad', middle:'Ahmad', last:'Idrees', id:'54654' });

        const photoPath = path.resolve(__dirname, '../data/qa automation.png');
        
        await form.uploadPhoto(photoPath);

        await form.save();

        //Verify Via Search List
        await pim.gotoList();
        await pim.searchByName('Muhammad');
        await expect(pim.rowByText('Muhammad Ahmad')).toBeVisible();

    });

    test('TC-004: Upload Invalid file type shows error on Add Employee photo', async({page}) =>
    {
        const pim = new PimPage(page);
        const form = new EmployeeFormPage(page);

        await pim.gotoList();
        await pim.openAdd();

        const invalidPath = path.resolve(__dirname, '../data/output.txt');
        await form.invalidUploadPhoto(invalidPath);

        const error = page.getByText('File type not allowed');
        await expect(error).toBeVisible();

    });

});