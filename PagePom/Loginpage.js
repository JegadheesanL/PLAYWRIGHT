export class LoginPage{
    constructor(page){
        this.page=page
        this.uname=page.locator('//input[@id="username"]')
        this.pword=page.locator('//input[@id="password"]')
        this.button=page.locator('//input[@id="login"]')
    }

    async url()
    {
        await this.page.goto('https://adactinhotelapp.com/index.php')
    }
    async username()
    {
        await this.uname.fill('Jegadheesan')
    }
    async password()
    {
        await this.pword.fill('Jega@123')
    }
    async click()
    {
        await this.button.click()
    }
}