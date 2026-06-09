export class BookingConfirmation{
    constructor(page){
        this.logout=page.locator('//input[@id="logout"]')
        this.logoutMsg=page.locator('//table//tbody//tr//td[@valign="top"]//table//tbody//tr//td[text()="You have successfully logged out. "]')
    }
    async clickLogout(){
       await this.logout.click()
    }
    async PrintLogoutMsg()
    {
      const Msg=await this.logoutMsg.textContent()
      console.log('The Msg is',Msg)
    }
}
//