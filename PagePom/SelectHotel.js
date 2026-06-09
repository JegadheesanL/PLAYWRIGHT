export class SelectHotel{
    constructor(page)
    {
        this.Select=page.locator('//input[@id="radiobutton_0"]')
        this.continue=page.locator('//input[@id="continue"]')
    }
    async selectHotel()
    {
        await this.Select.click()
    }
    async clickContinue()
    {
        await this.continue.click()
    }
}