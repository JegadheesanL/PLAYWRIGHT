export class BookHotel{
constructor(page)
{
    this.firstName=page.locator('//input[@name="first_name"]')
    this.lastName=page.locator('//input[@name="last_name"]')
    this.billAddress=page.locator('//textarea[@id="address"]')
    this.creditCardNum=page.locator('//input[@id="cc_num"]')
    this.creditCardType=page.locator('//select[@id="cc_type"]')
    this.expiryMonth=page.locator('//select[@id="cc_exp_month"]')
    this.expiryYear=page.locator('//select[@id="cc_exp_year"]')
    this.cvvNum=page.locator('//input[@id="cc_cvv"]')
    this.bookNow=page.locator('//input[@id="book_now"]')

}

async fillFirstName()
{
    await this.firstName.fill('John')
}
async fillLastName()
{
    await this.lastName.fill('cena')
}
async fillBillAddress()
{
    await this.billAddress.fill('No 1,bunglow street London')
}
async fillCreditCardNum()
{
    await this.creditCardNum.fill('1234567890123456')
}
async fillCreditCardType()
{
    await this.creditCardType.selectOption({index:1})
}
async fillExpiryMonth()
{
    await this.expiryMonth.selectOption({value:"1"})
}
async fillExpiryYear()
{
    await this.expiryYear.selectOption({label:"2026"})
}
async fillCvvNum()
{
    await this.cvvNum.fill('123')
}
async clickBookNow()
{
    await this.bookNow.click()
}
}