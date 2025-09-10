class EmployeeFormPage {
    constructor(page)
    {
        this.firstName = page.locator('input[name="firstName"]');
        this.middleName = page.locator('input[name="middleName"]');
        this.lastName = page.locator('input[name= "lastName"]');
        this.employeeId = page.locator('//label[text()="Employee Id"]/following::input[1]');
        this.photUpload = page.locator('input[type="file"]');
        this.saveBtn = page.getByRole('button', {name: "save"});

    }

    async fillBasics({first, middle, last, id})
    {
        await this.firstName.fill(first);
        await this.middleName.fill(middle);
        await this.lastName.fill(last);
        await this.employeeId.fill(id);
    }
    
    async uploadPhoto(path)
    {
        await this.photUpload.setInputFiles(path);
        await this.photUpload.waitFor({state: 'attached'});
    }

    async invalidUploadPhoto(path)
    {
        await this.photUpload.setInputFiles(path);
    }

    async save()
    {
        await this.saveBtn.click();
    }

}

module.exports = {EmployeeFormPage};