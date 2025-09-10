class PimPage {
    constructor(page)
    {
        this.page = page;
        this.pimLink = page.locator('a[href*="/web/index.php/pim/viewPimModule"]');
        this.addBtn = page.locator('button:has-text("Add")');
        this.searchName = page.locator('//label[text()="Employee Name"]/following::input[1]');
        this.searchBtn = page.getByRole('button',{name:"search"});
        this.table = page.locator('.oxd-table, table');
    }
    
    async gotoList()
    {
        await this.pimLink.click();
        await this.page.waitForURL(/\/pim\//,{timeout: 10000});
        await this.addBtn.waitFor();
    }

    async openAdd()
    {
        await this.addBtn.click();
    }
    
    async searchByName(name)
    {
        await this.searchName.fill(name);
        if(await this.searchBtn.isVisible())
            await this.searchBtn.click();
    }

    async deleteByName(name)
    {
        const row = this.table.locator('div[role="row"]').filter({hasText: name});
        const deleteBtn = row.locator('button:has(.oxd-icon.bi-trash)').first();
        await deleteBtn.click();
        const confirmBtn = this.page.getByRole('button', {name: /yes|ok|confirm|delete/i}).first();
        await confirmBtn.click();
    }

    rowByText(text)
    {
        return this.table.getByRole('row').filter({ hasText: /Muhammad\s+Ahmad/i }).first();
    }

    async openFirstRow() {
        const firstClickable = this.table.locator('a, button').first();
        await firstClickable.click();
    }

}

module.exports = {PimPage};
