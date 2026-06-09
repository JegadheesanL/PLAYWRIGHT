import{test}from '@playwright/test'
test('Exweb table',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/web table')

//row count
const row=await page.locator('//table[@name="BookTable"]//tbody//tr')
console.log('row count',await row.count())
//coloumn  count
const coloumn=await page.locator('//table[@name="BookTable"]//tbody//th')
console.log('coloumn count',await coloumn.count())
//all data from tabel
const all=await page.locator('//table[@name="BookTable"]//tbody//tr').allTextContents()
console.log(all)
//single row data
const srd=await page.locator('//table[@name="BookTable"]//tbody//tr[5]').allTextContents()
console.log(srd)
//coloumn data
const cd=await page.locator('//table[@name="BookTable"]//tbody//tr//td[3]').allTextContents()
console.log(cd)
//particular data from table
const pd=await page.locator('//table[@name="BookTable"]//tbody//tr[4]//td[2]').textContent()
console.log('learn JS author name :'," ",pd)
})







































// import {test}from '@playwright/test'
// test('dynamic web table',async({page})=>{
//  await page.goto('https://testautomationpractice.blogspot.com/web table')
// await page.locator('//table[@id="productTable"]//tbody//tr[1]//td//input[@type="checkbox"]').check()
// await page.waitForTimeout(5000)



// })
