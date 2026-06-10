import {test} from '@playwright/test'
test('text box',async({page})=>{
    await page.goto('https://demoqa.com/text-box')
     await page.locator('//input[@id="userName"]').fill('JegadheesanL')//branch1

    await page.locator('//input[@class="mr-sm-2 form-control"]').fill('abc@gmailcom')
    await page.locator('//textarea[@placeholder="Current Address"]').fill('trendnologies perungudi,kandanchavadi')
    await page.locator('//textarea[@id="permanentAddress"]').fill('Kumaran Nagar ,chennai')
    await page.waitForTimeout(3000)
    await page.locator('//button[@id="submit"]').click
    //await page.locator('//button[@id="submit"]').click
    

    

})
