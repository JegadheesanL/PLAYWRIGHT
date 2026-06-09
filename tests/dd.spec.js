

import{test}from '@playwright/test'
test('dd',async({page})=>{
    await page.goto('https://letcode.in/dropdowns')//select[@id="fruits"]
    const d=await page.locator('//select[@id="fruits"]')
    await d.selectOption({label:"Banana"})
    const b=await d.locator('option:checked').textContent()
    console.log(b)



const c=await page.locator('//select[@id="lang"]')
await c.selectOption({label:"C#"})
const lan=await c.locator('option:checked').textContent()
console.log(lan)
const cd=await page.locator('//select[@id="lang"]//option').allTextContents()
console.log(cd)
})